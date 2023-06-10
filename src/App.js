import React from "react";
import { connect } from "react-redux";
import {
  addNumber,
  addOperator,
  clear,
  calculate,
} from "./actions.js";

const mapStateToProps = (state) => ({
  display: state.display,
});
const mapDispatchToProps = {
  addNumber,
  addOperator,
  clear,
  calculate,
};
const App = ({
  display,
  addNumber,
  addOperator,
  clear,
  calculate,
}) => {
  const handleNumberClick = (number) => {
    addNumber(number);
  };
  const handleOperatorClick = (operator) => {
    addOperator(operator);
  };
  const handleClearClick = () => {
    clear();
  };
  const handleCalculateClick = () => {
    calculate();
  };
  return (
    <div className="container">
      <div className="main-text">
        <input type="text" value={display} disabled />
      </div>
      <div className="box">
        <button className="sh-green" onClick={() => handleNumberClick("7")}>7</button> 
        <button className="sh-green" onClick={() => handleNumberClick("8")}>8</button>
        <button className="sh-green" onClick={() => handleNumberClick("9")}>9</button>
        <button className="sh-blue" onClick={() => handleOperatorClick("+")}>+</button>
      </div>
      <div className="box">
        <button className="sh-green" onClick={() => handleNumberClick("4")}>4</button>
        <button className="sh-green" onClick={() => handleNumberClick("5")}>5</button>
        <button className="sh-green" onClick={() => handleNumberClick("6")}>6</button>
        <button className="sh-blue" onClick={() => handleOperatorClick("-")}>-</button>
      </div>
      <div className="box">
        <button className="sh-green" onClick={() => handleNumberClick("1")}>1</button>
        <button className="sh-green" onClick={() => handleNumberClick("2")}>2</button>
        <button className="sh-green" onClick={() => handleNumberClick("3")}>3</button>
        <button className="sh-blue" onClick={() => handleOperatorClick("*")}>*</button>
      </div>
      <div className="box">
        <button className="sh-green" onClick={() => handleNumberClick("0")}>0</button>
        <button className="sh-green" onClick={() => handleNumberClick(".")}>.</button>
        <button className="rav" onClick={() => handleCalculateClick()}>=</button>
        <button className="sh-blue" onClick={() => handleOperatorClick("/")}>/</button>
      </div>
      <button className="clear" onClick={() => handleClearClick()}>Очистить</button>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(App);