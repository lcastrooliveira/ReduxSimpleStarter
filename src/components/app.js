import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        {/*Render a child component*/}
        {this.props.children}
      </div>
    );
  }
}
