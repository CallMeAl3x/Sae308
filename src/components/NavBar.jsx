import { Link } from "react-router-dom";
import Home from "../icons/Home.svg";
import Part1 from "../icons/1.svg";
import Part2 from "../icons/2.svg";
import Advices from "../icons/Advices.svg";
import Simulation from "../icons/Simulation.svg";
import { useEffect, useState } from "react";
import Hamburger from "../img/Hamburger_icon.svg";
import Logo from "./Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div>
      <Logo />
      <div className="fixed top-0 left-0 z-50 mt-8 ml-6 sm:hidden flex">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={Hamburger} className="w-8 h-8" alt="Menu" />
        </button>
      </div>

      <div>
        <nav
          className={`fixed top-0 bottom-0 h-screen w-screen justify-center bg-white items-center z-40 ${
            isOpen ? "flex" : "hidden"
          } lg:hidden`}>
          <ul className="flex flex-col gap-8 text-3xl ml-3 mr-3 justify-center items-center">
            <Link to="/" className="flex items-center relative Link">
              <li>
                <p className="text-black">Home</p>
              </li>
            </Link>
            <Link to="/Part1" className="flex items-center relative Link">
              <li>
                <p className="text-black">Partie 1</p>
              </li>
            </Link>
            <Link to="/Part2" className="flex items-center relative Link">
              <li>
                <p className="text-black">Partie 2</p>
              </li>
            </Link>
            <Link to="/Part3" className="flex items-center relative Link">
              <li>
                <p className="text-black">Simulation</p>
              </li>
            </Link>
            <Link to="/Part4" className="flex items-center relative Link">
              <li>
                <p className="text-black">Conseils</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      <div
        className={`hidden sm:flex sm:fixed top-16 left-0 items-center justify-center w-screen z-40 active ${
          show ? "makeitvisible" : "hideit"
        }`}>
        <nav className="p-4 bg-almost-white shadow-nav nav white bg-cover z-10 relative flex justify-center rounded-xl">
          <ul className="flex gap-20 text-3xl ml-3 mr-3">
            <Link to="/" className="flex items-center relative Link">
              <li>
                <img src={Home} alt="" className="h-[34px] w-[42px]" />
              </li>
              <div className="absolute top-16 -left-3 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
                <span>Home</span>
              </div>
            </Link>
            <Link to="/Part1" className="flex items-center relative Link">
              <li>
                <img src={Part1} alt="" className="h-[34px] w-[42px]" />
              </li>
              <div className="absolute top-16 -left-3 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
                <span>Partie&nbsp;1</span>
              </div>
            </Link>
            <Link to="/Part2" className="flex items-center relative Link">
              <li>
                <img src={Part2} alt="" className="h-[34px] w-[42px]" />
              </li>
              <div className="absolute top-16 -left-3 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
                <span>Partie&nbsp;2</span>
              </div>
            </Link>
            <Link to="/Part3" className="flex items-center relative Link">
              <li>
                <img src={Simulation} alt="" className="h-[34px] w-[42px]" />
              </li>
              <div className="absolute top-16 -left-3 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
                <span>Partie&nbsp;3</span>
              </div>
            </Link>
            <Link to="/Part2" className="flex items-center relative Link">
              <li>
                <img src={Advices} alt="" className="h-[34px] w-[42px]" />
              </li>
              <div className="absolute top-16 -left-3 bg-white rounded-xl px-3 py-2 text-sm text-black polygon">
                <span>Conseils</span>
              </div>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
