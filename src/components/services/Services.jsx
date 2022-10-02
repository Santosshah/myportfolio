import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="services section" id="services">
      <h3 className="section__title">Services</h3>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="service__content">
          <div>
            <i className="uil uil-web-grid service__icon"></i>
            <h3 className="services__title">
              Web <br /> development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">web development</h3>
              <p className="services__modal-description">
                services with more than 3 years experience. providing quality
                work to client and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Website and software application designing, building, or
                    maintaining,Directing or performing Website updates.
                  </p>
                </li>
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Using scripting or authoring languages, management tools,
                    content creation tools, applications, and digital media
                  </p>
                </li>
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing or validating test routines and schedules to
                    ensure that test cases mimic external interfaces and address
                    all browser and device types.
                  </p>
                </li>
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Editing, writing, or designing Website content, and
                    directing team members who produce content.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service__content">
          <div>
            <i className="uil uil-arrow service__icon"></i>
            <h3 className="services__title">
              ui/ux <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            view more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">ui/ux designer</h3>
              <p className="services__modal-description">
                services with more than 3 years experience. providing quality
                work to client and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i develop the user interface
                  </p>
                </li>
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    web page designing / development{" "}
                  </p>
                </li>
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Mobile web app / mobile app deveplop{" "}
                  </p>
                </li>
                <li className="services__modal__services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i develop the user interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
