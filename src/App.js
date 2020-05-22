import React, { useState } from 'react';
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
  const changeType = () => {
    const newType = type === 'primary' ? 'secondary' : 'primary';
    setType(newType);
  }

  const handleInput = (e) => {
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
	    <h1 class="heading--display">Web Component Demo</h1>
      <ods-inputoption-checkbox-group
        label={`Your Choice: ${JSON.stringify(options.filter(option => option.checked).map(option => option.value))}`}
        for="cbxDemo1">
        {options.map(
          option =>
            <ods-inputoption id={option.id} label={option.label} type="checkbox" value={option.value} checked={option.checked || undefined} onInput={handleInput}></ods-inputoption>)}
	    </ods-inputoption-checkbox-group>
      <auro-button onClick={toast} secondary={type === 'secondary' || undefined}>Toast</auro-button>
      <auro-button onClick={changeType}>Change Toaster</auro-button>
    </main>
  );
}

export default App;
