import React, { Component } from "react";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const imageDescription = e.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: imageDescription,
      imageLink: imageLink,
    };

    if (imageDescription && imageLink) {
      this.props.addPost(post);
      this.props.onHistory.push("/");
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="link"
              id="link"
              placeholder="Enter a Link"
            />
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter a Description"
            />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
