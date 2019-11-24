import React, { Component } from "react";

class CreatePost extends Component {
  state = {
    title: "",
    content: ""
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
      <div className="container">
        <h4>Create a new post</h4>
        <form onSubmit={this.handleSubmit} className="purple">
          <div className="input-field ">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="materialize-textarea "
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="purple  lighten-2 z-depth-0">Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
