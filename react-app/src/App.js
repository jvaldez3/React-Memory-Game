import React, { Component } from "react";
import Card from "./components/GameCards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

import characters from "./characters.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters,
      topScore: 0,
      currentScore: 0
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }

  checkIfClicked(id) {
    let clickedCharacter = this.state.characters.filter(
      char => char.id === id
    )[0];
    let characterCopy = this.state.characters.slice().sort(function(a, b) {
      return 0.5 - Math.random();
    });

    if (!clickedCharacter.clicked) {
      clickedCharacter.clicked = true;
      characterCopy[
        characterCopy.findIndex(char => char.id === id)
      ] = clickedCharacter;

      this.setState({
        characters: characterCopy,
        currentScore: this.state.currentScore + 1,
        topScore:
          this.state.currentScore + 1 > this.state.topScore
            ? this.state.currentScore + 1
            : this.state.topScore
      });
    } else {
      let resetCharacterCopy = characterCopy.map(char => {
        return {
          id: char.id,
          image: char.image,
          clicked: false
        };
      });
      this.setState({
        characters: resetCharacterCopy,
        currentScore: 0
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {/* <Title>Character List</Title> */}
          {this.state.characters.map(characters => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={characters.id}
              key={characters.id}
              image={characters.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
