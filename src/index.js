import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import * as keys from './key';
import SearchBar from './components/search_bar';

const API_KEY = keys.API_KEY;

YTSearch({key: API_KEY, term: 'surfboards'},function(data) {
    console.log(data);
});

//Create a new component. This component should produce some HTML.
//const is a keyword in ES6 that is equal a final variable in java, quite similar
// () => replaces function()

//Rule of thumb: Always one components per file
const App = () => {
    //JSX is a dialect of JS that allows to type HTML inside JS, but the transpiler
    //will convert to ES5 javascript when providing to the browser.
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));