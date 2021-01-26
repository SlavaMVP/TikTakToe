import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(3);

  
  return (
      <div>
    <p>You clicked {count} times, but num is {num}</p>
    <button 
    onClick={() => {
        return  num < 20 ? 
        setNum(num + 3) : 
        setCount(count + 1) 
    }}>
    Click me
  </button>
  </div>
  )
}

export default Example;