import React, { Component } from "react";
import Counter from "./Counter";
import "App.css";

export default class CardProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card card-body container">
          <img
            className="container"
            src="https://image.freepik.com/free-photo/top-view-fresh-organic-chicken-meat-wooden-cutting-board_114579-66136.jpg"
            alt=""
          />
          <h3 className="container text-center">Daging Ayam</h3>
        </div>
        <Counter
        // onCounterChange={(value) => this.props.onCounterChange(value)}
        ></Counter>
      </React.Fragment>
    );
  }
}
