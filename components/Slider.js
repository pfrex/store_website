import "../styles/slider.css";

const Slider = props => {
  let content = (
    <div className="carousel-contain">
      <img
        className="slider-img"
        src={props.image}
        alt="Featured food item."
      ></img>
      <h1>{props.cont}</h1>
    </div>
  );

  return content;
};

export default Slider;
