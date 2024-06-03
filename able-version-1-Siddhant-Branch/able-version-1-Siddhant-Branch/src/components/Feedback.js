import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Mousewheel, Scrollbar } from 'swiper/modules';

const Feedback = () => {
  return (
    <div className='snap-start font-[poppins] '>
      <div class="h-[100vh] p-5  grid md:grid-cols-2  md:gap-8 gap-6 font-[sans-serif] text-[#333] max-w-6xl max-md:max-w-md mx-auto ">
      <div class="flex items-center order-first max-md:text-center">
        <h2 class="md:text-7xl text-2xl  font-bold text-[#000] tracking-wide mb-4 dark:text-white">What Companies think of Able?</h2>
      </div>



      <div class="md:h-[450px] md:pt-20">
      <Swiper
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={30}
        mousewheel={true}
        scrollbar= {{
          hide: true,
        }}
        speed={500}
        modules={[Mousewheel, Scrollbar]}
        className="mySwiper h-[60vh] md:h-[80vh]"
      >
        <SwiperSlide className='h-96'><div class="p-4 md:h-[20vh] md:w-[35vw] flex bg-[#ECECEC] rounded-2xl shadow-md dark:bg-[#242424]">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" className='w-12 h-12 mr-6 bg-gray-100 p-3 rounded-2xl shrink-0'/>
            <div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Adish Jain, CEO</h3>
              <p class="text-gray-500 text-sm dark:text-white">"Such an amazing platform"</p>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className='h-96'><div class="md:h-[20vh] md:w-[35vw] p-4 flex bg-[#ECECEC] rounded-2xl shadow-md dark:bg-[#242424]">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" className='w-12 h-12 mr-6 bg-gray-100 p-3 rounded-2xl shrink-0'/>
            <div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Adish Jain, CEO</h3>
              <p class="text-gray-500 text-sm dark:text-white">"Such an amazing platform"</p>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className='h-96'><div class="p-4 md:h-[20vh] md:w-[35vw] flex bg-[#ECECEC] rounded-2xl shadow-md dark:bg-[#242424]">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" className='w-12 h-12 mr-6 bg-gray-100 p-3 rounded-2xl shrink-0'/>
            <div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Adish Jain, CEO</h3>
              <p class="text-gray-500 text-sm dark:text-white">"Such an amazing platform"</p>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className='h-96'><div class="p-4 md:h-[20vh] md:w-[35vw] flex bg-[#ECECEC] rounded-2xl shadow-md dark:bg-[#242424]">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" className='w-12 h-12 mr-6 bg-gray-100 p-3 rounded-2xl shrink-0'/>
            <div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Adish Jain, CEO</h3>
              <p class="text-gray-500 text-sm dark:text-white">"Such an amazing platform"</p>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className='h-96'><div class="p-4 md:h-[20vh] md:w-[35vw] flex bg-[#ECECEC] rounded-2xl shadow-md dark:bg-[#242424]">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" className='w-12 h-12 mr-6 bg-gray-100 p-3 rounded-2xl shrink-0'/>
            <div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Adish Jain, CEO</h3>
              <p class="text-gray-500 text-sm dark:text-white">"Such an amazing platform"</p>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className='h-96'><div class="p-4 md:h-[20vh] md:w-[35vw] flex bg-[#ECECEC] rounded-2xl shadow-md dark:bg-[#242424]">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" className='w-12 h-12 mr-6 bg-gray-100 p-3 rounded-2xl shrink-0'/>
            <div>
              <h3 class="text-xl font-semibold mb-2 dark:text-white">Adish Jain, CEO</h3>
              <p class="text-gray-500 text-sm dark:text-white">"Such an amazing platform"</p>
            </div>
          </div></SwiperSlide>
        
      </Swiper>
      </div>
    </div>
    </div>
  )
}

export default Feedback