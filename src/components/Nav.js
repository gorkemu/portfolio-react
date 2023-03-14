import React, { useEffect, useState } from "react";
import "./nav.css";

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
        "header col-span-2 fixed w-full flex items-center justify-between px-20 bg-black text-sm z-20 " +
        hState
      }
    >
      <div className="p-2">Logo</div>
      <ul className="flex items-center justify-between cursor-pointer">
        <li className="py-2 px-3 opacity-90 hover:opacity-100 transform transition-colors duration-200">
          <a href="#about">About</a>
        </li>
        <li className="py-2 px-3 opacity-90 hover:opacity-100 transform transition-colors duration-200">
          <a href="#projects">Projects</a>
        </li>
        <li className="py-2 px-3 opacity-90 hover:opacity-100 transform transition-colors duration-200">
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
