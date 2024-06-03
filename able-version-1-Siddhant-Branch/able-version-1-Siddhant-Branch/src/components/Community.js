import React from "react";
import intern from '../assets/d.png'
import cell1 from '../assets/cell1.png'

const Community = () => {
  return (
    <div className="snap-start md:h-[100vh] sm:flex sm:flex-row sm:justify-center gap-24 flex flex-col items-center font-[poppins] px-3 ">
      <div className=" card  bg-base-100 shadow-xl border-4xl">
        <div className="card-body">
          <h2 className=" text-4xl font-semibold">
            Our Intern <br /> Community
          </h2>
          
          <figure>
            <img
              src={intern}
              alt="community"
              className="w-96 py-12"
            />
          </figure>
          <div className="flex">
          <img src="https://cdn.icon-icons.com/icons2/843/PNG/512/Whatsapp_icon-icons.com_67044.png" alt=""className="w-10 "/>
          <p className="px-2 py-1"><a href="https://whatsapp.com/channel/0029VaZj2IEAzNbnfAp4hc2x"><button>Whatsapp Community</button></a></p>
          </div>
          <div className="flex">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KHspeICALJLtrG719HTrRoP9oaGUbreuXFKkLQiAng&s" alt="" className="w-8 "/>
          <p className="px-2 py-1"><a href="https://t.me/ableinternship"><button>Telegram Community</button></a></p>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-4"><button>Know More</button></div>
          </div>
        </div>
      </div>

<div className=" card  bg-base-100 shadow-xl border-4xl">
        <div className="card-body">
        <h2 className=" text-4xl font-semibold">
            Able <br /> Internship Cell
          </h2>

          <figure>
          <img
              src={cell1}
              alt="community"
              className="w-96 py-12"
            />
          </figure>
        
          
          <div className="card-actions justify-center mt-6">
            <button className="mx-1 btn bg-black  text-white">Apply Now</button>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-4"><button>Know More</button></div>
          </div>
        </div>
      </div>

      

      


    </div>
  );
};

export default Community;
