import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./HeroSection.css";
import slider1 from '../../image/1.jpg'
import slider2 from '../../image/2.jpg'
import slider3 from '../../image/3.jpg'
import slider4 from '../../image/4.jpg'
import slider5 from '../../image/5.jpg'
import slider6 from '../../image/6.jpg'
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);

const HeroSection = () => {
    return (
    <div className="container py-4">
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper">
            <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slider6} alt="" /></SwiperSlide>
        </Swiper>
    </div>
    );
};

export default HeroSection;