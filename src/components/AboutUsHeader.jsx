import React from "react";
import AboutHero from "./AboutHero";
import AboutSecondHero from "./AboutSecondHero";
import AboutOurPeople from "./AboutOurPeople";

const AboutUsHeader = () => {
  return (
    <section className="container  ">
      <div className="flex flex-col items-center gap-4 mt-10 h-40 sm:h-50 ">
        <h1 className="text-3xl font-bold">About Us</h1>
        <div className="text-xs sm:text-xl text-nowrap">
          <p>We help folks love, heal, understand, and move their</p>
          <p>bodies—so they can be happier, healthier humans.</p>
        </div>
      </div>
      <AboutHero />
      <AboutSecondHero/>
      <AboutOurPeople/>
    </section>
  );
};

export default AboutUsHeader;
