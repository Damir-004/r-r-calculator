export const ADD_NUMBER = "ADD_NUMBER";
export const ADD_OPERATOR = "ADD_OPERATOR";
export const CLEAR = "CLEAR";
export const CALCULATE = "CALCULATE";

export const addNumber = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const addOperator = (operator) => ({
  type: ADD_OPERATOR,
  payload: operator,
});

export const clear = () => ({
  type: CLEAR,
});

export const calculate = () => ({
  type: CALCULATE,
});