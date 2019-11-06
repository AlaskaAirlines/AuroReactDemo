import React from 'react';

export default class OldWay extends React.PureComponent {
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

  componentDidUpdate() {
    this.buttonRef.current.buttonCallback = this.state.click;
  }

  changeState = () => {
    this.setState({click: () => alert('message 2'), type: "secondary"});
  }

  render() {
  return (
    <div {...this.props}>
        {/*Old way to add a custom event listener in react*/}
        <h4>Without React Wrapper</h4>
        <ods-button ref={this.buttonRef} buttontype={this.state.type} >Hello World</ods-button>
        <button onClick={this.changeState}>Change Button</button>
    </div>
  );
  }
}