import React, { createContext, Component } from "react";
// context
export const RootContext = createContext();

// untuk Provider
const Provider = RootContext.Provider;
const globalProvider = (Children) => {
  return class ParentComp extends Component {
    // StateGlobal
    state = {
      totalOrder: 0,
    };

    dispatch = (action) => {
      if (action.type === "ADD_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      }
      if (action.type === "MINUS_ORDER") {
        let total = 0;
        if (this.state.totalOrder > 0) {
          return this.setState({
            totalOrder: this.state.totalOrder - 1,
          });
        } else {
          return this.setState({
            totalOrder: total,
          });
        }
      }
    };
    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Children {...this.props}></Children>
        </Provider>
      );
    }
  };
};

export default globalProvider;

// untuk consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
