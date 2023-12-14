import React from 'react'
import './AsideRight.css'
import { useState } from 'react'
const AsideRight = () => {

  const [toggleblur,setToggleBlur] = useState(false);

  const fToggle = () =>{
    setToggleBlur(!toggleblur);
    console.log(toggleblur);
  }
  return (
    <div >
      
      <div className='z-10 relative asideright rounded-l-lg w-full h-full'>
      <div className='flex justify-center flex-col'>
        <div className='flex justify-center'>
      <button className='p-1 px-4  bg-red-500 rounded  ' onClick={fToggle}>Montrer la réponse</button>
      </div>
      <p className={`z-10 ${toggleblur ? '' : 'blur-[3px]'} transition ease-in-out duration-300`}>Charles pepom moi bg   .</p>

      </div>
      </div>
      
    </div>
    
  )
}

export default AsideRight