import React from "react";

import { Link } from "react-router-dom";

import { Zoom, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/zoom";

const slideObj = [
  {
    imageUrl: require("../assets/img/slide-1.webp"),
    discription: "От фотографа до Frontend разработчика",
  },
  {
    imageUrl: require("../assets/img/slide-2.webp"),
    discription: "А что было в начале: логика или...?",
  },
  {
    imageUrl: require("../assets/img/slide-3.webp"),
    discription: "От фотографа до Frontend разработчика",
  },
  {
    imageUrl: require("../assets/img/slide-4.webp"),
    discription: "А что было в начале: логика или...?",
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
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            zoom={true}
            modules={[Zoom, Navigation, Autoplay]}
            slidesPerView={2}
            spaceBetween={40}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation
          >
            {slideObj.map((obj) => (
              <SwiperSlide key={obj.imageUrl}>
                <div className="swiper-zoom-container">
                  <img className="blog__image" src={obj.imageUrl} alt="Blog" />
                </div>
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
