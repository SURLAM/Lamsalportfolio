import React from "react";
import { MdOutlineStarRate } from "react-icons/md";


const Divide = () => {
  return (
    <div className="flex items-center my-7 mb-2">
      <div className="grow h-px bg-gray-800 shadow-[0_0_10px_rgba(99,102,241,0.4)]"></div>

      <div className="px-5 py-1 bg-gray-950 border border-indigo-700 rounded-full shadow-[0_0_15px_rgba(99,102,641,0.4)] flex ">
        <MdOutlineStarRate className="text-blue-200" size={16} />
        <MdOutlineStarRate className="text-blue-200" size={16} />
        <MdOutlineStarRate className="text-blue-200" size={16} />
        <MdOutlineStarRate className="text-blue-200" size={16} />
        <MdOutlineStarRate className="text-blue-200" size={16} />
      </div>

      <div className="grow h-px bg-gray-800 shadow-[0_0_10px_rgba(99,102,241,0.4)]"></div>
    </div>
  );
};

export default Divide;
