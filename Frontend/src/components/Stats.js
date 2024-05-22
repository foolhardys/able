import React from "react";
const Stats = () => {
  return (
    <div className="bg-black px-4 font-[sans-serif] text-[#333] pt-12 pb-4 snap-start">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-40 max-md:text-center rounded overflow-hidden max-md:max-w-md mx-auto">
          <div className="bg-black text-white sm:px-6 sm:pt-60 sm:pb-30">
            <h3 className="text-5xl font-extrabold">50+</h3>
            <div>
              <p className="text-4xl font-bold mt-5">Internships</p>
              <p className="text-sm mt-2">provided by Able</p>
            </div>
          </div>
          <div className="bg-black text-white sm:px-6 sm:pt-60 sm:pb-30">
            <h3 className="text-5xl font-extrabold">1000+</h3>
            <div>
              <p className="text-4xl font-bold mt-5">Community</p>
              <p className="text-sm mt-2">members along with Able</p>
            </div>
          </div>
          <div className="bg-black text-white sm:px-6 sm:pt-60 sm:pb-32">
            <h3 className="text-5xl font-extrabold">20+</h3>
            <div>
              <p className="text-4xl font-bold mt-5">Companies</p>
              <p className="text-sm mt-2">partnered with Able</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
