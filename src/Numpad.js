import React from 'react';
import './Numpad.css';

const Numpad = (props) => {

  return (
    <div className="container">
      <button className="AC" onClick={() => props.promptOperator('AC')}>AC</button>
      <button className="divide" onClick={() => props.promptOperator('/')}>/</button>
      <button className="multiply" onClick={() => props.promptOperator('*')}>x</button>
      <button className="seven" onClick={() => props.promptOperand('7')}>7</button>
      <button className="eight" onClick={() => props.promptOperand('8')}>8</button>
      <button className="nine" onClick={() => props.promptOperand('9')}>9</button>
      <button className="minus" onClick={() => props.promptOperator('-')}>-</button>
      <button className="four" onClick={() => props.promptOperand('4')}>4</button>
      <button className="five" onClick={() => props.promptOperand('5')}>5</button>
      <button className="six" onClick={() => props.promptOperand('6')}>6</button>
      <button className="plus" onClick={() => props.promptOperator('+')}>+</button>
      <button className="one" onClick={() => props.promptOperand('1')}>1</button>
      <button className="two" onClick={() => props.promptOperand('2')}>2</button>
      <button className="three" onClick={() => props.promptOperand('3')}>3</button>
      <button className="equal" onClick={() => props.promptOperator('=')}>=</button>
      <button className="zero" onClick={() => props.promptOperand(0)}>0</button>
      <button className="point" onClick={() => props.promptOperand('.')}>.</button>
    </div>
  )
}

export default Numpad;