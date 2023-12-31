import { DDECREMENT, DINCREMENT } from "./actionType";

const initialstate = {
  value: 0,
};
const counterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};
export default counterReducer;
