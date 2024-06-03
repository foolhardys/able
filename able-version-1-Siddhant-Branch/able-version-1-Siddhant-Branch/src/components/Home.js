import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import acc from '../assets/acc.png'

import { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper/modules';
import '../styles/Card.css'
import arrow from '../assets/down-arrow.png'
import BasicModal from './Modal';
import arrow1 from '../assets/down-arrow1.png'


function Home() {
   

  return (
    <div className="font-[poppins] snap-start container md:pt-16 pt-12 md:mt-20 sm:h-[100vh] h-[70vh] sm:w-[88vw] w-[100vw] overflow-hidden relative ">
      
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
       
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow,Navigation,Pagination]}
        className="swiper_container"
      >

    

        <SwiperSlide>
        <div className='w-96 ' >
      

      <div className="sm:h-[70vh] w-[100vw] md:w-full flex flex-col justify-center items-center  bg-white border border-gray-200 rounded-3xl shadow-xl dark:bg-[#1E1E1E] dark:border-[#1E1E1E]">
          <a href="/">
              <img className="md:mt-10 md:mb-3 rounded-t-lg sm:w-28" src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-15 text-3xl font-bold tracking-tight text-black dark:text-white">Accenture</h5>
              </a><div className='pt-6'>
              <p className="mb-2 text-black font-normal dark:text-white dark:text-white"><span className='text- dark:text-whiteblack font-bold dark:text-white'>Stipend:</span>  ₹4000</p>
              <p className="mb-2 text-black font-normal dark:text-white dark:text-white"><span className='text- dark:text-whiteblack font-bold dark:text-white'> Experience:</span> Freshers</p>
              <p className="mb-2  text-black font-normal dark:text-white dark:text-white"><span className='text- dark:text-whiteblack font-bold dark:text-white'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <div className='mt-15 mb-6'>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white dark:text-black bg-black rounded-lg hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white  dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
              </div>
          </div>
      </div>
      
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='w-96 ' >
      

      <div className=" sm:h-[70vh] w-[100vw] md:w-full flex flex-col justify-center items-center w-84 bg-white border border-gray-200 rounded-3xl shadow-xl dark:bg-[#1E1E1E] dark:border-[#1E1E1E]">
          <a href="/">
              <img className="mt-10 mb-3 rounded-t-lg sm:w-28" src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-15 text-3xl font-bold tracking-tight text-black dark:text-white">Accenture</h5>
              </a><div className='pt-6'>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Stipend:</span>  ₹4000</p>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'> Experience:</span> Freshers</p>
              <p className="mb-2  text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <div className='mt-15 mb-6'>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black  dark:focus:ring-blue-800 " >
                  <BasicModal/>
                   
              </button>
              </div>
          </div>
      </div>
      
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-96 ' >
      

      <div className=" sm:h-[70vh] w-[100vw] md:w-full flex flex-col justify-center items-center w-84 bg-white border border-gray-200 rounded-3xl shadow-xl dark:bg-[#1E1E1E] dark:border-[#1E1E1E]">
          <a href="/">
              <img className="mt-10 mb-3 rounded-t-lg sm:w-28" src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-15 text-3xl font-bold tracking-tight text-black dark:text-white">Accenture</h5>
              </a><div className='pt-6'>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Stipend:</span>  ₹4000</p>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'> Experience:</span> Freshers</p>
              <p className="mb-2  text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <div className='mt-15 mb-6'>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black  dark:focus:ring-blue-800"  >
                  <BasicModal/>
                   
              </button>
              </div>
          </div>
      </div>
      
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-96 ' >
      

      <div className=" sm:h-[70vh] w-[100vw] md:w-full flex flex-col justify-center items-center w-84 bg-white border border-gray-200 rounded-3xl shadow-xl dark:bg-[#1E1E1E] dark:border-[#1E1E1E]">
          <a href="/">
              <img className="mt-10 mb-3 rounded-t-lg sm:w-28" src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-15 text-3xl font-bold tracking-tight text-black dark:text-white">Accenture</h5>
              </a><div className='pt-6'>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Stipend:</span>  ₹4000</p>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'> Experience:</span> Freshers</p>
              <p className="mb-2  text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <div className='mt-15 mb-6'>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black  dark:focus:ring-blue-800" >
                  <BasicModal/>
                   
              </button>
              </div>
          </div>
      </div>
      
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-96 ' >
      

      <div className=" sm:h-[70vh] w-[100vw] md:w-full flex flex-col justify-center items-center w-84 bg-white border border-gray-200 rounded-3xl shadow-xl dark:bg-[#1E1E1E] dark:border-[#1E1E1E]">
          <a href="/">
              <img className="mt-10 mb-3 rounded-t-lg sm:w-28" src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-15 text-3xl font-bold tracking-tight text-black dark:text-white">Accenture</h5>
              </a><div className='pt-6'>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Stipend:</span>  ₹4000</p>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'> Experience:</span> Freshers</p>
              <p className="mb-2  text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <div className='mt-15 mb-6'>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black  dark:focus:ring-blue-800" >
                  <BasicModal/>
                   
              </button>
              </div>
          </div>
      </div>
      
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='w-96 ' >
      

      <div className=" sm:h-[70vh] w-[100vw] md:w-full flex flex-col justify-center items-center w-84 bg-white border border-gray-200 rounded-3xl shadow-xl dark:bg-[#1E1E1E] dark:border-[#1E1E1E]">
          <a href="/">
              <img className="mt-10 mb-3 rounded-t-lg sm:w-28" src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-15 text-3xl font-bold tracking-tight text-black dark:text-white">Accenture</h5>
              </a><div className='pt-6'>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Stipend:</span>  ₹4000</p>
              <p className="mb-2 text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'> Experience:</span> Freshers</p>
              <p className="mb-2  text-black font-normal dark:text-white "><span className='text-black font-bold dark:text-white'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <div className='mt-15 mb-6'>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:-translate-y-1 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:text-black  dark:focus:ring-blue-800" >
                  <BasicModal/>
                   
              </button>
              </div>
          </div>
      </div>
      
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=''>
        <img src={arrow} alt="" className='absolute md:w-24 w-24 left-[50%] md:bottom-0 bottom-0 -translate-x-1/2 block dark:hidden'/>
        <img src={arrow1} alt="" className='absolute md:w-20 w-24 left-[50%] md:bottom-0 bottom-0 -translate-x-1/2 hidden dark:block'/>
      </div>
    </div>
  );
}

export default Home;