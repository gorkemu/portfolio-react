import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen mt-40 pt-20 mx-4">
      <h1 className="text-5xl mb-10">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl text-yellow mb-2">Tech Support Captain</h2>
          <div className="text-2xl">Upwork - Freelance</div>
          <div className="mt-1 text-xl">Dec 2022 - Present</div>
          <div className="mt-2 text-lg">
            Technical Support Captain for Outlook Mobile app
          </div>
        </div>
        <div>
          <h2 className="text-4xl text-yellow mb-2">Tech Support Agent</h2>
          <div className="text-2xl">Upwork - Freelance</div>
          <div className="mt-1 text-xl">Sep 2016 - Dec 2022</div>
          <div className="mt-2 text-lg">
            Technical Support Agent for Outlook Mobile app
          </div>
        </div>
        <div>
          <h2 className="text-4xl text-yellow mb-2">
            Product Management Specialist
          </h2>
          <div className="text-2xl">Vestel</div>
          <div className="mt-1 text-xl">Aug 2015 - May 2016</div>
          <div className="mt-2 text-lg">
            Product management of Venüs smartphones (Turkey's first domestically
            designed and manufactured smartphone), tablets, VR headsets and
            wearable technologies
          </div>
        </div>
        <div>
          <h2 className="text-4xl text-yellow mb-2">
            Product Management Specialist
          </h2>
          <div className="text-2xl">AVEA</div>
          <div className="mt-1 text-xl">Feb 2014 - Aug 2015</div>
          <div className="mt-2 text-lg">
            Product management of M2M data and pool packages, M2M tariffs,
            Vehicle Tracking System Campaigns, Mobile POS Tariffs, Mobile
            Signature Service and IoT services (Smart Home & Smart Lighting)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
