import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "./constant";

const ActiveSlider = () => {
  return (
    <div className="relative flex items-center justify-center flex-col h-[80vh] ">
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
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="max-w-[80%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <a
              href="/"
              class="text-black block max-w-sm  sm p-6 bg-white border border-gray-100 shadow-xl rounded-3xl hover:bg-gray-100 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="currentColor"
                class="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
              </svg>
              <p className="mt-1 text-xs sm:text-lg font-normal text-gray-500 ">
                {item.content}
              </p>
              <h5 className="mt-3 text-black text-lg sm:text-2xl font-semibold tracking-tight text-dark:text-white">
                {item.title}
              </h5>
              <p className="font-normal text-xs sm:text-lg text-gray-700 dark:text-gray-400">
                Founder
              </p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
