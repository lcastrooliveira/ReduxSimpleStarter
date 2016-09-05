import React from 'react';
import ReactDOM from 'react-dom';
import * as keys from './key';

//Create a new component. This component should produce some HTML.
//const is a keyword in ES6 that is equal a final variable in java, quite similar
// () => replaces function()

//Rule of thumb: Always one components per file
const App = () => {
    //JSX is a dialect of JS that allows to type HTML inside JS, but the transpiler
    //will convert to ES5 javascript when providing to the browser.
    return <div>Hi!</div>;
}

//Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));