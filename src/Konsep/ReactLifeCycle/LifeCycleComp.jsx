import React, { Component } from "react";
import { connect } from "react-redux";
import { RootContext } from "pages/Home";
import { GlobalConsumer } from "context/context";

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    // memakai console untuk melihat urutan
    console.log("constructor");
  }

  // mengembalikan nilai props dan state
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //   untuk updata state lebih baik menggunakan didmount
  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  //untuk meningkatkan performa pada sebuah web, dan memblock sebuah updatan dari sebuh komponen
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate");
    console.group("shouldComponentUpdate");
    // console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("this state: ", this.state);
    console.groupEnd();
    //
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        {/* <button>Component Button {this.state.count}</button> */}
        <button onClick={this.changeCount}>
          Component Button {this.state.count}
        </button>
        <hr />
        {/* <p>Total Order : {this.props.order}</p> */}
        <p>Total Order : {this.props.state.totalOrder}</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };
// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);
