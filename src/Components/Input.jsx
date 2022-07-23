import React from "react";
import "./Style.css";

function Input() {
  return (
    <div className="calc--container">
      <div className="input--wrapper">
        <input type="text" disabled="disabled" />
      </div>

      <div className="keypad--wrapper">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button id="del--btn">DEL</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button id="reset--btn">RESET</button>
        <button id="equal--btn">=</button>
      </div>
    </div>
  );
}

export default Input;
