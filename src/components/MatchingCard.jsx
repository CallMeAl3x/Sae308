import React, { useState, useMemo, useRef, useCallback } from "react";
import TinderCard from "react-tinder-card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AppContext } from "../App";
import False from "../icons/False.svg";
import True from "../icons/True.svg";

const MatchingCard = () => {
  const { db, setCurrentCardIndex } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    [db.length]
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
    setCurrentCardIndex(index); // Mise à jour de l'index courant dans le contexte
    updateCurrentIndex(index - 1); // Mise à jour de l'index pour la prochaine carte

    if (
      (direction === "right" && db[index].Réponse === "Vrai") ||
      (direction === "left" && db[index].Réponse === "Faux")
    ) {
      toast.success("Tu as la bonne réponse", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (
      (direction === "left" && db[index].Réponse === "Vrai") ||
      (direction === "right" && db[index].Réponse === "Faux")
    ) {
      toast.error("Tu as la mauvaise réponse", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // Votre logique pour baisser les valeurs ici

    // Marquer l'index comme swipé
    currentIndexRef.current = index;
  };

  const outOfFrame = useCallback((name, index) => {
    if (index === currentIndexRef.current) {
      currentIndexRef.current = null; // Réinitialiser la référence d'index
    }
  }, []);

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <div className="flex flex-col items-center max-lg:ml-0 ml-auto h-screen max-lg:h-auto overflow-hidden justify-center mt-[80px]">
      <div className="flex justify-center max-lg:mt-12 w-[90vw] max-w-[320px] lg:min-w-[500px] h-[480px] relative">
        {db.map((Question, index) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            ref={childRefs[index]}
            className="absolute m-auto overflow-hidden"
            key={Question.Intitulé}
            onSwipe={(dir) => swiped(dir, Question.Intitulé, index)}
            onCardLeftScreen={(dir) =>
              outOfFrame(Question.Intitulé, index, dir)
            }>
            <div
              style={{ backgroundImage: "url(" + Question.url + ")" }}
              className="w-[80vw] max-w-[475px] h-[480px] rounded-2xl relative overflow-hidden"
              id={index}>
              <div className="h-full w-full relative overflow-hidden shadow-lg">
                <div className="flex flex-col justify-between p-4 z-10 relative top-[72%] left-0 bg-almost-white rounded-t-[25px] w-9/12 max-lg:w-full mr-auto ml-auto">
                  <h2 className="text-almost-black text-3xl font-bold ml-2 font-title">
                    Anecdote n<sup>o</sup>
                    {db.length - index}
                  </h2>
                  <h3 className="p-2 text-almost-black">{Question.Intitulé}</h3>
                </div>
                {Question.Imagerep && (
                  <img
                    src={Question.Image}
                    className="absolute top-0 left-0 z-0 object-cover max-lg:h-full max-lg:w-full h-full"
                    draggable="false"
                    alt=""
                  />
                )}
                {!Question.Imagerep && (
                  <video
                    autoPlay
                    className="absolute top-0 left-0 z-0 object-cover max-lg:h-full max-lg:w-full h-full">
                    <source src={Question.Image} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-10">
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
        <h2 className="mt-2 text-almost-white text-lg max-w-[55%] text-center font-bold tracking-wide">
          Swipe la carte ou cliques sur les bouttons pour répondre !
        </h2>
      )}
      <ToastContainer />
    </div>
  );
};

export default MatchingCard;
