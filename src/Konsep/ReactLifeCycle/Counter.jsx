import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "redux/reducer/globalActionType";

// context
// import { RootContext } from "pages/Home";
import { GlobalConsumer } from "context/context";

class Counter extends Component {
  // state = {
  //   order: 4,
  //   name: "Ihsan",
  // };

  // ketika menggunakan arrow funtion akan merefer ke globalnya
  // handlePlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //   );

  //   // this.handleCounterChange();
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   }
  // };

  //membuat method baru untuk update onCounterChange
  // handleCounterChange = (newValue) => {
  //   // this.props.onCounterChange(5);
  //   this.props.onCounterChange(newValue);
  // };

  render() {
    console.log(this.props);
    return (
      <div className="container text-center">
        <button
          // onClick={this.props.handleMinus}
          onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}
          className="btn btn-warning"
        >
          {" "}
          -{" "}
        </button>
        <input
          type="text"
          className="text-center"
          // value={this.state.order}
          // value={this.props.order}
          // value={value.state.totalOrder}
          value={this.props.state.totalOrder}
          readOnly
        />
        {/* <p>{this.state.order}</p> */}
        <button
          // onClick={this.props.handlePlus}
          onClick={() => this.props.dispatch({ type: "ADD_ORDER" })}
          className="btn btn-primary"
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

// untuk Redux
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.ADD_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);
