import { useEffect } from 'react';
import sources from '../icons/sources.svg';
import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { AppContext } from '../App'
import AsideRight from './AsideRight';
import { IoAddSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";



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
        autoClose: 1500,
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
        autoClose: 1500,
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
              className='card border-2 rounded-lg'
              id={index}
            >
              <div className=' h-44 w-full overflow-hidden shadow-lg'>
              {Question.Imagerep && (
                <img src={Question.Image} className='imgquizz' draggable="false" 
                alt="" />
              )}
              {!Question.Imagerep && (
                <video src={Question.Image} controls autoPlay className='rounded-lg '></video>
              )}
              </div>
                <div className='flex justify-center mt-12'>
                <div className='w-[80%] h-[2px] bg-[#ffffff] rounded-md'>

                </div>
              </div>
              <div className='flex flex-col justify-between items-center mt-2 p-4'>
                <h2 className='text-center text-white text-3xl mt-2 font-bold'>Anecdote n<sup>o</sup>{db.length - index}</h2>
                <h3 className='mt-4 p-2 text-center text-white'>{Question.Intitulé}</h3>
              </div>
              
              

            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons gap-20 p-4  blur-[0px] shadow-lg px-12'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className='bg-white w-20 h-20 rounded-[20px] boutline' onClick={() => swipe('left')}>
          <span className='flex justify-center items-center h-full'>
          <IoAddSharp className='text-orange-500 text-[80px] rotate-45'/>
          </span>
</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} className='bg-white w-20 h-20 rounded-[20px] boutline ' onClick={() => swipe('right')}>
        <span className='flex justify-center items-center h-full'> <FaCheck className='text-[#D04ED6] text-[55px] ' /></span>
          </button>
      </div>
      {lastDirection ?(
        
        <h2 key={lastDirection} className='infoText mt-2 ' >
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText mt-2'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )}
      
      <ToastContainer/>
      

    </div>
    
  )
}

export default Main