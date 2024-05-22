import React from "react";
import intern from "../assets/d.png";

const Community = () => {
  return (
    <div className="mt-20 mb-20 sm:flex sm:flex-row sm:justify-center  gap-24 flex flex-col items-center ">
      <div className="card w-84 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-2xl font-semibold">
            Our Intern <br /> Community
          </h2>

          <figure>
            <img src={intern} alt="Shoes" className="w-96" />
          </figure>
          <div className="flex">
            <img
              src="https://cdn.icon-icons.com/icons2/843/PNG/512/Whatsapp_icon-icons.com_67044.png"
              alt=""
              className="w-8 "
            />
            <p className="px-2 py-1">
              <button>Whatsapp Community</button>
            </p>
          </div>
          <div className="flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KHspeICALJLtrG719HTrRoP9oaGUbreuXFKkLQiAng&s"
              alt=""
              className="w-8 "
            />
            <p className="px-2 py-1">
              <button>Telegram Community</button>
            </p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-4">
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-84 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className=" text-2xl font-semibold">
            Able <br /> Internship Cell
          </h2>

          <figure>
            <img src={intern} alt="Shoes" className="w-96" />
          </figure>

          <div className="card-actions justify-center">
            <button className="mx-1 btn bg-black text-white">Apply Now</button>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-4">
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
