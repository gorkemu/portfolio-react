import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="pl-6 md:pl-24 min-h-screen">
      <About />
      <Projects />
      <Experience />
    </div>
  );
};

export default Main;
