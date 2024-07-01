import React, { useState, createContext } from 'react';
import Nav from './components/nav';

// Create a context
  export const BtnContext = createContext();

export default function App() {
  const [signIn, setsignIn] = useState(false);

  return (
    <BtnContext.Provider value={[signIn, setsignIn]}>
      <Nav />
      <h1>{signIn ? 'Sign out' : 'Sign in'}</h1>
    </BtnContext.Provider>
  );
}
