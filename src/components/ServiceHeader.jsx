import React from "react";
import ServiceSection from "./ServiceSection";

const ServiceHeader = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          aspernatur ipsa eum!
        </p>
        <button className="px-4 py-2 bg-green-500 text-white">
          Contact us
        </button>
        <ServiceSection/>
      </div>
    </section>
  );
};

export default ServiceHeader;
