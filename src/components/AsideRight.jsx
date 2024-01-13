import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { motion } from "framer-motion";
import Réponse from "../icons/Réponses.svg";
import Sources from "../icons/sources.svg";

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
    <div
      className={`${
        toggleAnswer || toggleSources ? "" : ""
      } h-screen justify-center flex mb-auto max-lg:ml-auto ml-24 mr-auto z-10 rounded-l-lg max-lg:mb-12 max-lg:h-fit max-lg:`}>
      <div className="flex justify-center flex-col">
        <div className="flex flex-col justify-center gap-6 rounded-2xl max-lg:mt-12 max-lg:flex-col">
          <div
            className={`${
              toggleAnswer
                ? "flex-col items-center"
                : "flex-row pl-2 items-center"
            } flex items-center"`}
            onClick={AnswerToggle}>
            <div
              className={`${
                toggleAnswer ? "max-lg:flex-col" : "max-lg:flex-row"
              } flex items-center align-middle"`}>
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
              <div className="flex flex-col">
                <div className="mt-2">
                  <p
                    className={`${
                      toggleAnswer ? "max-lg:ml-0" : "max-lg:ml-4"
                    } ml-4 text-[#ffffff] text-center`}>
                    Réponses
                  </p>
                </div>
              </div>
              {toggleAnswer && (
                <div className="bg-white p-4 rounded-xl ml-4">
                  <p className="text-black text-center max-w-[300px] break-words">
                    {db[currentCardIndex].RéponseDéveloppé}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-2xl max-lg:flex-row max-lg:mt-2">
            <div
              className={`${
                toggleSources
                  ? "flex-col items-center"
                  : "flex-row pl-2 items-center"
              } flex items-center"`}
              onClick={SourcesToggle}>
              <div
                className={`${
                  toggleSources ? "max-lg:flex-col" : "max-lg:flex-row"
                } flex items-center align-middle"`}>
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
                <div className="flex flex-col">
                  <div className="mt-2">
                    <p
                      className={`${
                        toggleSources ? "max-lg:ml-0" : "max-lg:ml-4"
                      } ml-4 text-[#ffffff] text-center`}>
                      Sources
                    </p>
                  </div>
                </div>
                {toggleSources && (
                  <div className="bg-white p-4 rounded-xl ml-4">
                    <p className="text-black text-center max-w-[300px] break-words">
                      {db[currentCardIndex].Source}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideRight;
