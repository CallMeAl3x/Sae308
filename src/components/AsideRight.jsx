import React from 'react';
import './AsideRight.css';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { BsBodyText } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { motion } from 'framer-motion'

const AsideRight = () => {
  const { db, currentCardIndex } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);

  const fToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='grid-s2'>
      <div className='z-10 relative asideright rounded-l-lg w-full h-full'>
        <div className='flex justify-center flex-col'>
          
          <div className='p-8'>
          <div className='gicone2 flex gap-6  rounded-2xl p-4 w-full justify-evenly bg-green-700 ' >
            <div className='flex flex-col  '  onClick={fToggle}>
              <motion.div className={`${toggle ? "ic1" : "ic1active"}`} whileHover={{
                scale:1.05
              }}
              transition={{
                layout: {
                  duration:0.3,
                  type:"spring"
                }
              }} layout>
                <BsBodyText className='text-[40px] text-orange-500 '/>
              </motion.div>
              <div className='mt-2'><p className='text-[#000000] text-center'>Réponses</p></div>
            </div>
            
            <div className='flex flex-col'>
              <motion.div className='h-16 w-16 bg-white rounded-2xl flex justify-center items-center hover:cursor-pointer' whileHover={{
                scale:1.05
              }}
              transition={{
                layout: {
                  duration:0.3,
                  type:"spring"
                }
              }} layout>
                <BsInfoCircle className='text-[40px] text-orange-500' />
              </motion.div>
              <div className='mt-2'><p className='text-[#000000] text-center'>Sources</p></div>
            </div>
            
          </div>
          </div>
           <motion.div className='flex justify-center p-4 rounded-lg transition-all transition-duration:500' layout>
           <motion.div className={`bg-white border-[3px] ${toggle ? "border-[#D04ED6]" : "border-orange-500"} p-4 rounded-lg ease-in-out duration-500`} >
          {toggle ? (
           
           
              <h3 className='text-black'>
              {db[currentCardIndex]?.RéponseDéveloppé || ''}
              </h3>
              
            
            
          ) : (
            
            
              <h3 className='text-orange-500 italic'>
              Vous pouvez faire apparaitre les réponses a ces questions en appuyant sur  ces icones
              </h3>
              
            
            
          )
        }
        </motion.div></motion.div>
        
        </div>
      </div>
    </div>
  );
};

export default AsideRight;
