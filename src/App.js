import React, { useState, useMemo } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(() => ({
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  }), [dark]);

  function slowFunction(num) {
    console.log('Calling Slow Function');
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <div>{doubleNumber}</div>
    </div>
  );
}
