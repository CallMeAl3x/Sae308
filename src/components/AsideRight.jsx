import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { motion } from "framer-motion";
import Réponse from "../icons/Réponses.svg";
import Sources from "../icons/Sources.svg";

const AsideRight = () => {
  const { db, currentCardIndex } = useContext(AppContext);
  const [toggleAnswer, setToggleAnswer] = useState(false);
  const [toggleSources, setToggleSources] = useState(false);

  const AnswerToggle = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const SourcesToggle = () => {
    setToggleSources(!toggleSources);
  };

  return (
    <div className="mb-[60vh] mt-auto max-lg:mt-0 max-lg:ml-auto ml-24 mr-auto z-10 rounded-l-lg max-lg:mb-12">
      <div className="flex justify-center flex-col">
        <div className="flex flex-col justify-center gap-6 rounded-2xl max-lg:flex-row max-lg:mt-12">
          <div className="flex items-center" onClick={AnswerToggle}>
            <motion.div
              className={`${
                toggleAnswer ? "bg-black" : "bg-white"
              } h-16 w-16 rounded-2xl flex justify-center hover:cursor-pointer shadow-2xl items-center`}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                layout: {
                  duration: 0.3,
                  type: "spring",
                },
              }}
              layout>
              <img src={Réponse} alt="" height={40} width={44} />
            </motion.div>
            <div className="mt-2">
              <p className="text-[#ffffff] text-center ml-4">Réponses</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6  rounded-2xl mr-2">
            <div className="flex items-center" onClick={SourcesToggle}>
              <motion.div
                className={`${
                  toggleSources ? "bg-black" : "bg-white"
                } h-16 w-16 rounded-2xl flex justify-center hover:cursor-pointer shadow-2xl items-center`}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  layout: {
                    duration: 0.3,
                    type: "spring",
                  },
                }}
                layout>
                <img src={Sources} alt="" height={40} width={44} />
              </motion.div>
              <div className="mt-2">
                <p className="text-[#ffffff] text-center ml-4">Sources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideRight;
