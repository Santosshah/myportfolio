import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  // Change background-header

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  // Toogle menu
  const [Toggle, showMenu] = useState(false);

  const [activeNav, SetactiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {/* Shah<span className="Clogo">©</span>Group */}
          Shah
        </a>

        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => SetactiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => SetactiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => SetactiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => SetactiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file nav__icon"></i>education
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#project"
                onClick={() => SetactiveNav("#project")}
                className={
                  activeNav === "#project"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#testimonials"
                onClick={() => SetactiveNav("#testimonials")}
                className={
                  activeNav === "#testimonials"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Testimonials
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => SetactiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle">
          <i class="uil uil-apps" onClick={() => showMenu(!Toggle)}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
