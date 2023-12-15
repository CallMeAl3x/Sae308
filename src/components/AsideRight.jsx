import React from 'react'
import './AsideRight.css'
import { useState } from 'react'

import { useContext } from 'react'
import { AppContext } from '../App'


const AsideRight = () => {
  const { db } = useContext(AppContext);
  const [toggleblur, setToggleBlur] = useState(false);

  const fToggle = () => {
    setToggleBlur(!toggleblur);
  };

  return (
    <div className='grid-s2'>
      <div className='z-10 relative asideright rounded-l-lg w-full h-full'>
        <div className='flex justify-center flex-col'>
          <div className='flex justify-center'>
            <button className='p-1 px-4  bg-red-500 rounded' onClick={fToggle}>
              Montrer la réponse
            </button>
          </div>
          <p className={`z-10 ${toggleblur ? '' : 'blur-[3px]'} transition ease-in-out duration-300`}>
            {db.map((item, index) => (
              <div key={index}>
                <p>
                  <strong>Intitulé :</strong> {item.Intitulé}
                </p>
                <p>
                  <strong>Source :</strong> {item.Source || 'Aucune source disponible'}
                </p>
                {/* Vous pouvez ajouter d'autres détails de votre objet 'db' ici si nécessaire */}
                <hr />
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AsideRight;
