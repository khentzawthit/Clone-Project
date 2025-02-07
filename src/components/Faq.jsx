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
          className="active:translate-y-1 duration-300 transition-all flex items-center select-none cursor-pointer justify-between border p-3"
        >
          <h2 className={`${open ? "font-semibold" : ""}`}>{question}</h2>
          {open ? <BiDownArrow /> : <BiUpArrow />}
        </div>
        <p className={`bg-gray-200 p-3 ${open === false ? "hidden mb-1" : ""}`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faq;
