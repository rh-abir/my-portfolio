const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about-icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1+ Years working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about-icon"></i>

        <h3 className="about__title">Conpleted</h3>
        <span className="about__subtitle">13 + Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about-icon"></i>

        <h3 className="about__title">Contact</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
