import {
  ADD_NUMBER,
  ADD_OPERATOR,
  CLEAR,
  CALCULATE,
} from "./actions";

const initialState = {
  display: "0",
  operator: null,
  prevValue: 0,
  result: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        display:
          state.display === "0"
            ? action.payload
            : state.display + action.payload,
        result: null,
      };
    case ADD_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        prevValue: parseFloat(state.display),
        display: "0",
      };
    case CLEAR:
      return {
        ...initialState,
      };
    case CALCULATE:
      let result;
      switch (state.operator) {
        case "+":
          result = state.prevValue + parseFloat(state.display);
          break;
        case "-":
          result = state.prevValue - parseFloat(state.display);
          break;
        case "*":
          result = state.prevValue * parseFloat(state.display);
          break;
        case "/":
          result = state.prevValue / parseFloat(state.display);
          break;
        default:
          result = state.display;
      }
      return {
        ...state,
        display: result.toString(),
        operator: null,
        prevValue: null,
        result,
      };
    default:
      return state;
  }
};

export default reducer;