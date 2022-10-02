import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Shah-Portfolio</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              about
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              testimonials
            </a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="facebook" className="footer__social-icon" target="_blank">
            <i class="bx bxl-facebook-circle"></i>
          </a>
          <a href="instagram" className="footer__social-icon" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="whatsapp" className="footer__social-icon" target="_blank">
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a href="github" className="footer__social-icon" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; ShahCoding. All right reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
