import { DECREMENT, INCREMENT } from "./actionType";

const initialstate = {
  value: 0
};

const counterReducer = (state = initialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value=state.value+1,
      };
      case DECREMENT:
      return {
        ...state,
        value=state.value-1,
      };
      default:
      return state;
  }
};
