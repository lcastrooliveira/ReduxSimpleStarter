//{} just pull out Component from react. Very similart to java's static import
import React, {Component} from 'react';

//Functional component: components made out of functions.

//Class component: component that are aware of itself and more complex.
//It is a javascript object with properties and methods

//Gives access of all functionality from React.Component class
class SearchBar extends Component {
    //every class based component MUST have defined a render() method
    render() {
        //arrow functions clean up the code a lot
        return <input onChange={event => console.log(event.target.value) }/>;
    }
}


export default SearchBar;