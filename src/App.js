import React from 'react';
import './App.css';
import Numpad from './Numpad';
import Display from './Display';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      operand1: '0',
      operand2: '0',
      operator: '=',
      isNewOperation: false,
      screen: '0',
    }
  }

  promptOperand = (value) => {
    this.setState((state) => ({ 
      operand2: (state.screen === '0' || state.isNewOperation === true) ? value : state.screen + value,
      screen: (state.screen === '0' || state.isNewOperation === true) ? value : state.screen + value,
      isNewOperation: false,
    }));
  }

  promptOperator = (operator) => {
    var temp;
    var newOperator;
    if (operator === 'AC') {
      temp = 0;
      newOperator = '=';
    } else {
      switch (this.state.operator) {
        case '+':
          temp = parseFloat(this.state.operand1) + parseFloat(this.state.operand2);
          break;
        case '-':
          temp = parseFloat(this.state.operand1) - parseFloat(this.state.operand2);
          break; 
        case '*':
          temp = parseFloat(this.state.operand1) * parseFloat(this.state.operand2);
          break;
        case '/':
          temp = parseFloat(this.state.operand1) / parseFloat(this.state.operand2);
          break;
        case '=':
          temp = parseFloat(this.state.operand2);
          break;
        case 'AC':
          break;
      }
      newOperator = operator;
    }
    temp = String(temp);
  
    this.setState({
      operand1: temp,
      operand2: temp,
      screen: temp,
      operator: newOperator,
      isNewOperation: true,
    })
  }


  render() {
    return (
      <div className="App">
        <div className="Calculator">
          <Display 
            value={this.state.screen}  
          />
          <Numpad 
            promptOperand={this.promptOperand}
            promptOperator={this.promptOperator}
          />
        </div>
      </div>
    );
  }

}



export default App;
