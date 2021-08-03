import React from "react";

class PropsComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* contoh props data name */}
        {/* <div>Hello {this.props.name}</div> */}
        {/* contoh props children */}
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default PropsComponent;

// props.children dengan menggunankan functional component

// export default function PropsComponent(props) {
//   return (
//     <React.Fragment>
//       {/* <div>Hello {props.name}</div> */}
//       {props.children}
//     </React.Fragment>
//   );
// }
