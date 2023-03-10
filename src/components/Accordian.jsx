import React, { useState } from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div onClick={toggleExpanded}>
      <div className=" cursor-pointer text-left select-none justify-between flex-row text-black bg-orange-600 my-3 py-5 px-6 uppercase font-semibold text-lg rounded-2xl flex items-center">
        <div className="flex items-center space-x-3">
          <MdOutlineQuestionAnswer className="text-3xl text-orange-300" />
          <p className="flex-1">{title}</p>
        </div>
        <div className="flex-none pl-2">
          {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-300 cubic-bezier(.15,.7,.87,.6)-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-left text-gray-300 text-md py-4">{content}</p>
      </div>
    </div>
  );
}
