import React from 'react';

const ReactEvents = [
  "onCopy",
  "onCut",
  "onPaste",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onChange",
  "onClick",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOver",
  "onMouseUp",
  "onSelect",
  "onInput"
];

class Wrapper extends React.PureComponent {
  ref = React.createRef();
  funcProps = {};
  normalProps = {};

  componentDidMount() {
    this.mapCallbackProps();
  }

  componentDidUpdate() {
    this.mapCallbackProps();
  }

  // Seperate out props that are function so they can be mapped to callbacks
  calculateProps() {
    this.funcProps = {};
    this.normalProps = {};
    for(let key in this.props) {
        const type = typeof this.props[key];
        if((type === 'function' || type === 'object') && !ReactEvents.includes(key)) {
            this.funcProps[key] = this.props[key];
        } else {
            this.normalProps[key] = this.props[key];
        }
    }
  }

  // Map function props to custom element properties of same name
  mapCallbackProps() {
    for (let key in this.funcProps) {
        this.ref.current[key] = this.funcProps[key];
    }
  }

  render() {
    this.calculateProps();
    return React.createElement(
      this.TagName || this.props.tagName, 
      {
        ref: this.ref,
        ...this.normalProps
      }
    );
  }
}

export default Wrapper;