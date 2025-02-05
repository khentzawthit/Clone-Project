import React from "react";

const AboutSecondHero = () => {
  return (
    <div className="bg-slate-100 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-16 md:space-x-6 ">
        <div className="col-span-1 mb-6 lg:mb-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661715812379-23d652805042?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXB8ZW58MHx8MHx8fDA%3D"
            alt=""
            className=""
          />
        </div>
        <div className="col-span-1 space-y-5 ">
          <div className="text-md md:text-2xl font-semibold">
            <h1>More than a name, Primal 7 is</h1>
            <h2>
              what makes us <span className="text-green-500">human.</span>
            </h2>
          </div>
          <p className="text-gray-800">
            The name Primal 7 refers to the seven primary patterns of human
            movement. We all push, pull, lunge, hinge (bend), squat, twist, and
            walk (gait). Like the 12 notes of music, these seven movements are
            the basis of just about every daily activity or sport that we do.
          </p>
          <p className="text-gray-800">
            You can do far more than these seven movements with our system, but
            Primal 7 reminds us to focus on the foundation and start with
            simple. It also reminds us that exercise isn’t a chore. Ultimately,
            it’s about sustaining the highest qualify of life for as long as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSecondHero;
