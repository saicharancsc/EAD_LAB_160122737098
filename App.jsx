// App.js
//App.jsx
import React from 'react';
import './App.css';
import { Greetings, Counter } from './Components/Counter';
import PasswordStrengthChecker from './Components/passwordCheck'
import Timer from './Components/Timer';

function App() {
  
  return (
    <div>
      <h1>GREETINGS</h1>
      <Greetings name="World from SAI CHRAN C" />
      <h1>COUNTER</h1>
      <Counter />
      <h1>PASSWORD STRENGHT CHECKER </h1>
      <h1>hey pookie!! U can check ur password STRENGTH</h1>
      <PasswordStrengthChecker /> 
      <Timer />
    </div>
  );
}

export default App;
