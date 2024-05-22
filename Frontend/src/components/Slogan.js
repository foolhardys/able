import React from "react";
import slogan from "../assets/slogan.png";
import clone from "../assets/c.png";
import "../styles/Slogan.css";

const Slogan = () => {
  const customStyles = {
    borderRadius: "50% 50% 0% 0% / 0% 0% 30% 30%",
  };
  return (
    <div className="flex flex-col items-center sm:h-[60vh] mt-20 pb-40 ">
      <h1 className="text-center text-3xl max-sm:text-3xl font-bold leading-tight">
        #InternshipZaruriHai
      </h1>
      <div className="relative w-[60vw]" style={customStyles}>
        <img
          src={slogan}
          alt=""
          className="absolute hover:opacity-1 w-full top-0"
        />
        <img
          src={clone}
          alt=""
          className="absolute hover:opacity-0 transition-all duration-400 ease-in transform w-full top-0"
        />
      </div>
    </div>
  );
};

export default Slogan;
