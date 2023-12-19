<<<<<<< Updated upstream
import React from "react";
import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Part1 from "../icons/1.svg";
import Part2 from "../icons/2.svg";
import Advices from "../icons/Advices.svg";
import Simulation from "../icons/Simulation.svg";

const NavBar = () => {
  return (
    <div className="ml-6 flex items-center max-lg:h-auto h-screen max-lg:mb-2 mb-24 max-lg:hidden">
      <nav className="px-5 py-6 bg-almost-white rounded-[39px] shadow-nav white bg-cover z-10 relative flex flex-col">
        <ul className="flex flex-col gap-20 text-2xl mt-4 items-center pb-6 pt-6">
          <Link to="/">
            <li>
              <img src={Home} alt="" className="h-[34px] w-[42px]" />
            </li>
          </Link>
          <Link to="/Part1">
            <img src={Part1} alt="" className="h-[34px] w-[42px]" />
          </Link>
          <Link to="/Part2">
            <img src={Part2} alt="" className="h-[34px] w-[42px]" />
          </Link>
          <Link to="/Part3">
            <img src={Simulation} alt="" className="h-[34px] w-[42px]" />
          </Link>
          <Link to="/Part2">
            <img src={Advices} alt="" className="h-[34px] w-[42px]" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
=======
import React from "react";
import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Part1 from "../icons/1.svg";
import Part2 from "../icons/2.svg";
import Advices from "../icons/Advices.svg";
import Simulation from "../icons/Simulation.svg";

const NavBar = () => {
  return (
    <div className="ml-6 flex items-center max-lg:h-auto h-screen max-lg:mb-2 mb-24 max-lg:hidden">
      <nav className="px-5 py-6 bg-almost-white rounded-[39px] shadow-nav white bg-cover z-10 relative flex flex-col">
        <ul className="flex flex-col gap-20 text-2xl mt-4 items-center pb-6 pt-6">
          <Link to="/">
            <li>
              <img src={Home} alt="" className="h-[34px] w-[42px]" />
            </li>
          </Link>
          <Link to="/Part1">
            <img src={Part1} alt="" className="h-[34px] w-[42px]" />
          </Link>
          <Link to="/Part2">
            <img src={Part2} alt="" className="h-[34px] w-[42px]" />
          </Link>
          <Link to="/Part3">
            <img src={Simulation} alt="" className="h-[34px] w-[42px]" />
          </Link>
          <Link to="/Part2">
            <img src={Advices} alt="" className="h-[34px] w-[42px]" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
>>>>>>> Stashed changes
