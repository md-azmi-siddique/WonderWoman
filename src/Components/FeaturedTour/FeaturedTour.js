import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../Assets/FeaturedTour/img1.jpg'
import img2 from '../../Assets/FeaturedTour/img2.jpg'
import img3 from '../../Assets/FeaturedTour/img3.jpg'
import img4 from '../../Assets/FeaturedTour/img4.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./FeaturedTour.css";

// import required modules
import { Pagination } from "swiper/modules";

const FeaturedTour = () => {
  return (
    <div className="py-10 px-16 bg-slate-600">
      
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>

        </Swiper>
      </div>
    
  );
};

export default FeaturedTour;
