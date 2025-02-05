import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    // <div className="bg-green-900">
    //   <div className="flex justify-around ">
    //     <div>
    //       <p className="text-xs">
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
    //         deleniti modi quibusdam
    //       </p>
    //       <p>
    //         Follow us on :{" "}
    //         <span>
    //           <FaLinkedin />
    //         </span>
    //         <span>
    //           <FaInstagram />
    //         </span>
    //         <span>
    //           <FaYoutube />
    //         </span>
    //         <span>
    //           <FaFacebook />
    //         </span>
    //       </p>
    //     </div>
    //     <div>hello</div>
    //   </div>
    // </div>

    <footer className="bg-green-900 grid grid-cols-1 md:grid-cols-2 p-10 mt-auto  ">
      <div className="col-span-1 mr-16">
        <div>
          <p className="text-xs mb-10 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            deleniti modi quibusdam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Reiciendis, asperiores.
          </p>
          <div className="flex gap-4 text-white  mb-4 md:mb-0">
            <p className="text-xs text-nowrap">Follow us on :</p>

            <i>
              <FaLinkedin />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaYoutube />
            </i>
            <i>
              <FaFacebook />
            </i>
          </div>
        </div>
      </div>
      <div className="col-span-1  ">
        <div className="grid grid-cols-3 ">
          <div className="col-span-1 space-y-4 ">
            <p className="text-white text-xs">Home</p>
            <p className="text-white text-xs">Home</p>
            <p className="text-white text-xs">Home</p>
          </div>
          <div className="col-span-1 space-y-4">
            <p className="text-white text-xs">Home</p>
            <p className="text-white text-xs">Home</p>
            <p className="text-white text-xs">Home</p>
          </div>
          <div className="col-span-1 space-y-4">
            <p className="text-white text-xs">Home</p>
            <p className="text-white text-xs">Home</p>
            <p className="text-white text-xs">Home</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
