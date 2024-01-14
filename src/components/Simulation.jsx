import React, { createContext, useContext, useState } from 'react'
import "./Simulation.css"
import MatchingCardSimulation from './MatchingCardSimulation';
import SimulationAsideRight from './SimulationAsideRight';
import imgbonhomme1 from "../img/bonhommepret.png";
import woman1 from "../img/woman1.jpg"
import { SimContext } from '../pages/Part3';


function Simulation() {

    

    const { db2, currentCardIndex2, setCurrentCardIndex2 } = useContext(SimContext);



  return (
    <div >
        <div className="flex max-lg:flex-col ">
            <div className=' flex'>
                
                    <div className='w-80 h-[700px] flex justify-center items-center '>
                            <img src={imgbonhomme1} alt="" />
                    </div>

                    <MatchingCardSimulation/>
                
                
            </div>
        
        <div className='w-full h-[700px] p-8'>
            <div className='w-full h-full bg-blue-500 opacity-20'>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Simulation