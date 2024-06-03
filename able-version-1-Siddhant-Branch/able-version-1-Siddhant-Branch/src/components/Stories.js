import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";


import { Autoplay,FreeMode, Pagination } from "swiper/modules";


import { ServiceData } from "./constant";

const Stories = () => {
  return (
    <div className="font-[poppins] relative flex items-center justify-center flex-col h-[100vh]  ">
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
        modules={[Autoplay, FreeMode, Pagination]}
        className="max-w-[80%] md:h-[60%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>






<a href="/" class="h-96 text-black block max-w-sm  sm p-6 bg-white  shadow-xl rounded-2xl  dark:bg-[#242424]">
<p className="mt-1 text-xs sm:text-lg font-normal text-gray-500 dark:text-white">{item.content}</p>
<h5 className="mt-3 text-black text-lg sm:text-2xl font-semibold tracking-tight dark:text-white">{item.title}</h5>
<p className="font-normal text-xs sm:text-lg text-gray-700 dark:text-white">Founder</p>

</a>



            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;