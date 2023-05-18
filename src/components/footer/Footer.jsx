import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import picture from "../../assets/profileImage.jpeg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__title">
            <img src={picture} alt="Fachrur Rizhky" />
            <h1>Let's work together!</h1>
          </div>
          <div className="footer__button">
            <Link to="/me">Get in touch</Link>
          </div>
          <div className="footer__contact">
            <a href="mailto:hikmalalfatih05@gmail.com">
              hikmalalfatih05@gmail.com
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6281903031378/?text=Hello%20Hikmal"
            >
              +62 819 0303 1378
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/hikmalalfatih05"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://youtube.com/@hikmalalfatih9279"
            >
              YouTube
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/hikmalalfatih"
            >
              GitHub
            </a>
          </div>
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/fahruul-c"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@hikmal-alfatih-ba264a148"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
