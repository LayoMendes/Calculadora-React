import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState("0");

  function handleNumberClick(num) {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  }

  function handleOperatorClick(op) {
    const lastChar = display[display.length - 1];
    if ("+-×÷".includes(lastChar)) {
      setDisplay(display.slice(0, -1) + op);
    } else {
      setDisplay(display + op);
    }
  }

  function handleClear() {
    setDisplay("0");
  }

  function handleEqualClick() {

    const expression = display.replace(/×/g, "*").replace(/÷/g, "/");

    try {
      const result = eval(expression);
      setDisplay(String(result));
    } catch {
      setDisplay("Erro");
    }
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button>±</button> {/* Implementar depois */}
        <button>%</button> {/* Implementar depois */}
        <button className='operador' onClick={() => handleOperatorClick("÷")}>÷</button>

        <button onClick={() => handleNumberClick("7")}>7</button>
        <button onClick={() => handleNumberClick("8")}>8</button>
        <button onClick={() => handleNumberClick("9")}>9</button>
        <button className='operador' onClick={() => handleOperatorClick("×")}>×</button>

        <button onClick={() => handleNumberClick("4")}>4</button>
        <button onClick={() => handleNumberClick("5")}>5</button>
        <button onClick={() => handleNumberClick("6")}>6</button>
        <button className='operador' onClick={() => handleOperatorClick("-")}>-</button>

        <button onClick={() => handleNumberClick("1")}>1</button>
        <button onClick={() => handleNumberClick("2")}>2</button>
        <button onClick={() => handleNumberClick("3")}>3</button>
        <button className='operador' onClick={() => handleOperatorClick("+")}>+</button>

        <button className="zero" onClick={() => handleNumberClick("0")}>0</button>
        <button className='operador' onClick={() => handleNumberClick(".")}>.</button>
        <button className='igual' onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
