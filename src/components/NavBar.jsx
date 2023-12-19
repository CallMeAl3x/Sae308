import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Part1 from "../icons/1.svg";
import Part2 from "../icons/2.svg";
import Advices from "../icons/Advices.svg";
import Simulation from "../icons/Simulation.svg";

const NavBar = () => {

const [isHovered,setIsHovered] = useState(false);


const hoveranim = () =>{
  setIsHovered(!isHovered);
}
return (
  <div className={`ml-6 flex max-lg:h-auto h-screen max-lg:mb-2 mb-24 max-lg:hidden items-center `}>
    <nav className={`px-5 py-6 bg-almost-white rounded-[39px] shadow-nav nav white bg-cover z-10 relative flex flex-col `}>
      <ul className="flex flex-col gap-20 text-2xl mt-4 pb-6 pt-6">
        <Link to="/" className="lii" data-text="Accueil">
          <li>
            <img src={Home} alt="" className="h-[34px] w-[42px] lii" />
          </li>
        </Link>
        {/* Ajoutez data-text à chaque lien pour définir le texte à afficher */}
        <Link to="/Part1" className="lii" data-text="Partie 1">
          <li>
            <img src={Part1} alt="" className="h-[34px] w-[42px] lii" />
          </li>
        </Link>
        <Link to="/Part2" className="lii" data-text="Partie 2">
          <li>
            <img src={Part2} alt="" className="h-[34px] w-[42px] lii" />
          </li>
        </Link>
        <Link to="/Part3" className="lii" data-text="Simulation">
          <li>
            <img src={Simulation} alt="" className="h-[34px] w-[42px] lii" />
          </li>
        </Link>
        <Link to="/Part2" className="lii" data-text="Conseils">
          <li>
            <img src={Advices} alt="" className="h-[34px] w-[42px] lii" />
          </li>
        </Link>
      </ul>
    </nav>
  </div>
);
};

export default NavBar;
