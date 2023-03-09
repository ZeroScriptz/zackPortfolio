import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

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
          <img src={logo} alt="logo" className="w-64 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <NavBarItem title="Home" to="/" />
        <NavBarItem title="Projects" to="./projects" />
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
          <AiOutlineClose
            fontSize={32}
            className="text-white md:hidden cursor-pointer AiMobile"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                fontSize={32}
                onClick={() => setToggleMenu(false)}
              />
            </li>
            <NavBarItem
              title="Home"
              to="/"
              classprops="my-2 text-lg"
            />
            <NavBarItem
              title="Projects"
              to="/projects"
              classprops="my-2 text-lg"
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
