import './App.css';

import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { ButtonClear } from "./components/ButtonClear/ButtonClear"

import { useState } from "react"

function App() {
  const [input, setInput] = useState("")

  return (
    <div className="App">
      <div className="calculator-container">
        <div className="Buttons-container">
          <Input input={input}></Input>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button>0</Button>
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
