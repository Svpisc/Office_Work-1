import React, { useState, useCallback } from 'react';

export default function UseCallback() {
  
  const [count, setCount] = useState(0);

  
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); 
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
