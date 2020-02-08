import "../styles/card.css";

// get your essentials on auto delivery!
// have cards with data about how and why to order stuff on auto
// add animate.css and keep things clean and simple
// then add in a dark mode switch with CSS variables
// also maybe add some basic state with React?

// these will be cards and will get pulled into a card displayer

const Card = props => {
  let content = (
    <div className="scaler">
      <div className="full-card">
        <h4 id="title">{props.title}</h4>
        <div className="card-flex">
          <img src={props.image}></img>

          <div className="description">{props.description}</div>
        </div>
        <button>{props.button}</button>
      </div>
    </div>
  );

  return content;
};

export default Card;
