import React from "react";
import "./Header.css";

// create a header with a Bootstrap navbar and jumbotron
const Header = props => (
  <div className="main-container-fluid">
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className="score">
        Current game score: {props.currentScore} | Top score: {props.topScore}
      </h5>
    </nav>

    <div className="jumbotron jumbotron-fluid">
      <h1>GOT Memory Game</h1>
    </div>
  </div>
);

export default Header;
