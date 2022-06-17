import React from "react";

import { Link } from "react-router-dom";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/zoom";

const slideObj = [
  {
    imageUrl: require("../assets/img/slide-1.webp"),
    discription: " От фотографа до Frontend разработчика",
  },
  {
    imageUrl: require("../assets/img/slide-2.webp"),
    discription: " От фотографа до Frontend разработчика",
  },
  {
    imageUrl: require("../assets/img/slide-3.webp"),
    discription: " От фотографа до Frontend разработчика",
  },
  {
    imageUrl: require("../assets/img/slide-4.webp"),
    discription: " От фотографа до Frontend разработчика",
  },
];

const Blog = () => {
  return (
    <div className="container">
      <div className="blog">
        <Link to={"/posting"}>
          <h3 className="blog__title">Blog</h3>
        </Link>
        <div className="blog__slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={40}
            navigation
          >
            {slideObj.map((obj) => (
              <SwiperSlide key={obj.imageUrl}>
                <img className="blog__image" src={obj.imageUrl} alt="Blog" />
                <div className="blog__text">{obj.discription}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
