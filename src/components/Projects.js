import React from "react";
import twitterClone from "../assets/twitter-clone.png";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen pt-20 mx-4">
      <h1 className="text-5xl mb-10">Projects</h1>
      <div className="relative">
        <div className="mb-5">
          <a
            href="https://twitter-clone-f247f.web.app/"
            className="text-4xl text-yellow opacity-80 hover:opacity-100 transform transition-all duration-200 "
            target="_blank"
            rel="noreferrer"
          >
            Twitter Clone
          </a>
        </div>

        <div className="lg:flex gap-6 items-center">
          <img
            src={twitterClone}
            className="rounded-2xl lg:w-1/2 z-0"
            alt=""
          ></img>
          <div className="p-6 mt-4 lg:w-1/2 bg-navy text-right z-10 rounded-2xl">
            <p className="text-xl">
              A minimal Twitter clone using{" "}
              <span className="text-yellow">React </span> and{" "}
              <span className="text-yellow">Firebase</span>, with features like{" "}
              <span className="text-yellow">Authentication</span>, changing
              avatar, sending tweets with or without images,{" "}
              <span className="text-yellow">previewing </span>
              or cancelling images before sending tweet,{" "}
              <span className="text-yellow">deleting</span> tweets
            </p>
            <div className="flex justify-end items-center gap-6 mt-4 text-">
              <a
                href="https://twitter-clone-f247f.web.app/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-yellow transform transition-all duration-200"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/gorkemu/twitter-clone"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-yellow transform transition-all duration-200"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
