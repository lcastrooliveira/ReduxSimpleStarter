//{} just pull out Component from react. Very similart to java's static import
import React, {Component} from 'react';

//Functional component: components made out of functions.

//Class component: component that are aware of itself and more complex.
//It is a javascript object with properties and methods

//Gives access of all functionality from React.Component class
class SearchBar extends Component {
    
    //All Class based components hava a constructor function. It is the first and
    //only function called automatically when an instance of the component is created.
    //It is used to setup, intialize variables and states.
    constructor(props) {
        super(props);
        
        //Defines a state of the object, whenever it changes, the render function of
        //the component and all of its children are called again
        //Function based components don't have a state.
        //Only inside the constructor function whe change the state object like this.
        this.state = {term: 'Starting Value'};
    }
    
    //every class based component MUST have defined a render() method
    render() {
        //arrow functions clean up the code a lot
        //this.state.term = event.target.value -> BAD!!!
        return (
            <div>
                <input value={this.state.term}
                onChange={event => this.setState({term: event.target.value}) }/>
            </div>
        );
    }
}


export default SearchBar;