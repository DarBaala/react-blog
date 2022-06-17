import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";

const NotFound = () => {
  let location = useLocation();
  return (
    <>
      <Header />
      <div className="container">
        <div className="notfound">
          <h2>Неверная ссылка :(, страницы {location.pathname} нет на сайте</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
