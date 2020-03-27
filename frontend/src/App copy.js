import React, { useState } from 'react';
import Header from './Counter';

import Logon from './pages/Logon';

function App() {
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter +1);
  }

  return (
    <div>
      <Header>
        Semana OmniStack : {counter}
      </Header>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
// <Header> Semana omni</Header>
export default App;
