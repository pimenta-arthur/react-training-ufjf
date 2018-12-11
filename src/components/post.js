import React, { Component } from 'react';
import '../post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.initialLikes
    };
  }

  doLike() {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    const post = this.props.post;
    return (
      <div className="card post">
        <div className="card-content">
          <span className="card-title">{post.author}</span>
          <h3>{post.content}</h3>
          <small>{post.timestamp}</small>
          <p>Likes: {this.state.likes}</p>
        </div>
        <div className="card-action">
          {/* <button >like</button> */}
          <i className="small material-icons" onClick={this.doLike.bind(this)}>thumb_up</i>
        </div>
      </div>
    );
  }
}

export default Post;
