import { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import "../styles/noah.css";
import "animate.css";

/* 
The links in the animation don't work while the component is re-rendering
*/

const Noah = props => {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every 5 seconds!");
      if (isVisible) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  let content = (
    <div id="contain-n">
      <h4>Get me working on your website!</h4>
      <Animated animationIn="pulse" animationOut="null" isVisible={isVisible}>
        <div id="c-card">
          <h3>Noah Tock</h3>
          <p>
            <a href="tel:+2624162137">(262)416-2137</a>
          </p>
          <p>
            <a href="mailto:noahtock@yahoo.com">noahtock@yahoo.com</a>
          </p>
        </div>
      </Animated>
    </div>
  );
  return content;
};

export default Noah;
