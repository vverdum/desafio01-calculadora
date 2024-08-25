import Input from './components/Input';  
import Button from './components/Button';  

import { Container, Content, Row } from "./styles";  
import { useState } from "react";  

const App = () => {  
  const [currentNumber, setCurrentNumber] = useState('0');  
  const [firstNumber, setFirstNumber] = useState('0');  
  const [operation, setOperation] = useState('');  

  const handleOnClear = () => {  
    setCurrentNumber('0');  
    setFirstNumber('0');  
    setOperation('');  
  };  

  const handleAddNumber = (num) => {  
    setCurrentNumber(prev => (prev === '0' ? '' : prev) + num);  
  };  

  const handleDeleteDigit = () => {  
    setCurrentNumber(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));  
  };  

  const performOperation = (op) => {  
    const num1 = Number(firstNumber);  
    const num2 = Number(currentNumber);  
    let result;  

    switch (op) {  
      case '+':  
        result = num1 + num2;  
        break;  
      case '-':  
        result = num1 - num2;  
        break;  
      case 'x':  
        result = num1 * num2;  
        break;  
      case '/':  
        result = num1 / num2;  
        break;  
      default:  
        return;  
    }  
    
    setCurrentNumber(String(result));  
    setFirstNumber('0');  
    setOperation('');  
  };  

  const handleOperation = (op) => {  
    if (firstNumber === '0') {  
      setFirstNumber(currentNumber);  
      setCurrentNumber('0');  
    } else {  
      performOperation(operation);  
    }  
    setOperation(op);  
  };  

  const handleEquals = () => {  
    if (firstNumber !== '0' && operation) {  
      performOperation(operation);  
    }  
  };  

  return (  
    <Container>  
      <Content>  
        <Input value={currentNumber} />  
        
        <Row>  
          <Button label="x" onClick={() => handleOperation('x')} />  
          <Button label="/" onClick={() => handleOperation('/')} />  
          <Button label="C" onClick={handleOnClear} />  
          <Button label="←" onClick={handleDeleteDigit} />  
        </Row>  

        <Row>  
          {['7', '8', '9'].map(num => (  
            <Button key={num} label={num} onClick={() => handleAddNumber(num)} />  
          ))}  
          <Button label="-" onClick={() => handleOperation('-')} />  
        </Row>  
        
        <Row>  
          {['4', '5', '6'].map(num => (  
            <Button key={num} label={num} onClick={() => handleAddNumber(num)} />  
          ))}  
          <Button label="+" onClick={() => handleOperation('+')} />  
        </Row>  

        <Row>  
          {['1', '2', '3'].map(num => (  
            <Button key={num} label={num} onClick={() => handleAddNumber(num)} />  
          ))}  
          <Button label="=" onClick={handleEquals} />  
        </Row>  
        
        <Row>  
          <Button label="0" onClick={() => handleAddNumber('0')} />  
        </Row>  
      </Content>  
    </Container>  
  );  
};  

export default App;