import React, {useState} from 'react';
import Swipe from "@alaskaairux/ods-toast/dist/swipe.js";
import Toaster from "@alaskaairux/ods-toast/dist/toaster";
import "@alaskaairux/ods-toast/dist/toaster.css";

window.Swipe = Swipe;
const toaster = new Toaster();

export default function(props) {
  const [click, setClick] = useState(() => () => toaster.add('message 1'));
  const [type, setType] = useState('primary');
  const [inputSelection, setInputSelection] = useState('none');

  const changeState = () => {
      setClick(() => () => toaster.add('message 2'));
      setType('secondary');
  }

  return (
      <div {...props}>
          <ods-button onClick={click} buttontype={type}>Hello World</ods-button>
          <ods-inputoptions
            id="rdo"
            type="radio"
            name="rdo"
            label={`Your Choice: ${inputSelection}`}
            onInput={e => setInputSelection(e.target.value)}
            for="radio1" componentData='[
          { "id": "radio1", "value": "yes", "label": "Yes" },
          { "id": "radio2", "value": "no", "label": "No" },
          { "id": "radio3", "value": "maybe", "label": "Maybe" }
        ]'></ods-inputoptions>
          <button onClick={changeState}>Change Button</button>
      </div>
  );
}