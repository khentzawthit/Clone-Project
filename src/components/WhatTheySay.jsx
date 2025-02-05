import React from "react";

const WhatTheySay = () => {
  return (
    <div className="container mb-10">
      <h2 className="text-xs lg:text-sm font-semibold mt-5 mb-4">
        What they say about us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 text-[9px]  font-sans gap-3 ">
        <div className="col-span-1 bg-gray-200 p-3 rounded-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            impedit cupiditate maiores saepe laboriosam cum eligendi eaque quam
            laudantium
          </p>
          <p className="mt-3">John Anthony</p>
        </div>

        <div className="col-span-1 bg-gray-200 p-3 rounded-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            impedit cupiditate maiores saepe laboriosam cum eligendi eaque quam
            laudantium
          </p>
          <p className="mt-3">John Anthony</p>
        </div>
        <div className="col-span-1 bg-gray-200 p-3 rounded-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            impedit cupiditate maiores saepe laboriosam cum eligendi eaque quam
            laudantium
          </p>
          <p className="mt-3">John Anthony</p>
        </div>
      </div>
    </div>
  );
};

export default WhatTheySay;
