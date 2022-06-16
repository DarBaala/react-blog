import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__contacts">
            <a href="https://github.com/DarBaala">Github</a>
            <a href="http://t.me/nmteg">Telegram</a>
          </div>
          <div className="footer__socity">
            <a href="https://facebook.com/trebianeronia">Facebook</a>
            <a href="https://instagram.com/nmteg">Instagram</a>
            <a href="https://twitter.com/nmteg">Twitter</a>
          </div>
          <div className="footer__email">
            <form className="footer__form" name="email">
              <input
                className="footer__input"
                type="email"
                placeholder="Email"
              />
              <button className="footer__button">Напиши мне</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
