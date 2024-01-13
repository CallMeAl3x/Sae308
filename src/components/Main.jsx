import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AppContext } from "../App";
import False from "../icons/False.svg";
import True from "../icons/True.svg";

const Main = () => {
  const { db, currentCardIndex, setCurrentCardIndex } = useContext(AppContext);

  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    setCurrentCardIndex(index); // Mise à jour de l'index de la carte actuelle via le contexte

    const currentQuestion = db[index];
    const isCorrect =
      (direction === "right" && currentQuestion.Réponse === "Vrai") ||
      (direction === "left" && currentQuestion.Réponse === "Faux");

    if (isCorrect) {
      toast.success("Bonne réponse", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Mauvaise réponse", {
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
  };

  const outOfFrame = (Question, index, swipeDirection) => {
    console.log(
      `${Question} (${index}) left the screen with swipe direction: ${swipeDirection}`
    );
    if (canSwipe && currentIndexRef.current >= index) {
      childRefs[index].current.restoreCard();
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      const currentQuestion = db[currentIndex];
      const isCorrect =
        (dir === "right" && currentQuestion.Réponse === "Vrai") ||
        (dir === "left" && currentQuestion.Réponse === "Faux");
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <div className="flex flex-col items-center max-lg:ml-0 ml-auto h-screen max-lg:h-auto overflow-hidden justify-center">
      <div className="flex justify-center max-lg:mt-12 w-[90vw] max-w-[320px] lg:min-w-[500px] h-[480px] relative">
        {db.map((Question, index) => (
          <TinderCard
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
                    className="absolute top-0 left-0 z-0 object-cover max-lg:h-full max-lg:w-full">
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
    </div>
  );
};

export default Main;
