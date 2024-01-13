import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Part1 from "../icons/1.svg";
import Part2 from "../icons/2.svg";
import Advices from "../icons/Advices.svg";
import Simulation from "../icons/Simulation.svg";

const NavBar = () => {
  return (
    <div
      className={`fixed top-6 left-0 flex items-center justify-center w-screen z-40`}>
      <nav
        className={`p-4 bg-almost-white shadow-nav nav white bg-cover z-10 relative flex justify-center rounded-xl`}>
        <ul className="flex gap-20 text-3xl ml-3 mr-3">
          <Link to="/" className="flex items-center relative Link">
            <li>
              <img src={Home} alt="" className="h-[34px] w-[42px] " />
            </li>
            <div className="absolute top-12 -left-0 rotate-90 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
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
