import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import "./Mainlayoutpart1.css";
import { IoAccessibilityOutline } from "react-icons/io5";
import tinderimg from "../img/Tinder-icon.png";
import BadooImg from "../img/Badoo-icon-square.png";
import fruitzImg from "../img/fruitz.png";
import hapn from "../img/Hapn.png";
import meetic from "../img/meetic-8QZScb.png";
import Hinge from "../img/hinge.png";
import { motion } from "framer-motion";
import pp1before from "../img/pp1before.png";
import pp1after from "../img/pp1after.png";
import pp2after from "../img/pp2after.png";
import pp2before from "../img/pp2before.png";
import pp3before from "../img/pp3before.png";
import pp3after from "../img/pp3after.png";
import { FaRegHandPointLeft } from "react-icons/fa";
import svg from "../img/decision-maker-analyze-balance-compare-svgrepo-com.svg";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { Modal } from "./Modal";

const Card = () => {
  const [showTitlteCard1, setShowTitleCard1] = useState(false);
  const [showTitlteCard2, setShowTitleCard2] = useState(false);
  const [showTitlteCard3, setShowTitleCard3] = useState(false);

  const cardDrag = useRef();
  const cardDrag2 = useRef();
  const cardDrag3 = useRef();

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

  const showTitle = () => {
    setShowTitleCard1(true);
    console.log("hello");
  };

  const showTitle2 = () => {
    setShowTitleCard2(true);
  };

  const showTitle3 = () => {
    setShowTitleCard3(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  h-96 flex justify-center items-center gap-[240px] mt-16">
      <div className="flex  cardDrag11" ref={cardDrag}>
        <div className="w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative ">
          <img
            src={pp1after}
            alt=""
            className="absolute w-full h-full rounded"
            draggable={false}
          />
          <motion.div
            className="w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden"
            drag="x"
            dragConstraints={{
              left: -200,
              right: 150,
              top: -150,
              bottom: 150,
            }}
            onDragStart={showTitle}
            onDragEnd={handleOpacity}>
            <img
              src={pp1before}
              alt=""
              className="absolute w-full h-full img11 cursor-pointer"
              draggable={false}
            />
            <button className=" bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 ">
              <span className="flex justify-around items-center">
                <span className="text-xl">Drag</span>
                <span className="relative">
                  <div className="pulse">
                    <div className="w-4 h-4 bg-[#ff0055] absolute opacity-40 rounded-full right-5 top-[2px]">
                      <span style={{ "--j": 0 }}></span>
                      <span style={{ "--j": 1 }}></span>
                    </div>
                  </div>
                  <FaRegHandPointLeft size={25} className="" />
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="flex cardDrag21" ref={cardDrag2}>
        <div className="w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative ">
          <img
            src={pp2after}
            alt=""
            className="absolute w-full h-full rounded"
            draggable={false}
          />
          <motion.div
            className="w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden"
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
              className="absolute w-full h-full img22 cursor-pointer"
              draggable={false}
            />
            <button className=" bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 ">
              <span className="flex justify-around items-center">
                <span className="text-xl">Drag</span>
                <span className="relative">
                  <div className="pulse">
                    <div className="w-4 h-4 bg-[#ff0055] absolute opacity-40 rounded-full right-5 top-[2px]">
                      <span style={{ "--j": 0 }}></span>
                      <span style={{ "--j": 1 }}></span>
                    </div>
                  </div>
                  <FaRegHandPointLeft size={25} className="" />
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      <div className="flex cardDrag31" ref={cardDrag3}>
        <div className="w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative ">
          <img
            src={pp3after}
            alt=""
            className="absolute w-full h-full rounded"
            draggable={false}
          />
          <motion.div
            className="w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden"
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
              className="absolute w-full h-full img33 cursor-pointer"
              draggable={false}
            />
            <button className=" bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 ">
              <span className="flex justify-around items-center">
                <span className="text-xl">Drag</span>
                <span className="relative">
                  <div className="pulse">
                    <div className="w-4 h-4 bg-[#ff0055] absolute opacity-40 rounded-full right-5 top-[2px]">
                      <span style={{ "--j": 0 }}></span>
                      <span style={{ "--j": 1 }}></span>
                    </div>
                  </div>
                  <FaRegHandPointLeft size={25} className="" />
                </span>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
