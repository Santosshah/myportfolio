import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 years working</span>
      </div>
      <div className="about__box">
        <i class="uil uil-bag-alt about__icon"></i>
        <h3 className="about__title">completed</h3>
        <span className="about__subtitle">20 + projects</span>
      </div>
      <div className="about__box">
        <i class="uil uil-file-question-alt about__icon"></i>
        <h3 className="about__title">support</h3>
        <span className="about__subtitle">online 24/7</span>
      </div>
    </div>
  );
}

export default Info
