import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container ">
        <form onSubmit={this.handleSubmit} className="purple">
          <h5 className="grey-text">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="purple lighten-2 z-depth-1">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
