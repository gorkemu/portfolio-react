import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-24 m-4 h-screen">
      <div className="flex w-full justify-center items-center">
        <div className="mx-6">
          <img
            src="https://pbs.twimg.com/profile_images/1624130756829233153/ZEBsJDiR_400x400.jpg"
            className="rounded-full  border-yellow border-2"
            alt=""
          ></img>
        </div>
        <div>
          <p className="text-yellow">Hi there, my name is</p>
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
