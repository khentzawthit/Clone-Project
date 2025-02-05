import React from "react";

const AboutHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 space-x-3">
      <div className=" col-span-1 p-10 shadow-lg bg-gray-100 rounded-sm space-y-5 mb-7">
        <h2 className="text-3xl font-semibold">
          We’re here to get as many people{" "}
          <span className="text-green-500">moving</span> as possible.
        </h2>
        <p className="text-gray-800 text-md ">
          Not just people that are already fit, but all people. We offer a more
          accessible and sustainable alternative to the popular “No, pain. No
          gain.” mantra.
        </p>
        <p className="text-gray-800 text-md ">
          We don’t think exercise should be associated with pain at all. Gives
          it a bad name. Exercise is medicine. When done right, it not only
          alleviates pain, but it protects against it.
        </p>
      </div>

      <div className="col-span-1 ">
        <img
          src="https://media.istockphoto.com/id/75940721/photo/friends.jpg?s=612x612&w=0&k=20&c=LojsF1YiopZoQ_pTq7huJbFN-lcIYcfcFjWBmyNn7Cw="
          alt="#"
          className=" w-full "
        />
      </div>
    </div>
  );
};

export default AboutHero;
