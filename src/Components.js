import React, { useState, useRef, useEffect } from 'react';
import Swipe from "@alaskaairux/ods-toast/dist/swipe.js";
import Toaster from "@alaskaairux/ods-toast/dist/toaster";
import "@alaskaairux/ods-toast/dist/toaster.css";


window.Swipe = Swipe;
const toaster = new Toaster();

export default function Components(props) {
  const [type, setType] = useState('primary');
  const [message, setMessage] = useState('message 1');
  const [inputSelection, setInputSelection] = useState(null);
  const [componentData, setComponentData] = useState([
    {
      id: 'radio1',
      value: 'yes',
      label: 'Yes',
      checked: false
    },
    {
      id: 'radio2',
      value: 'no',
      label: 'No',
      checked: false
    }
  ]);
  const inputOptionsRef = useRef(null);

  useEffect(() => {
    inputOptionsRef.current.componentData = componentData
  })

  const changeState = () => {
    setType('secondary');
    setMessage('message 2');
  }

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setInputSelection(inputValue);
    let updatedComponentData = componentData.map(
      option => inputValue.includes(option.value) ?
        { ...option, checked: true } :
        { ...option, checked: false });
    setComponentData(updatedComponentData);
  }

  const handleClick = () => {
    toaster.add(message);
  }

  return (
    <div>
      <ods-inputoptions
        ref={inputOptionsRef}
        id="rdo"
        type="checkbox"
        name="rdo"
        label={`Your Choice: ${JSON.stringify(inputSelection)}`}
        onInput={handleInput}
        for="radio1" componentData="[]"></ods-inputoptions>
      <auro-button onClick={handleClick} secondary={type === 'secondary' || undefined}>Toast</auro-button>
      <auro-button onClick={changeState}>Change Toaster</auro-button>
    </div>

  );
}