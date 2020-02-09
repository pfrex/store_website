import "../styles/card.css";

const Card = props => {
  let content = (
    <div className="scaler">
      <div className="full-card">
        <h4 className="title">{props.title}</h4>
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
