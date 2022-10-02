import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section " id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">my education journey</span>

      <div className="qualification__container container">
        <div className="qualification__tab">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__section">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Higher Secondary School (+2)
                </h3>
                <span className="qualification__subtitle">
                  Chanakya National Law University Campus <br />
                  <b> Patna, Bihar (India)</b>
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2022-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Diploma in Computer application (JCT)
                </h3>
                <span className="qualification__subtitle">
                  lord budda skills and Training center Pvt.Ltd <br />
                  <b>Lalbandi,Sarlahi (Nepal)</b>
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2021-2022
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">CCNA (200-301)</h3>
                <span className="qualification__subtitle">
                  Simplilearn <br />
                  <b>Online (Bootcamp)</b>
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2020-2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">full stack developer</h3>
                <span className="qualification__subtitle">
                  <span className="learn">Simplilearn</span>
                  <span className="learn">Coursera</span>
                  <span className="learn">OpenClassRoom</span>
                  <b>Online (Bootcamp)</b>
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2018-2020
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">freelancer</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">IT solutions</h3>
                <span className="qualification__subtitle">freelancer</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Jabil Inc.</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2019-2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">IT Support</h3>
                <span className="qualification__subtitle">Jabil Inc.</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2018-2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
