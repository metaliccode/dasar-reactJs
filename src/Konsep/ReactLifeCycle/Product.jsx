import React, { Component } from "react";
import CardProduct from "./CardProduct";
import "App.css";
import { connect } from "react-redux";
import { RootContext } from "pages/Home";
import { GlobalConsumer } from "context/context";

class Product extends Component {
  // state = {
  //   order: 4,
  //   name: "Ihsan",
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  //   // ketika menggunakan arrow funtion akan merefer ke globalnya
  //   handlePlus = () => {
  //     // alert("Plus Button");
  //     // ES5 seperti di bawah
  //     // this.state.order = 5;
  //     this.setState({
  //       order: this.state.order + 1,
  //     });
  //     console.log("plus", this);
  //   };

  //   // akan terfokus pada method ini
  //   //   handleMinus() {
  //   handleMinus = () => {
  //     // alert("Minus Button");
  //     if (this.state.order > 0) {
  //       this.setState({
  //         order: this.state.order - 1,
  //       });
  //     }
  //     // console.log("minus", this);
  //   };

  render() {
    return (
      <React.Fragment>
        <div className="container col-md-4">
          <p>Cart :</p>
          {/* <h3>{this.state.order}</h3> */}
          {/* <h3>{this.props.order}</h3> */}
          {/* <h3>{value.state.totalOrder}</h3> */}
          <h3>{this.props.state.totalOrder}</h3>
          <br />
          <CardProduct
          // onCounterChange={(value) => this.handleCounterChange(value)}
          ></CardProduct>
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);
