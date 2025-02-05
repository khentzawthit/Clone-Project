import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Journey = () => {
  return (
    <div className="container mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 mx-10 md:mx-0">
        <div className="col-span-1">
          <img
            src="https://static.igem.org/mediawiki/2019/7/7f/T--USP_SaoCarlos-Brazil--MagnetoFinanca.svg"
            alt=""
            className="w-[70%]"
          />
        </div>
        <div className="col-span-1">
          <h2 className="text-green-400 text-xs mb-5 mt-5 md:mt-0">| About the course</h2>
          <div className="md:text-2xl text-xl font-bold space-y-2 mb-2">
            <p>Journey into Marketing</p>
            <p>Mastery: Unveiling The</p>
            <p>Marketing Toolkit</p>
          </div>
          <p className="text-xs text-gray-400 mr-16 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quas ex deserunt sunt alias assumenda?
          </p>
          <button className="flex">
            <div className="flex items-center justify-start gap-1 text-sm bg-green-500 px-3 py-2 rounded-full text-white">
              <span>Enroll Now</span>
              <FaChevronRight />
            </div>
          </button>

          <div className="flex mt-5">
            <div className="text-xs space-y-4 ">
              <h2 className="text-sm font-semibold">Course Outline</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus ad autem sit.
              </p>
            </div>
            <div className="text-xs space-y-4 ">
              <h2 className="text-sm font-semibold">Course Outline</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus ad autem sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
