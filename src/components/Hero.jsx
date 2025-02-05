import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1  md:grid-cols-2 min-h-[80vh] ">
          <div className="col-span-1 flex flex-col justify-center gap-6 ms-3 mb-6 md:mb-0 ">
            <h1 className="text-xs lg:text-sm">THE MARKETING TOOLKIT</h1>

            <div>
              <p className="text-3xl lg:text-4xl font-bold">Mastering Proven</p>
              <p className="text-3xl lg:text-4xl font-bold">
                Strategies That Drive
              </p>
              <p className="text-3xl md:text-4xl font-bold">Real Results</p>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur error voluptate commodi ad modi reiciendis suscipit
                sunt aperiam saepe delectus. Nisi, quia dolorum. Nisi
                accusantium itaque est commodi mollitia fuga?
              </p>
            </div>

            <button className="flex">
              <div className="flex items-center justify-start gap-1 text-sm bg-green-500 px-3 py-2 rounded-full text-white">
                <span>Enroll Now</span>
                <FaChevronRight />
              </div>
            </button>

            <div className="ms-1 flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs">
                <CiCircleCheck className="text-green-500" />
                <p>Money Back Guarantee</p>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <CiCircleCheck className="text-green-500" />
                <p>Money Back Guarantee</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs ms-1">
              <CiCircleCheck className="text-green-500" />
              <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
            <img
              className=" "
              src="https://outgrid.uicore.co/internet-marketing/wp-content/uploads/sites/43/2023/12/Internet-Marketing-Hero-Image.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
