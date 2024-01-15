import React from "react";
import { motion } from "framer-motion";
import pp1before from "../img/pp1before.png";
import pp1after from "../img/pp1after.png";
import pp2after from "../img/pp2after.png";
import pp2before from "../img/pp2before.png";
import pp3before from "../img/pp3before.png";
import pp3after from "../img/pp3after.png";
import { FaRegHandPointLeft } from "react-icons/fa";

function Card({ showTitle1, showTitle2, showTitle3 }) {
  const handleOpacity = () => {
    const img1 = document.getElementsByClassName("img11")[0]; // Access the first element in the collection
    img1.classList.add("img11anime"); // Remove the dot before "img11anime"
  };

  const handleOpacity2 = () => {
    const img2 = document.getElementsByClassName("img22")[0]; // Access the first element in the collection
    img2.classList.add("img22anime"); // Remove the dot before "img11anime"
  };

  const handleOpacity3 = () => {
    const img3 = document.getElementsByClassName("img33")[0]; // Access the first element in the collection
    img3.classList.add("img33anime"); // Remove the dot before "img11anime"
  };

  return (
    <div className="flex lg:flex-row flex-col items-start cardDrag gap-8 lg:gap-32 justify-center">
      <div className="lg:w-52 lg:h-[350px] w-40 h-[250px] bg-white shadow-2xl rounded-lg relative ">
        <img
          src={pp1after}
          alt=""
          className="absolute w-full h-full rounded"
          draggable={false}
        />
        <motion.div
          className="lg:w-52 lg:h-[350px] w-40 h-[250px] bg-white shadow-2xl rounded-lg absolute overflow-hidden"
          drag="x"
          dragConstraints={{
            left: -200,
            right: 150,
            top: -150,
            bottom: 150,
          }}
          onDragStart={showTitle1}
          onDragEnd={handleOpacity}>
          <img
            src={pp1before}
            alt=""
            className="absolute w-full h-full cursor-pointer img11"
            draggable={false}
          />
          <button className=" bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 ">
            <span className="flex justify-around items-center">
              <span className="text-xl">Drag</span>
              <FaRegHandPointLeft size={25} />
            </span>
          </button>
        </motion.div>
      </div>

      <div className="lg:w-52 lg:h-[350px] w-40 h-[250px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative ">
        <img
          src={pp2after}
          alt=""
          className="absolute w-full h-full rounded"
          draggable={false}
        />
        <motion.div
          className="lg:w-52 lg:h-[350px] w-40 h-[250px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden"
          drag="x"
          dragConstraints={{
            left: -200,
            right: 150,
            top: -150,
            bottom: 150,
          }}
          onDragStart={showTitle2}
          onDragEnd={handleOpacity2}>
          <img
            src={pp2before}
            alt=""
            className="absolute w-full h-full cursor-pointer img22"
            draggable={false}
          />
          <button className=" bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 ">
            <span className="flex justify-around items-center">
              <span className="text-xl">Drag</span>
              {/* Icône ou élément visuel pour indiquer de glisser la carte */}
            </span>
          </button>
        </motion.div>
      </div>
      <div className="lg:w-52 max-w-none lg:h-[350px] w-40 h-[250px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative ">
        <img
          src={pp3after}
          alt=""
          className="absolute w-full h-full rounded"
          draggable={false}
        />
        <motion.div
          className="lg:w-52 lg:h-[350px] w-40 h-[250px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden"
          drag="x"
          dragConstraints={{
            left: -200,
            right: 150,
            top: -150,
            bottom: 150,
          }}
          onDragStart={showTitle3}
          onDragEnd={handleOpacity3}>
          <img
            src={pp3before}
            alt=""
            className="absolute w-full h-full cursor-pointer img33"
            draggable={false}
          />
          <button className=" bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 ">
            <span className="flex justify-around items-center">
              <span className="text-xl">Drag</span>
              {/* Icône ou élément visuel pour indiquer de glisser la carte */}
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
