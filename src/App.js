import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import '@alaskaairux/ods-button';

const AlertHello = () => alert('Hello World');

class App extends React.Component {
  buttonRef = React.createRef();
  componentDidMount() {
      this.buttonRef.current.buttonCallback = AlertHello;
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          {/*Old way to add a custom event listener in react*/}
          <ods-button ref={this.buttonRef}>Hello World</ods-button>
      </header>
    </div>
  );
  }
}

export default App;
