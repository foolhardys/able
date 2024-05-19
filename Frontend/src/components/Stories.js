import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";


import { Autoplay,FreeMode, Pagination } from "swiper/modules";


import { ServiceData } from "./constant";

const Stories = () => {
  return (
    <div className="relative flex items-center justify-center flex-col h-[60vh] bg-white ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        loop={true}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        speed={2000}
        autoplay={{
            delay:1000,
            disableOnInteraction:false

        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="max-w-[80%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>






<a href="/" class="h-64 text-black block max-w-sm  sm p-6 bg-white border border-gray-100 shadow-xl rounded-lg hover:bg-gray-100 ">
<p className="mt-1 text-xs sm:text-lg font-normal text-gray-500 ">{item.content}</p>
<h5 className="mt-3 text-black text-lg sm:text-2xl font-semibold tracking-tight text-dark:text-white">{item.title}</h5>
<p className="font-normal text-xs sm:text-lg text-gray-700 dark:text-gray-400">Founder</p>

</a>



            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;