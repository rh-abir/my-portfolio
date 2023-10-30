import { useState } from "react";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  console.log(item);

  return (
    <>
      <div className="work__card" onClick={() => toggleTab(1)}>
        <img className="work__img" src={item.image} alt="" />
        <h3 className="work__title">{item.title}</h3>
        <span className="services__button" onClick={() => toggleTab(1)}>
          View More
          <i className="uil uil-arrow-right services__button-icon"></i>
        </span>
      </div>

      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>

          <h3 className="services__modal-title">{item.text}</h3>
          <p className="services__modal-description">
            Service with more than 3 years of experience. Providing quality work
            to clients and companies.
          </p>

          <div className="project-link">
            <button className="">Live line</button>
            <button className="">github Client</button>
            <button className="">github server</button>
          </div>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I develop the user interface.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Web page development.</p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I create ux element interactions.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I position your company brand.
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Design and mockups of products for companies.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkItems;
