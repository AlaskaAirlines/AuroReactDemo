import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Import any web components used here */
import '@alaskaairux/auro-button';
import '@alaskaairux/auro-checkbox';
import '@alaskaairux/auro-checkbox/dist/auro-checkbox-group';
import '@alaskaairux/auro-header';
import '@alaskaairux/auro-input';
import "@alaskaairux/auro-radio";
import "@alaskaairux/auro-radio/dist/auro-radio-group";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
