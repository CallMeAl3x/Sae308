import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Part1 from "../icons/1.svg";
import Part2 from "../icons/2.svg";
import Advices from "../icons/Advices.svg";
import Simulation from "../icons/Simulation.svg";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoveranim = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`ml-6 flex max-lg:h-auto h-screen max-lg:mb-2 mb-24 max-lg:hidden items-center z-40`}>
      <nav
        className={`px-5 py-6 bg-almost-white rounded-xl shadow-nav nav white bg-cover z-10 relative flex flex-col `}>
        <ul className="flex  gap-20 text-2xl mt-4 pb-6 pt-6">
          <Link to="/" className="flex items-center relative Link">
            <li>
              <img src={Home} alt="" className="h-[34px] w-[42px] " />
            </li>
            <div className="absolute left-24 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
              <span>Home</span>
            </div>
          </Link>
          <Link to="/Part1" className="flex items-center relative Link">
            <li>
              <img src={Part1} alt="" className="h-[34px] w-[42px] " />
            </li>
            <div className="absolute left-24 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
              <span>Partie&nbsp;1</span>
            </div>
          </Link>
          <Link to="/Part2" className="flex items-center relative Link">
            <li>
              <img src={Part2} alt="" className="h-[34px] w-[42px] " />
            </li>
            <div className="absolute left-24 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
              <span>Partie&nbsp;2</span>
            </div>
          </Link>
          <Link to="/Part3" className="flex items-center relative Link">
            <li>
              <img src={Simulation} alt="" className="h-[34px] w-[42px] " />
            </li>
            <div className="absolute left-24 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
              <span>Partie&nbsp;3</span>
            </div>
          </Link>
          <Link to="/Part2" className="flex items-center relative Link">
            <li>
              <img src={Advices} alt="" className="h-[34px] w-[42px] " />
            </li>
            <div className="absolute left-24 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
              <span>Conseils</span>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
