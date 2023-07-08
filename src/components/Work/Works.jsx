import { useState } from "react";
import { projectsData } from "./Data.jsx";
import { projectsNav } from "./Data.jsx";
import WorkItems from "./WorkItems.jsx";
import { useEffect } from "react";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );

      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index)
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              key={index}
              className={`${active === index ? "active-work" : ""}  work__item`}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container">
        {projects.map((item) => (
          <WorkItems key={item.id} item={item}></WorkItems>
        ))}
      </div>
    </div>
  );
};

export default Works;
