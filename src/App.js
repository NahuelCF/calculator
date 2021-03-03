import './App.css';

import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { ButtonClear } from "./components/ButtonClear/ButtonClear"

import { useState } from "react"

function App() {
  const [input, setInput] = useState("")

  const addInput = (value) => {
    setInput(input + value)
  }

  const addZeroToInput = (value) => {
    if (input !== "") {
      setInput(input + value)
    }
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <div className="Buttons-container">
          <Input input={input}></Input>
          <div className="row">
            <Button handleclick={addInput}>7</Button>
            <Button handleclick={addInput}>8</Button>
            <Button handleclick={addInput}>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button handleclick={addInput}>4</Button>
            <Button handleclick={addInput}>5</Button>
            <Button handleclick={addInput}>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button handleclick={addInput}>1</Button>
            <Button handleclick={addInput}>2</Button>
            <Button handleclick={addInput}>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button handleclick={addZeroToInput}>0</Button>
            <Button>=</Button>
            <Button>-</Button>
          </div>
        </div>
        <ButtonClear></ButtonClear>
      </div>
    </div>
  );
}

export default App;
