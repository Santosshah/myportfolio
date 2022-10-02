import React from "react";
import "./Testimonials.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">My client say!</h2>
      <span className="section__subtitle">testmonials</span>

      <Swiper
        className="testimonials__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          570: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, img, title, desc }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img
                src={img}
                alt="testimonialImg"
                className="testimonial__img"
              />

              <h3 className="testimonial__name">{title}</h3>

              <p className="testimonial__desc">{desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
