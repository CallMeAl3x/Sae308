import React, { createContext, useContext, useState } from "react";
import "./Simulation.css";
import MatchingCardSimulation from "./MatchingCardSimulation";
import imgbonhomme1 from "../img/bonhommepret.png";
import { SimContext } from "../pages/Part3";

function Simulation() {
  const { db2, currentCardIndex2, setCurrentCardIndex2 } =
    useContext(SimContext);

  const [valbarre1, setValBarre1] = useState(256);
  const [valbarre2, setValBarre2] = useState(256);
  const [valbarre3, setValBarre3] = useState(256);
  const [valbarre4, setValBarre4] = useState(256);

  const generateRandomValue = (i) => {
    if (i !== 0) {
      return Math.floor((Math.random() * 40) / i);
    } else {
      // Handle division by zero case
      console.error("Division by zero error!");
      return null; // or any other appropriate action
    }
  };

  const baisserVal = (setValBarre, i) => {
    const alval = generateRandomValue(i);
    setValBarre((prevVal) => prevVal - alval);
  };

  return (
    <main className="flex w-screen items-center justify-evenly lg:flex-row flex-col h-screen overflow-hidden">
      <div className="flex justify-center items-center ">
        <img
          src={imgbonhomme1}
          className="lg:h-[700px] lg:w-auto h-auto w-24 hidden lg:block"
          alt=""
        />
      </div>
      <MatchingCardSimulation
        baisserVal1={() => baisserVal(setValBarre1, 2)}
        baisserVal2={() => baisserVal(setValBarre2, 2)}
        baisserVal3={() => baisserVal(setValBarre3, 3)}
        baisserVal4={() => baisserVal(setValBarre4, 4)}
      />
      <ul className="lg:ml-12 mt-8 lg:mt-0 flex flex-col gap-4 lg:gap-8 lg:mb-24 lg:pb-0 pb-12">
        <li>
          <span>Cercle Sociale</span>
          <div className="relative bg-white rounded w-64 h-4">
            <div
              style={{ width: `${valbarre1}px` }}
              className="absolute barreval1 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
        <li>
          <span>Confiance en soi</span>
          <div className="relative bg-white rounded w-64 h-4">
            <div
              style={{ width: `${valbarre2}px` }}
              className="absolute barreval2 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
        <li>
          <span>Situation financière</span>
          <div className="relative bg-white rounded w-64 h-4">
            <div
              style={{ width: `${valbarre3}px` }}
              className="absolute barreval3 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
        <li>
          <span>Bonheur</span>
          <div className="relative bg-white rounded w-64 h-4">
            <div
              style={{ width: `${valbarre4}px` }}
              className="absolute barreval4 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default Simulation;
