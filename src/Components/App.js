import React, { Component } from "react";
import Validation from "./Validation";
import CharComponent from "./CharComponent";
import "../styles.css";

class App extends Component {
  state = {
    text: ""
  };
  handleChange = event => {
    const input = event.target.value;
    this.setState({ text: input });
  };

  daleteChar = id => {
    const inputText = this.state.text.split("");
    inputText.splice(id, 1);
    const updatedText = inputText.join("");
    this.setState({ text: updatedText });
  };

  render() {
    const textChar = this.state.text.split("");
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Enter a text"
        />
        <Validation len={this.state.text.length} />
        {textChar.map((char, index) => {
          return (
            <CharComponent
              key={index}
              id={index}
              value={char}
              clicked={() => this.daleteChar(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
