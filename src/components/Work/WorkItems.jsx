import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgLink } from "react-icons/cg";

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

          <h3 className="services__modal-title">{item?.projectTitle}</h3>
          <p className="services__modal-description">{item?.dsc}</p>

          <div className="project-link">
            {item?.liveLink && (
              <a
                href={`${item?.liveLink}`}
                target="_blank"
                className="link-button"
                rel="noreferrer"
              >
                <CgLink />
                Live
              </a>
            )}

            {item.gitClient && (
              <a
                href={`${item?.gitClient}`}
                target="_blank"
                className="link-button"
                rel="noreferrer"
              >
                <BsGithub />
                Client
              </a>
            )}

            {item.gitServer && (
              <a
                href={`${item?.gitServer}`}
                target="_blank"
                className="link-button"
                rel="noreferrer"
              >
                <BsGithub />
                Server
              </a>
            )}
          </div>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">{item?.point1}</p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">{item?.point2}</p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">{item?.point3}</p>
            </li>

            {item?.point4 && (
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  {item?.point4 && item?.point4}
                </p>
              </li>
            )}

            {item?.point5 && (
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{item?.point5}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkItems;
