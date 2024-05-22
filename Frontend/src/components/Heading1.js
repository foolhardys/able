import React from "react";
import dash from "../assets/dash.png";

const Heading1 = () => {
  return (
    <div>
      <h1 className="mt-12 font-semibold text-black text-4xl text-center">
        ABLING YOU TO <span className="">ENDLESS</span> POSSIBILITIES
      </h1>
      <div className="ml-[680px] justify-center">
        <img src={dash} alt="" className="w-48 " />
      </div>
    </div>
  );
};

export default Heading1;
