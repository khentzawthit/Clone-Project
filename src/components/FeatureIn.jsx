import React from "react";
import { FaChrome, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const FeatureIn = () => {
  return (
    <div className="bg-green-500 h-[150px]">
      <h2 className="flex items-center justify-center text-white p-6 text-xs">
        Features in
      </h2>
      <div className="flex text-white justify-center gap-10 p-3">
        <FaGoogle className="size-10 " />
        <FaYoutube className="size-10 " />
        <FaTwitter className="size-10 " />
        <FaChrome className="size-10 " />
      </div>
    </div>
  );
};

export default FeatureIn;
