import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import '@alaskaairux/ods-button/dist/ods-button';
import "@alaskaairux/ods-inputoptions";
import "@alaskaairux/ods-toast";

import OldWay from './old-way';
//import NewWay from './new-way';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="example-container">
          <OldWay id="old-way"/>
        </div>
          
      </header>
    </div>
  );
}

export default App;
