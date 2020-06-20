import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    text: ""
  };
  handleChange = event => {
    const input = event.target.value;
    return this.setState({ text: input });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
