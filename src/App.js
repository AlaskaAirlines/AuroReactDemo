import React from 'react';
import './App.scss';
import Components from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web Component Demo</h1>
        <div id="example-container">
          <Components />
        </div>          
      </header>
    </div>
  );
}

export default App;
