# Web Component React Demo Setup

An example React App with Auro Components integrated. This app runs and works in all Alaska-supported browsers. Explore the project source to see the Auro Components being used in a React environment.

Below are instructions for adding Auro compatibility to your React application. These instructions are intended for projects that were bootstrapped with Create React App. They are written from the perspective of a newly generated project, but it should be clear where to add these lines in an existing project. If your project has ejected or is using a custom Webpack config, see the [Vanilla JS demo app and instructions](https://github.com/AlaskaAirlines/OrionJavascriptDemo).

## Setting up your React app to use Auro Web Components
The following steps will let you start using Web Components in your React application across all supported browsers.

1. Install the necessary packages by running `npm install --save-dev @alaskaairux/ods-button @alaskaairux/orion-design-tokens focus-visible` in a terminal. `@alaskaairux/ods-button` is the button component itself. `@alaskaairux/orion-design-tokens` and `focus-visible` are required dependencies for tokens and focus styles, respectively.

1. Add a reference to `webcomponents-loader.js` in the head of `public\index.html`. This will detect whether the user's browser supports Web Components and will polyfill any required features. This example loads the polyfills from a CDN, but you can serve them with your application if you want. Make sure you include the `defer` attribute -- conflicting polyfills may prevent the app from loading otherwise.

    ```html
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-loader.js" defer></script>
    ```

1. Add a file called `webcomponents.js` in the `src` directory. You will add any additional Web Component imports here. After you import a component here, you can use it throughout the rest of your application. For now, just import `auro-button`.

    ```js
    import '@alaskaairux/ods-button/dist/auro-button';
    ```

1. Next, update `index.js` to import the Auro Components once the polyfills have loaded. This guarantees that Web Components are not defined until the browser polyfills are ready.

    ```js
    import * as serviceWorker from './serviceWorker';

    // add this line
    window.addEventListener('WebComponentsReady', () => {
        return import('./webcomponents');
    });

    ReactDOM.render(<App />, document.getElementById('root'));
    ```

1. In `App.js`, import the Auro Design Tokens from the npm package. The design tokens need to be available for the component to render.
    ```js
    import React from 'react';
    import './App.css';
    import '@alaskaairux/orion-design-tokens/dist/tokens/CSSCustomProperties.css'; // add this line
    ```

1. Also in `App.js`, add a reference to `auro-button`.
    ```js
    render() {
        return (
            <div className="App">
                <auro-button onClick={() => alert('clicked!')}>Click Me</auro-button>
            </div>
        )
    }
    ```

1. Run the application with `npm start`. The button should render and trigger an alert when clicked.

## Setting up your React app to work with IE11
Some additional steps must be taken to get your React app working in IE11. 

1. Add `"ie 11"` to the production and development browserslist configurations in `package.json`. This will let you test your app in IE11 during development.

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

1. Add the following lines to the top of `index.js`
    ```js
    import 'react-app-polyfill/ie11';
    import 'react-app-polyfill/stable';
    ```
    These lines import the polyfills necessary for using React and other modern Javascript features in legacy browers.

1. Delete the `.cache` directory in `node_modules`.

You should now be able to run the app in IE11 without errors. Run `npm start` in the terminal and view the application in IE11.

## Importing WC Style Sheets 

WC Style Sheets (WCSS) is a responsive, mobile-first collection of styles and tools designed to make it quick and simple for developers to create web experiences using the Auro Design Language.

This resource is built using Sass, so you will need to install Sass in your project. 

```
$ npm i node-sass
```

Also install the WC Style Sheets.

```javascript
$ npm i @alaskaairux/orion-web-core-style-sheets
```

After installing `node-sass`, rename `index.css` to `index.scss` and rename the import in `index.js`.  

### Importing the stylesheets

We will place our global stylesheet imports into `index.scss`. 

At the top of the document, first import the Sass version of the design tokens:

```scss
@import '~@alaskaairux/orion-design-tokens/dist/tokens/SCSSVariables';
```

The Sass variables need to be available in order to import the other WC Style Sheets.

Next, let's import the breakpoints.

```scss
@import "~@alaskaairux/orion-web-core-style-sheets/dist/breakpoints";
```

This is a functional utility file that lists all the different [pre-defined mobile-first breakpoints](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/#responsive-mixin). 

Next, let's import the `@font-face` styles. 

```scss
@import '~@alaskaairux/orion-web-core-style-sheets/dist/fonts';
```

This file contains all the `@font` rules for using the approved Auro fonts.

Next, let's import the normalize styles:

```scss
@import "~@alaskaairux/orion-web-core-style-sheets/dist/normalize";
```

This file sets a normalization across all browsers. It's like a reset, but not as harsh. 

Last, import the essentials file:

```scss
@import "~@alaskaairux/orion-web-core-style-sheets/dist/essentials";
```

The role of this file is to establish a shared baseline CSS between projects and browsers alike. 

If interested, there is a growing standard of utility selectors that can be used with projects as well.

```scss
@import "~@alaskaairux/orion-web-core-style-sheets/dist/utilityClasses";
```

[View here](https://alaskaairlines.github.io/OrionWebCoreStyleSheets/) to see the entire WCSS API, including the various Utility Selectors currently available. 


## Icon Library

The orion-icons package contains standard set of SVG icons that can be used with any web project. 

```Javascript
$ npm i @alaskaairux/orion-icons
```

Further documentation can be found in the repository's [README](https://github.com/AlaskaAirlines/OrionIcons/blob/master/README.md) file. 
