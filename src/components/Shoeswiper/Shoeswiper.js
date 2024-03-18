"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

export default function Showswiper({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerColumn={2}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" w-[100%] h-[400px] m-[20px]"
      >
        {products?.map((slide, i) => (
          <SwiperSlide
            key={i}
            className=" text-center text-lg flex justify-center items-center relative"
          >
            <div className=" w-[450px] h-[400px]">
              <img
                className="block w-[100%] h-[80%] object-cover"
                src={slide?.images[0]}
                alt=""
              />
              <div className="bg-blue-200 flex flex-col items-start h-[200px]">
                <p
                  style={{
                    whiteSpace: "pre",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="text-lg font-bold"
                >
                  {slide.name}
                </p>
                <span className="text-sm">
                  Cloud White / Chalk White / Zero Metalic
                </span>
                <div className="flex justify-center">

                  <span className="text-sm text-green-700 grow">
                    {slide.discountedPrice}$
                  </span>
                
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
