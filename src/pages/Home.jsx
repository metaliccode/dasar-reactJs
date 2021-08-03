import Stateful from "../Konsep/Stateful";
import User from "../Konsep/component/User";
import TextEditor from "../Konsep/component/TextEditor";
import Product from "../Konsep/ReactLifeCycle/Product";
import LifeCycleComp from "../Konsep/ReactLifeCycle/LifeCycleComp";
import Blog from "./API/Blog";
import { Route, Switch, NavLink, Link, BrowserRouter } from "react-router-dom";

// import Hallo from "Konsep/component/Hallo";

import React, { Component, createContext } from "react";
import DetailPost from "./API/DetailPost";

import globalProvider from "context/context";
import Hooks from "./Hooks/Hooks";

class Home extends Component {
  // state = {
  //   showComponent: true,
  // };

  // componentDidMount() {
  //   // setTimeout(() => {
  //   //   this.setState({
  //   //     showComponent: false,
  //   //   });
  //   // }, 6000);
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <Link className="navbar-brand" to="/">
              Navbar [Component Global]
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog Post Api
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user" className="nav-link">
                    User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/text-editor" className="nav-link">
                    Text Editor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link">
                    Counter Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/lifecyclecomp" className="nav-link">
                    Life Cycle
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hooks" className="nav-link">
                    Hooks
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog Post API</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/text-editor">Text Editor</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/lifecyclecomp">Life Cycle</Link>
            </li>
          </ul> */}
        </div>
        <Route path="/" exact component={Stateful}></Route>
        <Route path="/user" component={User}></Route>
        <Route path="/text-editor" component={TextEditor}></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/detail/:postid" component={DetailPost}></Route>
        <Route path="/lifecyclecomp" component={LifeCycleComp}></Route>
        <Route path="/hooks" component={Hooks}></Route>

        {/* {this.state.showComponent ? <LifeCycleComp></LifeCycleComp> : null} */}
      </BrowserRouter>
    );
  }
}

export default globalProvider(Home);
