import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import google from "../assets/google.png";

const Feedback = () => {
  return (
    <>
      <div class="bg-white  text-[#333] flex max-lg:flex-col px-3 my-8 gap-8 mb-20">
        <div class=" text-center md:text-left lg:max-w-md mx-auto">
          <h2 class="md:text-6xl text-4xl font-bold mb-4">
            What Companies think of Able?
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          speed={1200}
          spaceBetween={30}
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper  h-[40vh]"
        >
          <SwiperSlide className="h-96">
            <div className=" p-4 flex bg-[#ECECEC] rounded ">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="p-4 flex bg-[#ECECEC] rounded">
              <img src={google} alt="" className="w-8 h-8 mr-4" />
              <div>
                <h3 class="text-xl font-semibold mb-2">Adish Jain, CEO</h3>
                <p class="text-gray-500 text-sm">"Such an Amazing Platform"</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Feedback;
