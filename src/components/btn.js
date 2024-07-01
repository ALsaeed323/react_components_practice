import React, { useContext } from 'react';
import {BtnContext} from '../App'; 

function Btn() {
  const [signIn, setSignIn] = useContext(BtnContext);

  return (
    <button onClick={() => setSignIn(!signIn)}>
      {signIn ? 'Sign out' : 'Sign in'}
    </button>
  );
}

export default Btn;
