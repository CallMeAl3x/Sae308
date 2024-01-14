import React, { createContext, useContext, useState } from 'react'
import "./Simulation.css"
import MatchingCardSimulation from './MatchingCardSimulation';
import SimulationAsideRight from './SimulationAsideRight';
import imgbonhomme1 from "../img/bonhommepret.png";
import woman1 from "../img/woman1.jpg"
import { SimContext } from '../pages/Part3';


function Simulation() {

    

    const { db2, currentCardIndex2, setCurrentCardIndex2 } = useContext(SimContext);


        const [valbarre1,setValBarre1] = useState(256);

        const baisserVal1 = () => {
            setValBarre1(prevVal => prevVal - 8);
            console.log(valbarre1);
        };


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
                <div className='w-full h-full  '>
                    <div className='barrescont flex flex-col gap-12'>


                        <div className=''>
                            <span>
                                Hey
                            </span>
                            <div className='relative w-64 h-4 bg-black z-10'>
                                <div style={{ width: `${valbarre1}px` }} className='absolute h-full bg-red-500 barreval1'>
                                </div>
                            </div>
                        </div>

                    <button className='border-2 border-red-500' onClick={baisserVal1}>
                                click me
                    </button>


                        


                    </div>
                </div>
            </div>



      </div>
    </div>
  )
}

export default Simulation