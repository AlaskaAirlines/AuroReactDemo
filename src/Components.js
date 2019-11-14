import React, { useState, useRef, useEffect } from 'react';
import Swipe from "@alaskaairux/ods-toast/dist/swipe.js";
import Toaster from "@alaskaairux/ods-toast/dist/toaster";
import "@alaskaairux/ods-toast/dist/toaster.css";


window.Swipe = Swipe;
const toaster = new Toaster();

export default function Components(props) {
  const [type, setType] = useState('primary');
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
  const buttonRef = useRef(null);

  useEffect(() => {
    inputOptionsRef.current.componentData = componentData
    buttonRef.current.addEventListener('click', handleClick);
  })

  const changeState = () => {
    setType('secondary');
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
    console.log('clicked');
    toaster.add('message 1');
  }

  return (
    <div>
      <ods-button ref={buttonRef} buttontype={type}>Toast</ods-button>
      <ods-inputoptions
        ref={inputOptionsRef}
        id="rdo"
        type="checkbox"
        name="rdo"
        label={`Your Choice: ${JSON.stringify(inputSelection)}`}
        onInput={handleInput}
        for="radio1" componentData="[]"></ods-inputoptions>
      <ods-button onClick={changeState}>Change Toaster</ods-button>
    </div>
  );
}