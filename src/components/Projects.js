import React from "react";
import twitterClone from "../assets/twitter-clone.png";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen pt-24 m-10">
      <h1 className="text-5xl mb-10">Projects</h1>
      <div>
        <a
          href="https://twitter-clone-f247f.web.app/"
          className="text-4xl text-yellow opacity-80 hover:opacity-100 transform transition-all duration-200 "
        >
          Twitter Clone
        </a>
        <p className="text-2xl my-3">
          Basic Twitter Clone using React and Firebase
        </p>
        <div>
          <img
            src={twitterClone}
            className="rounded-2xl max-w-sm sm:max-w-md md:max-w-3xl  border-yellow border-2"
            alt=""
          ></img>
          <div className="px-4 mt-4">
            <h2 className="text-2xl text-yellow">Features</h2>
            <ul className="text-xl list-disc">
              <li>
                Authenticate with Firebase using Email/password or Google
                sign-in methods
              </li>
              <li>Log in / log out</li>
              <li>Upload / change avatar</li>
              <li>Send tweets with or without images</li>
              <li>Preview / cancel images before sending tweet</li>
              <li>Delete tweets</li>
              <li>Deactivate account</li>
            </ul>
            <h3 className="mt-4">
              <a
                href="https://twitter-clone-f247f.web.app/"
                className="text-2xl text-yellow opacity-80 hover:opacity-100 transform transition-all duration-200 "
              >
                Live Demo
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
