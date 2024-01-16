import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import TinderCard from "react-tinder-card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { SimContext } from "../pages/Part3";
import False from "../icons/False.svg";
import True from "../icons/True.svg";
import { PiConfettiLight, PiWine } from "react-icons/pi";
import { IoIosBed } from "react-icons/io";
import { FaGrinBeamSweat } from "react-icons/fa";
import { Modal2 } from "./Modal2";
import { Flip,Slide } from 'react-toastify';
function MatchingCardSimulation({
  baisserVal1,
  baisserVal2,
  baisserVal3,
  baisserVal4,
  valbarre1,
  valbarre2,
  valbarre3,
  valbarre4,
}) {
  const [bodyOffset, setBodyOffset] = useState(0);

  const HandleBodyOffset = (direction) => {
    if (direction === "right" || direction === "left") {
      setBodyOffset((prevVal) => prevVal + 8);
      console.log(bodyOffset);
      document.body.style.boxShadow = `inset 0px 0px ${
        bodyOffset + 6
      }px 0px  #000000`;
    }
  };

  const [affichagetoastb1, setaffichagetoastb1] = useState(0);
  const [affichagetoastb2, setaffichagetoastb2] = useState(0);
  const [affichagetoastb3, setaffichagetoastb3] = useState(0);
  const [affichagetoastb4, setaffichagetoastb4] = useState(0);

  const [isOpen2, setIsOpen2] = useState(false);
  const openModal2 = () => {
    setIsOpen2(!isOpen2);
  };

  const affichagetoastb11 = () => {
    if (valbarre1 <= 180 && affichagetoastb1 < 1) {
      toast.warn(
        "Tu es entrain de perdre ton cercle social. Fais attention à ne pas t'isoler !",
        {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        }
      );
      setaffichagetoastb1((prevVal) => prevVal + 1);
    }
  };

  const affichagetoastb22 = () => {
    if (valbarre2 <= 140 && affichagetoastb2 < 1) {
      toast.warn(
        "Souris un peu et fais des activités que tu aimes pour te remonter le morale !",
        {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        }
      );
      setaffichagetoastb2((prevVal) => prevVal + 1);
    }
  };

  const affichagetoastb33 = () => {
    if (valbarre3 <= 110 && affichagetoastb3 < 1) {
      toast.warn(
        "Tu es sur tes economies, il est temps de regarder l'argent qu'il te reste",
        {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        }
      );
      setaffichagetoastb3((prevVal) => prevVal + 1);
    }
  };

  const affichagetoastb44 = () => {
    if (valbarre4 <= 80 && affichagetoastb4 < 1) {
      toast.warn(
        "ça devient pas un peu toxique tout ça ? Fais attention à toi !",
        {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        }
      );
      setaffichagetoastb4((prevVal) => prevVal + 1);
    }
  };

  const affichagetModal = () => {
    if (valbarre1 <= 15 && affichagetoastb1 < 2) {
      toast.error('Il faut songer à désinstaller l\'application !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        
        });
      setaffichagetoastb1((prevVal) => prevVal + 1);
      openModal2();
    }
  };

  const affichagetModal2 = () => {
    if (valbarre2 <= 15 && affichagetoastb2 < 2) {
      toast.error('Il faut songer à désinstaller l\'application !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        
        });
      setaffichagetoastb2((prevVal) => prevVal + 1);
      openModal2();
    }
  };

  const affichagetModal3 = () => {
    if (valbarre3 <= 15 && affichagetoastb3 < 2) {
      toast.error('Il faut songer à désinstaller l\'application !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        
        });
      setaffichagetoastb3((prevVal) => prevVal + 1);
      openModal2();
    }
  };

  const affichagetModal4 = () => {
    if (valbarre4 <= 15 && affichagetoastb4 < 2) {
      toast.error('Il faut songer à désinstaller l\'application !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        
        });
      setaffichagetoastb4((prevVal) => prevVal + 1);
      openModal2();
    }
  };

  useEffect(() => {
    affichagetoastb11();
    affichagetModal();
  }, [valbarre1]);

  useEffect(() => {
    affichagetoastb22();
    affichagetModal2();
  }, [valbarre2]);

  useEffect(() => {
    affichagetoastb33();
    affichagetModal3();
  }, [valbarre3]);

  useEffect(() => {
    affichagetoastb44();
    affichagetModal4();
  }, [valbarre4]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      toast.success(`Ce profil a été liké`, {
        position: "top-right",
        autoClose: 750,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else if (direction === "left") {
      toast.error(`Ce profil a été ignoré`, {
        position: "top-right",
        autoClose: 750,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }

    baisserVal1();
    baisserVal2();
    baisserVal3();
    baisserVal4();
    HandleBodyOffset(direction);

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
      <div className="flex justify-center max-lg:mt-12 w-[90vw] max-w-[320px] lg:min-w-[500px] h-[480px] relative ">
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
              className="w-[80vw] max-w-[500px] h-[400px] lg:h-[500px] rounded-2xl relative overflow-hidden border-4 border-white"
              id={index}>
              <div className="h-full w-full relative overflow-hidden shadow-lg">
                <div className="absolute top-6 left-[65%] z-50 bg-white rounded-xl p-2 text-black">
                  {Question.Relation === "Relation sérieuse" && (
                    <div className="flex items-center gap-2">
                      <PiWine />
                      {Question.Relation}
                    </div>
                  )}

                  {Question.Relation === "Hésitant" && (
                    <div className="flex items-center gap-2">
                      <FaGrinBeamSweat />
                      {Question.Relation}
                    </div>
                  )}

                  {Question.Relation === "Relation courte" && (
                    <div className="flex items-center gap-2">
                      <PiConfettiLight />
                      {Question.Relation}
                    </div>
                  )}

                  {Question.Relation === "Coup d'un soir" && (
                    <div className="flex items-center gap-2">
                      <IoIosBed />
                      {Question.Relation}
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between p-4 z-10 relative top-[70%] left-0 bg-almost-white rounded-lg w-[80%] max-lg:w-full mr-auto ml-auto">
                  <h2 className="text-almost-black text-3xl font-bold ml-2 font-title">
                    {Question.Prenom}, {Question.Age}
                  </h2>

                  <h3 className="p-2 text-almost-black">{Question.Intitulé}</h3>
                  <h4 className="text-almost-black ml-2 text-[15px]">
                    {Question.Biographie}
                  </h4>
                </div>
                {Question.Imagerep && (
                  <img
                    src={Question.Image}
                    className={`absolute cursor-pointer top-0 left-0 z-1 object-cover max-lg:h-full max-lg:w-full h-full grayscalee}`}
                    draggable={false}
                    alt=""
                  />
                )}
                {!Question.Imagerep && (
                  <video
                    autoPlay
                    draggable={false}
                    alt=""
                    className="absolute top-0 left-0 z-0 object-cover max-lg:h-full max-lg:w-full h-full">
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
        <>
          <h2 className="lg:mt-2 text-almost-white text-lg lg:max-w-[55%] max-w-[90%] mt-12 text-center font-bold tracking-wide">
            Swipe la carte ou cliques sur les bouttons pour choisir !
          </h2>
        </>
      )}
      <ToastContainer />
      <Modal2 isOpen={isOpen2} setIsOpen={setIsOpen2} openModal={openModal2} />
    </div>
  );
}

export default MatchingCardSimulation;
