import React from 'react';
import './AsideRight.css';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const AsideRight = () => {
  const { db, currentCardIndex } = useContext(AppContext);
  const [toggleblur, setToggleBlur] = useState(false);

  const fToggle = () => {
    setToggleBlur(!toggleblur);
  };

  return (
    <div className='grid-s2'>
      <div className='z-10 relative asideright rounded-l-lg w-full h-full'>
        <div className='flex justify-center flex-col'>
          <div className='flex justify-center'>
            <button className='p-1 px-4 mt-4 bg-white text-red-500 rounded' onClick={fToggle}>
              Montrer la réponse
            </button>
          </div>
          {/* Affichage de la réponse de la carte actuellement sélectionnée */}
          <p className={`z-10 ${toggleblur ? '' : 'blur-[3px]'} transition ease-in-out duration-300 mt-4`}>
            {db[currentCardIndex]?.RéponseDéveloppé || ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AsideRight;
