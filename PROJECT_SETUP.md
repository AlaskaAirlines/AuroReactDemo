# OrionReactDemo
An example React App with Orion Components integrated. This app runs and works in all Alaska-supported browsers. Below are instructions for adding Orion-compatibility to your React application. These instructions are intended for projects that were bootstrapped with Create React App. They are written from the perspective of a newly generated project, but it should be clear where to add these lines in an existing project. If your project has ejected or is using a custom Webpack config, see the Vanilla JS demo app and instructions.

## Setting up your React app to use Orion Web Components
The following steps will let you start using Web Components in your React application across all supported browsers.

1. Install the necessary packages by running `npm install --save-dev @alaskaairux/ods-button @alaskaairux/orion-design-tokens focus-visible` in a terminal.

1. Add a reference to `webcomponents-loader.js` in the head of `index.html`. This will detect whether the user's browser supports Web Components and will polyfill any required features. This example loads the polyfills from a CDN, but you can serve them with your application if you want. Make sure you include the `defer` attribute -- conflicting polyfills may prevent the app from loading otherwise.

    ```html
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-loader.js" defer></script>
    ```

1. Next, update `index.js` to import the Orion Components once the polyfills have loaded.

    ```js
    import * as serviceWorker from './serviceWorker';

    window.addEventListener('WebComponentsReady', () => {
        return import('./webcomponents');
    });

    ReactDOM.render(<App />, document.getElementById('root'));
    ```

1. Add a file called `webcomponents.js` in the `src` directory. You will add any additional Web Component imports here. This guarantees that Web Components are not defined until the browser polyfills are ready. For now, just import `ods-button`

    ```js
    import '@alaskaairux/ods-button';
    ```

1. In `App.js`, import the Orion Design Tokens from the npm package. The design tokens need to be available for the component to render.
    ```js
    import React from 'react';
    import './App.css';
    import '@alaskaairux/orion-design-tokens/dist/tokens/CSSTokenProperties.css'; // add this line
    ```

1. Also in `App.js`, add a reference to `ods-button`.
    ```js
    render() {
        return (
            <div className="App">
                <ods-button onClick={() => alert('clicked!')}>Click Me</ods-button>
            </div>
        )
    }
    ```

1. Run the application. The button should render and trigger an alert when clicked.

## Setting up your React app to work with IE11
Some additional steps must be taken to get your React app working in IE11. 

1. Add `"ie 11"` to the development browserslist configuration in `package.json`. This will let you test your app in IE11 during development.

1. Add the following lines to the top of `index.js`
    ```js
    import 'react-app-polyfill/ie11';
    import 'react-app-polyfill/stable';
    ```
These import the polyfills necessary for using React and other modern Javascript features in legacy browers.

You should now be able to run the app in IE11 without errors. Run `npm start` in the terminal and view the application in IE11.