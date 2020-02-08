import { Carousel } from "react-bootstrap";
import Slider from "./Slider.js";
import "../styles/intro.css";

const Intro = props => {
  let content = (
    <Carousel className="full-car">
      <Carousel.Item>
        <Slider
          image={"/images/pic1.png"}
          cont="This is a good deal on food!"
        ></Slider>
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

/*
const Intro = props => {
  let content = (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-contain">This is my carousel content</div>
      </Carousel.Item>
      <Carousel.Item>
        <div>This is my carousel content</div>
      </Carousel.Item>
      <Carousel.Item>
        <div>This is my carousel content</div>
      </Carousel.Item>
    </Carousel>
  );

  return content;
};
*/
export default Intro;
