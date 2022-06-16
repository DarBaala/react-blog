import React from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

const Blog = () => {
  return (
    <div className="container">
      <div className="blog">
        <h3 className="blog__title">Blog</h3>
        <div className="blog__slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={40}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img
                width={550}
                height={350}
                className="blog__img"
                src={require("../assets/img/slide-1.webp")}
                alt="Photo"
              />
              <div className="blog__text">
                От фотографа до Frontend разработчика
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                width={550}
                height={350}
                className="blog__img"
                src={require("../assets/img/slide-2.webp")}
                alt="Photo"
              />
              <div className="blog__text">Гуманитарий и JavaScript</div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                width={550}
                height={350}
                className="blog__img"
                src={require("../assets/img/slide-3.webp")}
                alt="Photo"
              />
              <div className="blog__text">Гуманитарий и JavaScript</div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                width={550}
                height={350}
                className="blog__img"
                src={require("../assets/img/slide-4.webp")}
                alt="Photo"
              />
              <div className="blog__text">Гуманитарий и JavaScript</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
