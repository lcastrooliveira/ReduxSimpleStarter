import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import * as keys from './key';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'

const API_KEY = keys.API_KEY;

//Create a new component. This component should produce some HTML.
//const is a keyword in ES6 that is equal a final variable in java, quite similar
// () => replaces function()

//Rule of thumb: Always one components per file
class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
            //equals to this.setState({videos: videos});
        });
    }
    
    //JSX is a dialect of JS that allows to type HTML inside JS, but the transpiler
    //will convert to ES5 javascript when providing to the browser.
    render() {
        return (
        <div>
            <SearchBar />
            //send properties from parent component to VideoList component
            <VideoList videos={this.state.videos} />
        </div>
        );    
    }
}

//Take this component's generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));