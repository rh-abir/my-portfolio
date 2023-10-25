import Works from "./Works";

import "./Work.css";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="secton__title">My Works</h2>
      <span className="section__subtitle">Most recent works</span>

      <Works></Works>
    </section>
  );
};

export default Work;
