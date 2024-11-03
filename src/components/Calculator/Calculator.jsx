import React from 'react'
import { useState } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';
import './Calculator.css'
import { add } from '../../utils/stringCalculator';
import logo from './logo.svg'
export default function Calculator() {
    const [inputString, setInputString] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setInputString(e.target.value);
        setError(null);
        setResult(null);
    };

    const calculateSum = () => {
        try {
            console.log(inputString);
            const sum = add(inputString);
            console.log(sum);
            setResult(sum);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

  return (
    <div className='calculator'>
        <div className='header'>
            <img src={logo} alt='logo'/>
            <p>Assessment</p>
        </div>
        <div className='body'>
         <h1>String Calculator</h1>
            <input
                type="text"
                placeholder="Enter numbers, e.g., //;\n1;2;3"
                value={inputString}
                onChange={handleInputChange}
            />
            <button onClick={calculateSum}>Calculate Sum</button>
            {result !== null && <div id="result">Sum: {result}</div>}
            <ErrorModal message={error} onClose={() => setError(null)} />
            </div>
            <div>
                <p>Incubyte assessment by Avinash Adapa</p>
                <div className='links'>
                    <a href='https://github.com/' target='_blank' rel="noreferrer">Github Repository</a>
                </div>
            </div>
    </div>
  )
}
