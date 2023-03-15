import React from "react";

const About = () => {
  return (
    <section id="about" className="px-4 pt-24 md:pt-20 min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 md:justify-center items-center md:px-16">
        <div className="flex-1 w-3/4 mx-auto">
          <img
            src="https://pbs.twimg.com/profile_images/1624130756829233153/ZEBsJDiR_400x400.jpg"
            className="rounded-full  border-yellow border-2"
            alt=""
          ></img>
        </div>
        <div className="flex-1">
          <span className="text-yellow text-xl">Hi there, my name is</span>
          <p className="text-5xl my-2 font-semibold">Görkem Ünal</p>
          <p className="text-2xl">
            A web developer with a focus on the MERN stack, passionate about
            creating interactive applications and experiences on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
