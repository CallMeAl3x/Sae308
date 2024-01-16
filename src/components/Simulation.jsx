import React, { useContext, useState } from "react";
import "./Simulation.css";
import MatchingCardSimulation from "./MatchingCardSimulation";
import { SimContext } from "../pages/Part3";
import { ToastContainer, toast } from "react-toastify";
import bonhome from "../img/part3/bonhommepret.png";
import bonhome2 from "../img/part3/bonhommepret2.png";
import bonhome3 from "../img/part3/bonhommepret3.png";
import bonhome4 from "../img/part3/bonhommepret4.png";
import bonhome5 from "../img/part3/bonhommepret5.png";

function Simulation() {
  function getImageUrl(valbarre1) {
    console.log("Valeur actuelle de valbarre1:", valbarre1);
    let imageUrl;
    if (valbarre1 === 0) {
      imageUrl = bonhome2;
    } else if (bonhome5 < 25) {
      imageUrl = bonhome4;
    } else if (valbarre1 < 50) {
      imageUrl = bonhome3;
    } else if (valbarre1 < 75) {
      imageUrl = bonhome2;
    } else {
      imageUrl = bonhome;
    }
    return imageUrl;
  }

  useContext(SimContext);

  const [valbarre1, setValBarre1] = useState(256);
  const [valbarre2, setValBarre2] = useState(256);
  const [valbarre3, setValBarre3] = useState(256);
  const [valbarre4, setValBarre4] = useState(256);

  if (
    valbarre1 === 0 ||
    valbarre2 === 0 ||
    valbarre3 === 0 ||
    valbarre4 === 0
  ) {
    toast.success("Tu as perdu", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const generateRandomValue = () => {
    const i = Math.floor(Math.random() * 30);

    if (i < 0) {
      return 0; // Si le nombre est négatif, retourne 0.
    } else {
      return i;
    }
  };

  const baisserVal = (setValBarre, i) => {
    const alval = generateRandomValue(i);
    setValBarre((prevVal) => prevVal - alval);
    console.log(valbarre1);
    console.log(valbarre2);
  };

  return (
    <main className="flex items-center lg:flex-row flex-col h-screen overflow-hidden">
      <div className="flex justify-center items-center bonhome">
        <img
          src={getImageUrl(valbarre1)}
          className="lg:h-[700px] lg:w-auto h-auto w-24 hidden lg:block"
          alt=""
        />
      </div>
      <MatchingCardSimulation
        baisserVal1={() => baisserVal(setValBarre1, 2)}
        baisserVal2={() => baisserVal(setValBarre2, 2)}
        baisserVal3={() => baisserVal(setValBarre3, 3)}
        baisserVal4={() => baisserVal(setValBarre4, 4)}
        valbarre1={valbarre1}
        valbarre2={valbarre2}
        valbarre3={valbarre3}
        valbarre4={valbarre4}
      />

      <ul className="lg:ml-12 mt-8 lg:mt-0 flex flex-col gap-4 lg:gap-8 lg:mb-24 lg:pb-0 pb-12">
        <li>
          <span>Cercle Sociale</span>
          <div className="relative bg-white rounded w-64 h-4 border-[1px] border-white">
            <div
              style={{ width: `${valbarre1}px` }}
              className="absolute barreval1 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
        <li>
          <span>Confiance en soi</span>
          <div className="relative bg-white rounded w-64 h-4 border-[1px] border-white">
            <div
              style={{ width: `${valbarre2}px` }}
              className="absolute barreval2 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
        <li>
          <span>Situation financière</span>
          <div className="relative bg-white rounded w-64 h-4 border-[1px] border-white">
            <div
              style={{ width: `${valbarre3}px` }}
              className="absolute barreval3 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
        <li>
          <span>Bonheur</span>
          <div className="relative bg-white rounded w-64 h-4 border-[1px] border-white">
            <div
              style={{ width: `${valbarre4}px` }}
              className="absolute barreval4 ease duration-300 w-full h-full rounded z-10"></div>
          </div>
        </li>
      </ul>
      <ToastContainer />
    </main>
  );
}

export default Simulation;
