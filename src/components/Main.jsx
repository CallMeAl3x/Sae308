import { useEffect } from 'react';
import sources from '../icons/sources.svg';
import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { AppContext } from '../App'
import AsideRight from './AsideRight';

const Main = () => {
  const { db, currentCardIndex, setCurrentCardIndex } = useContext(AppContext);

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
    setCurrentCardIndex(index); // Mise à jour de l'index de la carte actuelle via le contexte

    const currentQuestion = db[index];
    const isCorrect = (direction === 'right' && currentQuestion.Réponse === 'Vrai') ||
                      (direction === 'left' && currentQuestion.Réponse === 'Faux');
  
    if (isCorrect) {
      toast.success('Bonne réponse', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error('Mauvaise réponse', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
  };
  
  const outOfFrame = (Question, index, swipeDirection) => {
    console.log(`${Question} (${index}) left the screen with swipe direction: ${swipeDirection}`);
    if (canSwipe && currentIndexRef.current >= index) {
      childRefs[index].current.restoreCard();
      
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      const currentQuestion = db[currentIndex];
      const isCorrect = (dir === 'right' && currentQuestion.Réponse === 'Vrai') ||
                        (dir === 'left' && currentQuestion.Réponse === 'Faux');
  
      
      
  
      await childRefs[currentIndex].current.swipe(dir);
    }
  };



  



  
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
              className='card p-2 shadow-sm border-2 border-gray-200 rounded-lg'
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
      <div className='buttons gap-16'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className='bg-red-500 w-24 h-24 rounded-full' onClick={() => swipe('left')}>Faux</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className='bg-red-500 w-24 h-24 rounded-full' onClick={() => swipe('right')}>Vrai</button>
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
      
      <ToastContainer/>
      

    </div>
    
  )
}

export default Main