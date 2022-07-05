import React from "react";

import { Link } from "react-router-dom";

import { Zoom, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/zoom";

import { useSelector } from "react-redux/es/hooks/useSelector";

const Blog = () => {
  const slides = useSelector((state) => state.blog.news);

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
            {slides.map((obj) => (
              <SwiperSlide key={obj.imageUrl}>
                <div className="swiper-zoom-container">
                  <img className="blog__image" src={obj.imageUrl} alt="Blog" />
                </div>
                <Link to={`/news/${obj.id}`}>
                  <div className="blog__text">{obj.discription}</div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
