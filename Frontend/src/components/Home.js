import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import acc from "../assets/acc.png";
import amazon from "../assets/amazon.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../styles/Card.css";
import BasicModal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";

const baseUrl = process.env.REACT_APP_BASE_URL + "/internships";

function Home() {
  const [internships, setInternships] = useState([]);
  const tempuser = localStorage.getItem("user");
  const user = JSON.parse(tempuser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseUrl);
        const data = res?.data;
        setInternships(data);
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container sm:h-[100vh] h-[70vh] sm:w-[70vw] w-[70vw]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {internships?.map((internship) => (
          <SwiperSlide key={internship._id}>
            <div className="w-96">
              <div className="sm:h-[70vh] flex flex-col justify-center items-center w-84 bg-white border border-gray-200 rounded-3xl shadow-xl dark:bg-white dark:border-white">
                <a href={internship?.website}>
                  <img
                    className="mt-6 mb-3 rounded-t-lg sm:w-28"
                    src={internship?.logo}
                    alt={internship?.companyName}
                  />
                </a>
                <div className="flex flex-col items-center justify-center p-5">
                  <a href={internship?.website}>
                    <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">
                      {internship?.companyName}
                    </h5>
                  </a>
                  <div className="pt-6">
                    <p className="mb-4 text-black font-normal ">
                      <span className="text-black font-bold">Stipend:</span> ₹{" "}
                      {internship?.minStipend} - {internship?.maxStipend}
                    </p>
                    <p className="mb-4 text-black font-normal ">
                      <span className="text-black font-bold"> Role :</span>{" "}
                      {internship?.role}
                    </p>
                    <p className="mb-4  text-black font-normal ">
                      <span className="text-black font-bold">Location:</span>{" "}
                      {internship?.location} ({internship?.mode})
                    </p>
                  </div>
                  <div className="mt-12">
                    <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <BasicModal internship={internship} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Home;
