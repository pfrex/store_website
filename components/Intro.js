import { Carousel } from "react-bootstrap";
import Slider from "./Slider.js";
import "../styles/intro.css";

const Intro = props => {
  let content = (
    <Carousel className="full-car">
      <Carousel.Item>
        <Slider image={"/images/pic1.png"} cont="Great deals!"></Slider>
      </Carousel.Item>
      <Carousel.Item>
        <Slider image={"/images/pic2.png"} cont="This is even better!"></Slider>
      </Carousel.Item>
      <Carousel.Item>
        <Slider image={"/images/pic3.png"} cont="Buy this now!"></Slider>
      </Carousel.Item>
    </Carousel>
  );

  return content;
};

export default Intro;
