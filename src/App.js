import React, { useState, useRef, useEffect } from 'react';
import './App.scss';

import Swipe from "@alaskaairux/ods-toast/dist/swipe.js";
import Toaster from "@alaskaairux/ods-toast/dist/toaster";
import "@alaskaairux/ods-toast/dist/toaster.css";

window.Swipe = Swipe;
const toaster = new Toaster();

function App() {
  const [type, setType] = useState('primary');
  const [options, setOptions] = useState([
    {
      id: 'cbx1',
      value: 'yes',
      label: 'Yes',
      checked: false
    },
    {
      id: 'cbx2',
      value: 'no',
      label: 'No',
      checked: false
    }
  ]);

  // Because the change event from auro-checkbox is a custom event, onChange does not pick it up
  // due to React's synthetic event system
  // We need to add the event listener using a ref instead
  // If you do not need to support IE, you can listen to the input event inline instead of using a ref.
  const checkboxGroupEl = useRef(null);
  useEffect(() => {
    const checkboxGroup = checkboxGroupEl.current;
    checkboxGroup.addEventListener('change', handleChange);
    return function cleanup() {
      checkboxGroup.removeEventListener('change', handleChange);
    };
  });

  const changeType = () => {
    const newType = type === 'primary' ? 'secondary' : 'primary';
    setType(newType);
  }

  const handleChange = (e) => {
    const { target } = e;

    let updatedOptions = options.map(
      option => option.value === target.value  ?
        { ...option, checked: target.checked } : option);
    setOptions(updatedOptions);
  }

  const toast = () => {
    const message = type === 'primary' ? 'message 1' : 'message 2';
    toaster.add(message);
  }

  return (
    <main>
      <h1 className="heading--display">Web Component Demo</h1>
      <auro-checkbox-group required ref={checkboxGroupEl}>
        <span slot="legend">{`Your Choice: ${JSON.stringify(
          options
            .filter((option) => option.checked)
            .map((option) => option.value)
        )}`}</span>
        {options.map((option) => (
          <auro-checkbox
            key={option.id}
            id={option.id}
            name="cbxDemo"
            value={option.value}
            checked={option.checked || undefined}>
            {option.label}
          </auro-checkbox>
        ))}
      </auro-checkbox-group>
      <auro-button onClick={toast} secondary={type === 'secondary' || undefined}>Toast</auro-button>
      <auro-button onClick={changeType}>Change Toaster</auro-button>
    </main>
  );
}

export default App;
