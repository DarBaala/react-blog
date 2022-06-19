import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

const Header = () => {
  const { isAuth } = useAuth();

  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="img/logo.svg" alt="Icon: logo" />
          </Link>
        </div>
        <div className="header__menu">
          <Link to="/">
            <span className="header__items">Главная</span>
          </Link>
          <Link to="/posting">
            <span className="header__items">Блог</span>
          </Link>
          <Link to="/contact">
            <span className="header__items">Контакты</span>
          </Link>
          <Link to="/login">
            <span className="header__items">Авторизация</span>
          </Link>
          {isAuth ? (
            <Link to="/admin">
              <span className="header__items">Админка</span>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="header__style"></div>
      </header>
    </div>
  );
};

export default Header;
