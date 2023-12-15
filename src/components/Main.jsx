import { useEffect } from 'react';
import sources from '../icons/sources.svg';
import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const db = [
  {
    Intitulé: 'En 2023, le moyen le plus utilisé pour rencontrer des personnes est internet.',
    Réponse: 'Vrai',
    RéponseDéveloppé: "Vrai, en effet en effet d'après une étude faite aux Etat-Unis on compte 40% des gens se sont rencontré via internet en 2020.",
    Image: "../img/representation.jpeg",
    Source: 'Disintermediating your friends: How Online Dating in the United States displaces other ways of meeting" Michael Rosenfeld & Sonia Hausen, Stanford University, Reuben J. Thomas, University of New Mexico Données provenant des enquêtes « How Couples Meet and Stay Together », 2009 et 2017',
  },
  {
    Intitulé: 'Plus d\'une personne sur deux avoue utiliser des filtres ou des retouches excessives sur leurs photos de profil.',
    Réponse: 'Vrai',
    RéponseDéveloppé: "Vrai, en effet plus de 60% des utilisateurs admettent utiliser des filtres ou des retouches pour améliorer leur apparence sur les photos de leurs profils.",
    Image: '../img/representation.jpeg',
    Source: '',
  },
  {
    Intitulé: 'Les algorithmes des sites de rencontre sont conçus pour garantir des correspondances précises et durables entre les utilisateurs.',
    Réponse: 'Faux',
    RéponseDéveloppé: "Les algorithmes des sites de rencontre peuvent ne pas toujours mener à des correspondances précises ou durables. Ils sont souvent basés sur des critères superficiels.",
    Image: '../img/representation.jpeg',
    Source: '',
  },
  {
    Intitulé: 'Les utilisateurs de sites de rencontre passent en moyenne moins de 30 minutes par jour',
    Réponse: 'Faux',
    RéponseDéveloppé: "Faux, en effet les utilisateurs de sites de rencontre passent en moyenne 35 minutes par jour",
    Image: '../img/representation.jpeg',
    Source: '',
  },
  {
    Intitulé: 'Les utilisateurs ouvrent en moyenne l\'application Tinder plus de 5 fois par jour ?',
    Réponse: 'Vrai',
    RéponseDéveloppé: "Vrai, en effet les utilisateurs de l'application Tinder l'ouvrent en moyenne 11 fois par jour.",
    Image: '../img/representation.jpeg',
    Source: '',
  },
  {
    Intitulé: 'La moitié des personnes âgées de moins de 30 ans ont déjà utilisé une application de rencontre.',
    Réponse: 'Vrai',
    RéponseDéveloppé: "",
    Image: '../img/representation.jpeg',
    Source: '',
  },
]

const Main = () => {

  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  
    // Trigger the same logic as button clicks based on swipe direction
    if (direction === 'right') {
      swipe('right');
    } else if (direction === 'left') {
      swipe('left');
    }
  };

  const outOfFrame = (Question, index, swipeDirection) => {
    console.log(`${Question} (${index}) left the screen with swipe direction: ${swipeDirection}`);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= index && childRefs[index].current.restoreCard();
  
    // Trigger the same logic as button clicks based on swipe direction
    if (swipeDirection === 'right') {
      swipe('right');
      toast("droite");
    } else if (swipeDirection === 'left') {
      swipe('left');
      toast("gauche");
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      const currentQuestion = db[currentIndex];
      const isCorrect = (dir === 'right' && currentQuestion.Réponse === 'Vrai') ||
                        (dir === 'left' && currentQuestion.Réponse === 'Faux');
  
      if (isCorrect) {
        toast.success('Bonne réponse', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        toast.error('Mauvaise réponse', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
  
      await childRefs[currentIndex].current.swipe(dir);
    }
  }

  
  return (
    <div className='flex justify-center align-middle flex-col items-center'>
      <div className='cardContainer'>
        {db.map((Question, index) => (
          <TinderCard
          ref={childRefs[index]}
          className='swipe'
          key={Question.Intitulé}
          onSwipe={(dir) => swiped(dir, Question.Intitulé, index)}
          onCardLeftScreen={(dir) => outOfFrame(Question.Intitulé, index, dir)}
        >
            <div
              style={{ backgroundImage: 'url(' + Question.url + ')' }}
              className='card p-2 shadow-xl border-2 border-gray-200 rounded-lg'
              id={index}
            >
              <div className='flex justify-between items-center'>
                <h2 className='text-center text-black mt-2 ml-4'>Question n<sup>o</sup> {db.length - index}</h2>
                <img src={sources} alt='sources' className='w-6 h-6 mr-4 mt-2' />
              </div>
              <h3 className='mt-2 text-center text-black'>{Question.Intitulé}</h3>
              <img src="/img/representation.jpeg" className='h-52 select-none' draggable="false" 
              alt="" />
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Faux</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Vrai</button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
      
        <ToastContainer />
    </div>
  )
}

export default Main