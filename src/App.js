
import { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(0)
  const [oldValue, setOldValue] = useState(0)
  const [operator, setOperator] = useState()
  const [operatorInUse, setOperatorInUse] = useState(false)
 
 
  function inputNum(e){
    let input=e.target.value
    if(value===0 || operatorInUse===true ){
      setValue(input)
    }else{
    setValue(value + input)
  }
  }

  function operatorHandler(e){
    let inputOperator = e.target.value
    setOperator(inputOperator)
    setOperatorInUse(true)
    setOldValue(value)
    

    
  }

  function clearNum(){
    setValue(0)
    setOperatorInUse(false)
  }

  function calculate(){
    if(operator==='/'){
      setValue(parseFloat(oldValue) / parseFloat(value))
    }
    if(operator==='+'){
      setValue(parseFloat(oldValue) + parseFloat(value))
    }
    if(operator==='-'){
      setValue(parseFloat(oldValue) - parseFloat(value))
    }
    if(operator==='*'){
      setValue(parseFloat(oldValue) * parseFloat(value))
    }
  }

  return (
    <div className="calculator">
     <div className='buttons'>
      <h2 id='value'>{value}</h2>
      <button id='clear' onClick={clearNum}>Clear</button>
      <button onClick={operatorHandler} value="/">/</button>
      <button onClick={operatorHandler} value='*'>*</button>
      <button onClick={inputNum} value={7}>7</button>
      <button onClick={inputNum} value={8}>8</button>
      <button onClick={inputNum} value={9}>9</button>
      <button onClick={operatorHandler} value='-'>-</button>
      <button onClick={inputNum} value={4}>4</button>
      <button onClick={inputNum} value={5}>5</button>
      <button onClick={inputNum} value={6}>6</button>
      <button id='plus' onClick={operatorHandler} value='+'>+</button>
      <button onClick={inputNum} value={1}>1</button>
      <button onClick={inputNum} value={2}>2</button>
      <button onClick={inputNum} value={3}>3</button>
      <button onClick={inputNum} value={0}>0</button>
      <button onClick={inputNum} value='00'>00</button>
      <button>.</button>
      <button id='equal' onClick={calculate}>=</button>

     </div>
    </div>
  );
}

export default App;
