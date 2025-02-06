import React from "react";
import {
  FaAssistiveListeningSystems,
  FaPhoenixFramework,
  FaPhone,
} from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5 ">
      <div className="col-span-1">
        <div className="border flex flex-col items-center gap-4 p-8">
          <i>
            <FaAssistiveListeningSystems className="size-10 " />
          </i>
          <p className="uppercase font-semibold  ">consultation</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.
          </p>
        </div>
      </div>

      <div className="col-span-1">
        <div className="border flex flex-col items-center gap-4 p-8">
          <i>
            <FaAssistiveListeningSystems className="size-10 " />
          </i>
          <p className="uppercase font-semibold  ">consultation</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.
          </p>
        </div>
      </div>

      <div className="col-span-1">
        <div className="border flex flex-col items-center gap-4 p-8">
          <i>
            <FaAssistiveListeningSystems className="size-10 " />
          </i>
          <p className="uppercase font-semibold  ">consultation</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
            justo sagittis suscipit ultrices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
