// src/PasswordStrengthChecker.js
//components
import React, { useState } from 'react';


const PasswordStrengthChecker = () => {
  const [password,setPassword]=useState('')
  const [strength,setStrength]=useState('')
  
  const checkstr=(password) =>{
    let strength="weak"
    if (password.length >= 8) {
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
          strength = 'Strong';
        } else if (/[A-Z]/.test(password) || /[a-z]/.test(password)) {
          strength = 'Medium';
        }
    }
    setStrength(strength)

  }
  const take =(e)=>{

    const pass=e.target.value;
    setPassword(pass)
    checkstr(pass)

  }

  return (
    <div className="password-checker">
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={take}
        placeholder="Enter your password"
      />
      <p className={`strength ${strength.toLowerCase()}`}>{strength}</p>
    </div>
  );
};

export default PasswordStrengthChecker;
