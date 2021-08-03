// const createStore = redux.createStore();
import ActionType from "redux/reducer/globalActionType";

const globalState = {
  totalOrder: 0,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === ActionType.ADD_ORDER) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  if (action.type === ActionType.MINUS_ORDER) {
    let totalOrder = 0;
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: totalOrder,
    };
  }
  return state;
};

export default rootReducer;
