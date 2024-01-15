import React, { useState, useMemo, useRef, useCallback } from "react";
import TinderCard from "react-tinder-card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { SimContext } from "../pages/Part3";
import False from "../icons/False.svg";
import True from "../icons/True.svg";
function MatchingCardSimulation({
  baisserVal1,
  baisserVal2,
  baisserVal3,
  baisserVal4,
}) {
  const [grayscale, setGrayScale] = useState(false);

  const activateGrayScale1 = () => {
    setGrayScale(true);
  };

  const activateGrayScale2 = () => {
    setGrayScale(false);
  };
  const { db2, currentCardIndex2, setCurrentCardIndex2 } =
    useContext(SimContext);

  const [currentIndex, setCurrentIndex] = useState(db2.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db2.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    // Vérifier si l'index courant a déjà été swipé.
    setLastDirection(direction);
    setCurrentCardIndex2(index); // Mise à jour de l'index courant dans le contexte
    updateCurrentIndex(index - 1); // Mise à jour de l'index pour la prochaine carte

    console.log(`Swiped at index ${index}: ${direction}`); // Débogage

    if (direction === "right") {
      toast.success("Swipe à droite détecté", {
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
    if (direction === "left") {
      toast.error("Swipe à gauche détecté", {
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

    baisserVal1();
    baisserVal2();
    baisserVal3();
    baisserVal4();

    // Marquer l'index comme swipé
    currentIndexRef.current = index;
  };

  const outOfFrame = useCallback((name, index) => {
    if (index === currentIndexRef.current) {
      console.log(`Card left the screen at index ${index}: ${name}`);
      currentIndexRef.current = null; // Réinitialiser la référence d'index
    }
  }, []);

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db2.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <div className="flex flex-col items-center max-lg:ml-0 h-screen max-lg:h-auto overflow-hidden justify-center mt-0 lg:mt-[80px]">
      <div className="flex justify-center max-lg:mt-12 w-[90vw] max-w-[320px] lg:min-w-[500px] h-[480px] relative">
        {db2.map((Question, index) => (
          <TinderCard
            ref={childRefs[index]}
            preventSwipe={["up", "down"]}
            className="absolute m-auto overflow-hidden"
            key={Question.Intitulé}
            onSwipe={(dir) => swiped(dir, Question.Intitulé, index)}
            onCardLeftScreen={(dir) =>
              outOfFrame(Question.Intitulé, index, dir)
            }>
            <div
              style={{ backgroundImage: "url(" + Question.url + ")" }}
              className="w-[80vw] max-w-[500px] h-[400px] lg:h-[500px] rounded-2xl relative overflow-hidden"
              id={index}>
              <div className="h-full w-full relative overflow-hidden shadow-lg">
                <div className="flex flex-col justify-between p-4 z-10 relative top-[74%] left-0 bg-almost-white rounded-lg w-9/12 max-lg:w-full mr-auto ml-auto">
                  <h2 className="text-almost-black text-3xl font-bold ml-2 font-title">
                    {Question.Prenom}, {Question.Age}
                  </h2>

                  <h3 className="p-2 text-almost-black">{Question.Intitulé}</h3>
                </div>
                {Question.Imagerep && (
                  <img
                    src={Question.Image}
                    className={`absolute cursor-pointer top-0 left-0 z-1 object-cover max-lg:h-full max-lg:w-full h-full grayscalee ${
                      grayscale ? "active" : ""
                    }`}
                    draggable={false}
                    alt=""
                  />
                )}
                {!Question.Imagerep && (
                  <video
                    autoPlay
                    draggable={false}
                    alt=""
                    className="absolute top-0 left-0 z-0 object-cover max-lg:h-full max-lg:w-full">
                    <source src={Question.Image} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="-mt-12 flex flex-wrap gap-16 lg:mt-8">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          className="bg-white w-20 h-20 rounded-full shadow-xl"
          onClick={() => swipe("left")}>
          <span className="flex justify-center items-center h-full">
            <img src={False} alt="" />
          </span>
        </button>
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          className="bg-white w-20 h-20 rounded-full shadow-xl "
          onClick={() => swipe("right")}>
          <span className="flex justify-center items-center h-full">
            {" "}
            <img src={True} alt="" />
          </span>
        </button>
      </div>
      {lastDirection ? (
        <h2
          key={lastDirection}
          className="mt-2 text-almost-white text-2xl text-center">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="lg:mt-2 text-almost-white text-lg lg:max-w-[55%] max-w-[90%] mt-12 text-center font-bold tracking-wide">
          Swipe la carte ou cliques sur les bouttons pour choisir !
        </h2>
      )}
      <ToastContainer />
    </div>
  );
}

export default MatchingCardSimulation;
