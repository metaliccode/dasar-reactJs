import React, { Component, useState, useEffect } from "react";

// export default class Hooks extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nilai: 0,
//     };
//   }

//   onUpdate = () => {
//     this.setState({
//       nilai: this.state.nilai + 1,
//     });
//   };

//   componentDidMount() {
//     document.title = `Title Change : ${this.state.nilai}`;
//   }

//   componentDidUpdate() {
//     document.title = `Title Change: ${this.state.nilai}`;
//   }

//   componentWillUnmount() {
//     document.title = `React Js Inixindo`;
//   }

//   render() {
//     return (
//       <div>
//         <p>Nilai Saya saat ini adalah : {this.state.nilai}</p>
//         <button onClick={this.onUpdate} className="btn btn-primary">
//           Update Nilai
//         </button>
//       </div>
//     );
//   }
// }

// dengan react hooks
const Hooks = () => {
  // sama seperti constructor initial state
  const [nilai, setNilai] = useState(0);

  // component did mount, update, unmount
  useEffect(() => {
    document.title = `Title Change : ${nilai}`;
    // will unmount
    return () => {
      document.title = `React Js Inixindo`;
    };
  });

  return (
    <div>
      <p>Nilai Saya saat ini adalah : {nilai}</p>
      <button onClick={() => setNilai(nilai + 1)} className="btn btn-primary">
        Update Nilai
      </button>
    </div>
  );
};

export default Hooks;
