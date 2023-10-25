const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img className="work__img" src={item.image} alt="" />
      <h3 className="work__title">{item.title}</h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
