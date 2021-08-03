import React from "react";

class Hallo extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

Hallo.defaultProps = {
  name: "NamaUser",
};
export default Hallo;

// const Hallo = (props) => {
//   return <div>Hello {props.name}</div>;
// };

// export default function Hallo(props) {
//   return (
//     <React.Fragment>
//       {/* <div>Hello {props.name}</div> */}
//       {props.children}
//     </React.Fragment>
//   );
// }
