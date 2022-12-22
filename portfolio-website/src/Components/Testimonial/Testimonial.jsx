import React from 'react';
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
const Testimonial = () => {
    const clients = [
        {
          img: profilePic1,
          review:
            "He is amazing",
        },
        {
          img: profilePic2,
          review:
            "Hard worker",
        },
        {
          img: profilePic3,
          review:
            "Dream to work with",
        },
        {
          img: profilePic4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];
    return ( 
        <div className="t-wrapper" id='testimonial'>
            <div className="t-heading">
                <span>Employers will get </span>
                <span>Exceptional work</span>
                <span> from me ....</span>
            </div>

            {/* Sliders */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}>
            {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
            })}
            </Swiper>
        </div>
     );
}
 
export default Testimonial;