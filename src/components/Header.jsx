import React from "react";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <a href="#">
            <img src="/img/logo.svg" alt="Icon: logo" />
          </a>
        </div>
        <div className="header__menu">
          <a href="#" className="header__items">
            Главная
          </a>
          <a href="#" className="header__items">
            Блог
          </a>
          <a href="#" className="header__items">
            Контакты
          </a>
        </div>
        <div className="header__style"></div>
      </header>
    </div>
  );
};

export default Header;
