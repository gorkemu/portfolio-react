import React, { useEffect, useState } from "react";
import "./nav.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Nav = () => {
  const [hState, sethState] = useState("top");

  useEffect(() => {
    let lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  }, []);

  return (
    <nav
      className={
        "header col-span-2 fixed w-full flex items-center justify-between md:justify-end p-20 bg-black text-sm z-20 " +
        hState
      }
    >
      <ul className="flex md:hidden items-center justify-start cursor-pointer">
        <li className="p-4 text-base hover:text-yellow transform transition-all duration-200">
          <a href="https://github.com/gorkemu" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </li>
        <li className="p-4 text-base hover:text-yellow transform transition-all duration-200">
          <a
            href="https://www.linkedin.com/in/gorkemunal/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
      </ul>
      <ul className="flex items-center justify-between cursor-pointer">
        <li className="py-2 px-3 hover:text-yellow text-lg transform transition-all duration-200">
          <a href="#about">About</a>
        </li>
        <li className="py-2 px-3 hover:text-yellow text-lg transform transition-all duration-200">
          <a href="#projects">Projects</a>
        </li>
        <li className="py-2 px-3 hover:text-yellow text-lg transform transition-all duration-200">
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
