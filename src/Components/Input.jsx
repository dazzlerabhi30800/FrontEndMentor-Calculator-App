import React,{useState} from "react";
import "./Style.css";

function Input() {
    const [inputValue, setInputValue] = useState('');
    const [labelValue, setLableValue] = useState('');
    const [result,setResult] = useState('');
    const ops = ['/', '*', '+', '-', '.'];
    const handleValue = (value) => {
        if(
          ops.includes(value) && inputValue.slice(-1) === '0' ||
          ops.includes(value) && ops.includes(inputValue.slice(-1))
        ){
          setInputValue('');
          return;
        }
        setInputValue(inputValue + value);

        if(!ops.includes(value)) {
          setResult(eval(inputValue + value).toString());
        }
    }

    const calculate = () => {
      setInputValue(eval(inputValue).toString());
      setInputValue(result.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }

    const deleteLast = () => {
      if(inputValue == '') {
        return;
      }

      const value = inputValue.slice(0, -1);
      setInputValue(value);
    }

    const reset = () => {
      setInputValue('');
    }
    
  return (
    <div className="calc--container">
      <div className="input--wrapper">
        <label htmlFor="screendigit">{labelValue}</label>
        <input type="text" name="screendigit" id="screendigit" readOnly value={inputValue} />
      </div>

      <div className="keypad--wrapper">
        <button onClick={() => handleValue('7')}>7</button>
        <button onClick={() => handleValue('8')}>8</button>
        <button onClick={() => handleValue('9')}>9</button>
        <button id="del--btn" onClick={deleteLast}>DEL</button>
        <button onClick={() => handleValue('4')}>4</button>
        <button onClick={() => handleValue('5')}>5</button>
        <button onClick={() => handleValue('6')}>6</button>
        <button onClick={() => handleValue('+')}>+</button>
        <button onClick={() => handleValue('1')}>1</button>
        <button onClick={() => handleValue('2')}>2</button>
        <button onClick={() => handleValue('3')}>3</button>
        <button onClick={() => handleValue('-')}>-</button>
        <button onClick={() => handleValue('.')}>.</button>
        <button onClick={() => handleValue('0')}>0</button>
        <button onClick={() => handleValue('/')}>/</button>
        <button onClick={() => handleValue('*')}>x</button>
        <button id="reset--btn" onClick={reset}>RESET</button>
        <button id="equal--btn" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Input;
