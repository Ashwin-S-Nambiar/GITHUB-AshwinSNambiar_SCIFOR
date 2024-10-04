import React, { Component } from 'react';
import Component2 from './Component2';

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lname: '',
      displayName: '',
      displayLname: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    this.setState({
      displayName: this.state.name,
      displayLname: this.state.lname,
    });
  }

  render() {
    return (
      <div className="component1-container">
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={this.state.lname}
          onChange={this.handleInputChange}
          className="input-field"
        />
        <button onClick={this.handleSubmit} className="submit-button">
          Submit
        </button>

        <Component2 name={this.state.displayName} lname={this.state.displayLname} />
      </div>
    );
  }
}

export default Component1;
