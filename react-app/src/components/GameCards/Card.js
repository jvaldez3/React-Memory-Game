import React from "react";
import "./style.css";

// set properties for the image and the onClick event to see if the card has been clicked or not already
const Card = props => (
  <div className="card">
    <div className="img-container">
      <img
        height="250px"
        width="200px"
        alt={"This is " + props.id}
        src={props.image}
        onClick={() => props.checkIfClicked(props.id)}
      />
    </div>
  </div>
);

export default Card;
