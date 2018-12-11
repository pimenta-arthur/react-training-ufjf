import React, { Component } from 'react';
import '../post.css';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
  }

  doLike() {
      this.setState({ likes: this.state.likes +1 })
  }

  render() {
    return (
      <div className="card post">
        <div className="card-content">
          <span className="card-title">{this.props.text}</span>
          <small>{this.props.time}</small>
          <p>Likes: {this.state.likes}</p>
        </div>
        <div className="card-action">
          <button
            onClick={this.doLike.bind(this)}
          >
            Like
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
