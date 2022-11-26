import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Rout from './routes/Rout';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Counter />        
      </header> */}
      <Rout />
    </div>
  );
}

export default App;
