import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import '../styles/App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        calculate();
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      clearInput();
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const calculate = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: input }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="keypad">
        <Button onClick={handleClick}>C</Button>
        <Button onClick={handleClick}>(</Button>
        <Button onClick={handleClick}>)</Button>
        <Button onClick={handleClick}>⌫</Button>
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick}>/</Button>
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick}>*</Button>
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick}>-</Button>
        <Button onClick={handleClick}>0</Button>
        <Button onClick={handleClick}>.</Button>
        <Button onClick={handleClick}>=</Button>
        <Button onClick={handleClick}>+</Button>
        <Button onClick={handleClick}>sin(</Button>
        <Button onClick={handleClick}>cos(</Button>
        <Button onClick={handleClick}>tan(</Button>
        <Button onClick={handleClick}>^</Button>
        <Button onClick={handleClick}>sqrt(</Button>
        <Button onClick={handleClick}>log(</Button>
        <Button onClick={handleClick}>ln(</Button>
        <Button onClick={handleClick}>π</Button>
      </div>
    </div>
  );
};

export default Calculator;