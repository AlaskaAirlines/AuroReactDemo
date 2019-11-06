import React, { useState} from 'react';
import Wrapper from './wrapper';

class OdsButton extends Wrapper {
    TagName = 'ods-button'
}

export default function(props) {
    const [click, setClick] = useState(() => () => alert('message 1'));
    const [type, setType] = useState('primary');

    const changeState = () => {
        setClick(() => () => alert('message 2'));
        setType('secondary');
    }

    return (
        <div {...props}>
            <h4>React Wrapper</h4>
            <OdsButton buttonCallback={click} buttontype={type}>Hello World</OdsButton>
            <button onClick={changeState}>Change Button</button>
        </div>
    );
}