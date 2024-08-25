import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');  
  const [firstNumber, setFirstNumber] = useState('0');  
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {  
  setCurrentNumber('0');  
  setFirstNumber('0'); 
  
  };  

  const handleAddNumber = (num) => {  
    
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);  
  };  
  
  const handleSumNumbers = () => {

    if ( firstNumber === '0' || firstNumber === '') {  
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')     
    } else {   
      setCurrentNumber(currentNumber)  
      const sum = Number(firstNumber) + Number(currentNumber);  
      setCurrentNumber(String(sum));  
      setOperation('') 
    }  
  };
  
  const handleMinusNumbers = () => {  
    if ( firstNumber === '0' || firstNumber === '') {  
      setFirstNumber(String(currentNumber) );
      setCurrentNumber('0')
      setOperation('-')     
    } else {         
      const sub = Number(firstNumber) - Number(currentNumber);  
      setCurrentNumber(String(sub));  
      setOperation('') 
    }  
  };
  const handleEquals = () => {
    if (firstNumber!=='0'&& operation !==''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')           
    }
    switch(operation){
      case '+': handleSumNumbers();
      break;
      case '-': handleMinusNumbers();
      break;
      default: handleOnClear();
      break;
    }
    
    
  };
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x"/> 
          <Button label="/"/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="X"/>
        </Row>

        <Row>
          <Button label="7" on onClick={()=>handleAddNumber('7')}/>
          <Button label="8" on onClick={()=>handleAddNumber('8')}/>
          <Button label="9" on onClick={()=>handleAddNumber('9')}/>
          <Button label="-" on onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" on onClick={()=>handleAddNumber('4')}/>
          <Button label="5" on onClick={()=>handleAddNumber('5')}/>
          <Button label="6" on onClick={()=>handleAddNumber('6')}/>
          <Button label="+" on onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" on onClick={()=>handleAddNumber('1')}/>
          <Button label="2" on onClick={()=>handleAddNumber('2')}/>
          <Button label="3" on onClick={()=>handleAddNumber('3')}/>
          <Button label="=" on onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" on onClick={()=>handleAddNumber('0')}/>
          
        </Row>
    
        
      </Content>
      
    </Container>
  );
}

export default App;