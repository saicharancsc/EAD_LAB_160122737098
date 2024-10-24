// Counter.js
//components
import React, { useState } from 'react';

// Functional component for the counter
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// Functional component for greetings
export function Greetings(props) {
  return <h1>Hello, {props.name}</h1>;
}
