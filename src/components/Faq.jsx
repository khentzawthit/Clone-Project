import React, { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const Faq = ({ faq: { question, answer, id } }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    // console.log("uclicked");
    setOpen(!open);
  };

  return (
    <div className="container">
      <div>
        <div
          onClick={handleToggle}
          className="active:scale-95 duration-300 transition-all flex items-center select-none cursor-pointer justify-between border p-3"
        >
          <h2>{question}</h2>
          {open ? <BiDownArrow /> : <BiUpArrow />}
        </div>
        <p className={`bg-gray-200 p-3 ${open === false ? "hidden" : ""}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faq;
