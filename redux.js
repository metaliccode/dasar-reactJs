// store -> reducer -> dispatch -> subcribetion
// import {} from redux;
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 25,
};

// Reducer (agent) -> bisa di update hanya di fungsi reducer setiap update pada store
const rootReducer = (state = initialState, action) => {
  //   console.log(action);
  //   if (action.type === "ADD_AGE") {
  //     return {
  //       // seblum merubah state copy dulu semua statenya dengan ES6
  //       ...state,
  //       age: state.age + 1,
  //     };
  //   }

  //   if (action.type === "CHANGE_VALUE") {
  //     return {
  //       ...state,
  //       value: state.value + action.newValue,
  //     };
  //   }
  //   return state;

  switch (action.type) {
    case "ADD_AGE":
      return {
        // seblum merubah state copy dulu semua statenya dengan ES6
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

// store
const store = createStore(rootReducer);
console.log(store.getState());

// SubScriptions -> proses pemanggilan store
store.subscribe(() => {
  console.log("store change : ", store.getState());
});

// Dispatching action -> proses pemanggilan fungsi pada reducer (pemanggilan task list)
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
