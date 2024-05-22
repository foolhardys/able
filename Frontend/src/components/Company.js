import React from "react";
import Marquee from "react-fast-marquee";
import acc from "../assets/acc.png";
import amazon from "../assets/amazon1.png";
import fb from "../assets/fb.png";
import google from "../assets/google1.png";

const Company = () => {
  const customStyles = {
    borderRadius: "50% 50% 0% 0% / 20% 20% 0% 0%",
  };

  return (
    <div className="text-white bg-black" style={customStyles}>
      <h1 className="text-center text-3xl max-sm:text-3xl font-bold leading-tight pb-12 pt-36">
        COMPANIES WITH ABLE
      </h1>
      <div className="h-48 pb-24 my-20 flex justify-center bg-black">
        <div className="my-6 max-w-[70%] ">
          <Marquee className="">
            <div className="flex sm:gap-20 gap-16">
              <img src={acc} alt="acc" className="sm:w-24 w-16" />
              <img src={amazon} alt="" className="sm:w-24 w-16" />
              <img src={fb} alt="" className="sm:w-24 w-16" />
              <img src={google} alt="" className="sm:w-24 w-16" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Company;
