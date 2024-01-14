import React, { createContext, useContext, useState } from 'react';
import "./Simulation.css";
import MatchingCardSimulation from './MatchingCardSimulation';
import imgbonhomme1 from "../img/bonhommepret.png";
import { SimContext } from '../pages/Part3';

function Simulation() {
    const { db2, currentCardIndex2, setCurrentCardIndex2 } = useContext(SimContext);

    const [valbarre1, setValBarre1] = useState(256);
    const [valbarre2, setValBarre2] = useState(256);
    const [valbarre3, setValBarre3] = useState(256);
    const [valbarre4, setValBarre4] = useState(256);

    const generateRandomValue = (i) => {
        if (i !== 0) {
            return Math.floor(Math.random() * 40 / i);
        } else {
            // Handle division by zero case
            console.error("Division by zero error!");
            return null; // or any other appropriate action
        }
    };

    const baisserVal = (setValBarre, i) => {
        const alval = generateRandomValue(i);
        setValBarre(prevVal => prevVal - alval);
    };

    return (
        <div>
            <div className="flex max-lg:flex-col">
                <div className=' flex'>
                    <div className='w-80 h-[700px] flex justify-center items-center '>
                        <img src={imgbonhomme1} alt="" />
                    </div>
                    <MatchingCardSimulation
                        baisserVal1={() => baisserVal(setValBarre1, 2)}
                        baisserVal2={() => baisserVal(setValBarre2, 2)}
                        baisserVal3={() => baisserVal(setValBarre3, 3)}
                        baisserVal4={() => baisserVal(setValBarre4, 4)}
                    />
                </div>
                <div className='w-full h-[700px] p-16'>
                    <div className='w-full h-full  '>
                        <div className='barrescont flex justify-center gap-48 p-16 '>
                            <div className=' flex flex-col gap-12 '>
                                <div className=''>
                                    <span>Cercle Sociale</span>
                                    <div className='relative w-64 h-4 bg-white z-10 rounded'>
                                        <div style={{ width: `${valbarre1}px` }} className='absolute h-full  barreval1 ease duration-300 rounded'></div>
                                    </div>
                                </div>
                                <div className=''>
                                    <span>Confiance en soi</span>
                                    <div className='relative w-64 h-4 bg-white z-10 rounded'>
                                        <div style={{ width: `${valbarre2}px` }} className='absolute h-full  barreval2 ease duration-300 rounded'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-12'>
                                <div className=''>
                                    <span>Situation financière</span>
                                    <div className='relative w-64 h-4 bg-white z-10 rounded'>
                                        <div style={{ width: `${valbarre3}px` }} className='absolute h-full  barreval3 ease duration-300 rounded'></div>
                                    </div>
                                </div>
                                <div className=''>
                                    <span>Bonheur</span>
                                    <div className='relative w-64 h-4 bg-white z-10 rounded'>
                                        <div style={{ width: `${valbarre4}px` }} className='absolute h-full barreval4 ease duration-300 rounded'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='border-2 border-red-500' onClick={() => { baisserVal(setValBarre1, 1); baisserVal(setValBarre2, 2); baisserVal(setValBarre3, 3); baisserVal(setValBarre4, 4); }}>
                            click me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simulation;
