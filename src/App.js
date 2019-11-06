import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css';
import '@alaskaairux/ods-button/dist/ods-button';
import Wrapper from './wrapper';

class OdsButton extends Wrapper {
  TagName = 'ods-button'
}

class App extends React.Component {
  buttonRef = React.createRef();

  constructor() {
    super();
    this.state = {
      click: () => alert('message 1'),
      type: "primary"
    }
  }
  componentDidMount() {
      this.buttonRef.current.buttonCallback = this.state.click;
  }

  changeMessage = () => {
    this.setState({click: () => alert('message 2'), type: "secondary"});
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          {this.state.type}
          {/*Old way to add a custom event listener in react*/}
          <ods-button ref={this.buttonRef}>Hello World</ods-button>
          <OdsButton yeet="wow" buttonCallback={this.state.click} buttontype={this.state.type}>Hello World 2 {this.state.type}</OdsButton>
          <button onClick={this.changeMessage} buttontype={this.state.type}>Change Message </button>
      </header>
    </div>
  );
  }
}

export default App;
