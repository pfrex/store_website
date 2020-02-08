import { useState } from "react";
import "../styles/theme.css";
import { Helmet } from "react-helmet";
// add functions which will change CSS custom properties!
// inject the changes into the head of the document

function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

let start1 = RGBToHex(38, 43, 46);
let start2 = RGBToHex(255, 99, 71);
let start3 = RGBToHex(255, 255, 255);

let christmasRed = "#a81919";
let christmasGreen = "#2f9c14";
let white = RGBToHex(255, 255, 255);

let easterPink = "#e057d5";
let easterBlue = "#0edee6";
let easter3 = RGBToHex(255, 255, 255);

let fourthBlue = "#14669c";
let fourthRed = "#e21313";
let fourth3 = RGBToHex(255, 255, 255);

const Theme = props => {
  // it will need to be state to React to the data change!
  const [color1, setColor1] = useState(start1);
  const [color2, setColor2] = useState(start2);
  const [color3, setColor3] = useState(start3);

  const cPressed = () => {
    setColor1("#a81919");
    setColor2(christmasGreen);
    setColor3(christmasRed);
  };

  const oPressed = () => {
    setColor1(start1);
    setColor2(start2);
    setColor3(start3);
  };

  const jPressed = () => {
    setColor1(fourthBlue);
    setColor2(fourthRed);
    setColor3(fourthBlue);
  };

  const ePressed = () => {
    setColor1(easterPink);
    setColor2(easterBlue);
    setColor3(easterPink);
  };

  let content = (
    <div className="theme-buttons">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Grocery Store</title>
        <style>
          {`
                        :root {
                            --main-color1: ${color1};
                            --main-color2: ${color2};
                            --main-color3: ${color3};
                        }
                        `}
        </style>
      </Helmet>
      <h1>Tap the buttons below to switch the theme of the website!</h1>
      <div id="t-group">
        <button id="c-button" onClick={cPressed.bind(this)}>
          Christmas
        </button>
        <button id="e-button" onClick={ePressed.bind(this)}>
          Easter
        </button>
        <button id="j-button" onClick={jPressed.bind(this)}>
          Fourth of July
        </button>
        <button id="o-button" onClick={oPressed.bind(this)}>
          Original
        </button>
      </div>
    </div>
  );
  return content;
};

export default Theme;
