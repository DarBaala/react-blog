import React from "react";
import { Parallax } from "react-parallax";

const Banner = () => {
  return (
    <div className="banner">
      <Parallax
        bgImage={require("../assets/backround-banner.webp")}
        bgImageAlt="Banner"
        strength={300}
      >
        <div className="banner__wrapper">
          <div className="banner__title">
            <h1>
              Привет.
              <br />Я Адлан.
            </h1>
          </div>
          <div className="banner__block">
            <div className="banner__text">
              <div className="banner__text-up">Frontend</div>
              <div className="banner__text-down">разработчик</div>
            </div>
            <div className="banner__discription">а еще немного дизайнер ;)</div>
          </div>
        </div>
        <div style={{ height: "100vh" }} />
      </Parallax>
    </div>
  );
};
export default Banner;
