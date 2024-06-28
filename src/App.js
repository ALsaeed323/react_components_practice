import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({ count: 4, name: 'John' });

  return (
    <div className="App">
      <button onClick={() => setState(prevState => ({
        ...prevState,
        count: prevState.count - 1
      }))}>-</button>
      <span>{state.count}</span>
      <button onClick={() => setState(prevState => ({
        ...prevState,
        count: prevState.count + 1
      }))}>+</button>
    </div>
  );
}

export default App;
