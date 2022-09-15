import React from 'react'
import Thumb1 from '../../images/thumbnail.png'
import Thumb2 from '../../images/thumbnail1.png'
import Thumb3 from '../../images/thumbnail2.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Thumbnail = () => {
  return (
    <>
      <div className='hidden md:grid lg:grid-cols-3 gap-1 grid-rows-2 place-content-center mt-2 px-1.5'>
          <img className='md:col-span-2 md:row-span-2' src={Thumb1} alt="thumbnail" />
          <img className='w-full md:col-span-1 md:row-span-1' src={Thumb2} alt="thumbnail" />
          <img className='w-full md:col-span-1 md:row-span-1' src={Thumb3} alt="thumbnail" />
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:hidden mt-2"
      >
        <SwiperSlide><img src={Thumb1} className='w-full' alt="gambar thumbnail" /></SwiperSlide>
        <SwiperSlide><img src={Thumb2} className='w-full' alt="gambar thumbnail" /></SwiperSlide>
        <SwiperSlide><img src={Thumb3} className='w-full' alt="gambar thumbnail" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Thumbnail