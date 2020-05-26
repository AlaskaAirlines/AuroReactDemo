# Auro Web Components: React Demo

Interested in starting a new project using Auro and React? This demo project is a complete example that includes basic setup. 

This app runs and works in all [supported browsers](http://auro.alaskaair.com/support/browsersSupport). Please explore the project source to see how the Auro components are being used in a React development environment. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Example App API

Depending on your local configuration, this project will work with either `yarn` or `npm`. For the sake of documentation, the commands will default to `npm`. 

Within the root directory of the app, you can:

| Command | Description
|---|---
| npm start | Runs the app in the development mode.<br />Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
||Browser sync and linting in the CLI is enabled.
| npm test | Launches the test runner in the interactive watch mode
|| See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
| npm build | Production build in the `build` folder.<br>Optimized, minimized and prepared for deployment
||See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setting up new React project with Auro Web Components

The following steps will let you start using Web Components in your React application across all supported browsers.

### Install

The following command will install ods-button, design tokens and focus-visible. 

```js
$ npm install --save-dev @alaskaairux/ods-button @alaskaairux/orion-design-tokens focus-visible
```

### Web Components polyfill

This example loads the polyfills from a CDN, but you can serve them with your application if you want. Include the `defer` attribute to ensure that the polyfills do not prevent the app from loading.

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-loader.js" defer></script>
```

Adding a reference to `webcomponents-loader.js` in the head of `public\index.html` will detect if the user's browser supports web components and will polyfill any required features.

### Web components manifest 

Adding web components to a manifest, `webcomponents.js`, in the `./src` directory will load all the web components in the proper order needed to support legacy browsers. 

```js
import '@alaskaairux/ods-button/dist/auro-button';
```

### Import from manifest 

Update `index.js` to import the Auro components once the polyfills have loaded. This guarantees that web components are not defined until the polyfills are ready.

```js
import * as serviceWorker from './serviceWorker';

// add this line
window.addEventListener('WebComponentsReady', () => {
    return import('./webcomponents');
});

ReactDOM.render(<App />, document.getElementById('root'));
```

### Design tokens

Design tokens are a set of pre-defined variables used to manage the design of products. In the `App.js`, import the design tokens. 

In `App.js`, import the Auro Design Tokens from the npm package. The design tokens need to be available for the component to render.

```js
import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css';
```

### Add the button

In `App.js`, add a reference to `auro-button`.

```js
render() {
  return (
    <div className="App">
      <auro-button onClick={() => alert('clicked!')}>Click Me</auro-button>
    </div>
  )
}
```

## Importing WC Style Sheets 

WC Style Sheets (WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design Language.

This resource is built using Sass, [node-sass](https://www.npmjs.com/package/node-sass) is the preferred library for Create React App. 

```
$ npm i node-sass -D
```

### Install WC Style Sheets.

```javascript
$ npm i @alaskaairux/orion-web-core-style-sheets
```

After installing `node-sass`, rename `index.css` to `index.scss` and rename the import in `index.js`.  

### Importing the stylesheets

Place global stylesheet imports into `index.scss`. 

At the top of the document, import basic dependencies: 

```scss
@import '~@alaskaairux/orion-design-tokens/dist/tokens/SCSSVariables';
@import "~@alaskaairux/orion-web-core-style-sheets/dist/breakpoints";
@import '~@alaskaairux/orion-web-core-style-sheets/dist/fonts';
@import "~@alaskaairux/orion-web-core-style-sheets/dist/normalize";
@import "~@alaskaairux/orion-web-core-style-sheets/dist/essentials";
@import "~@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses";
```

For more information about these files, be sure to see [the full API](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/), including the various Utility Selectors currently available. 


## Icon Library

The Icons package contains standard set of SVG icons that can be used with any web project. 

```Javascript
$ npm i @alaskaairux/orion-icons -D
```

Further documentation can be found in the repository's [README](https://github.com/AlaskaAirlines/Icons/blob/master/README.md) file. 

## IE11 support 

Add `"ie 11"` to the production and development `browserslist` configurations in `package.json` to test the app in IE11 during development.

```js
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all",
    "ie 11"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version",
    "ie 11" 
  ]
}
```

### react-app-polyfill

Add the following lines to the top of `index.js`

```js
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
```

This imports the necessary polyfills for using React and other features in legacy browsers. 

### Delete the .cache 

Delete the `.cache` directory in `node_modules`.

Run `$ npm start` in the terminal and view the application in IE11.

