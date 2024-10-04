import React, { Component } from 'react';

class Component2 extends Component {
  render() {
    return (
      <div className="component2-container">
        <p className="component2-text">First Name: {this.props.name}</p>
        <p className="component2-text">Last Name: {this.props.lname}</p>
      </div>
    );
  }
}

export default Component2;
