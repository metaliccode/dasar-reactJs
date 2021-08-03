import React, {Component} from "react";
import "App.css";

// Stateful Component
class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SampleText: "",
    };
  }

  updateText(SampleText) {
    this.setState({ SampleText });
  }

  render() {
    return (
      <div className="App-color">
        <h3>Input</h3>
        <label>Username</label>
        <br />
        <input
          value={this.state.SampleText}
          onChange={(e) => {
            this.updateText(e.target.value);
          }}
        ></input>
        <h3>Output</h3>
        <p>{this.state.SampleText}</p>
      </div>
    );
  }
}

export default TextEditor;
