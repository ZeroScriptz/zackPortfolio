import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Contact from "./contact";
import logo from '../assets/images/logoMain.png';

const NavBarItem = ({ title, classprops, to }) => (
  <Link to={to}>
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  </Link>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img  src={logo} alt="logo" className="w-64 cursor-pointer hover:scale-105 hover:rotate-3 transition ease-in-out" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <NavBarItem className="hover:scale-105 hover:-rotate-3" title="Home" to="/" />
        <NavBarItem className="hover:scale-105 hover:rotate-3" title="Projects" to="./projects" />
        <NavBarItem  className="hover:scale-105 hover:-rotate-3" title="Contact" to="./contact" />
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose
              className="cursor-pointer"
                fontSize={32}
                onClick={() => setToggleMenu(false)}
              />
            </li>
            <NavBarItem
            
              title="Home"
              to="/"
              classprops="my-2 text-lg hover:scale-105 hover:rotate-3"
            />
            <NavBarItem
              title="Projects"
              to="/projects"
              classprops="my-2 text-lg hover:scale-105 hover:rotate-3"
            />
            <NavBarItem
              title="Contact"
              to="/contact"
              classprops="my-2 text-lg hover:scale-105 hover:rotate-3"
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
