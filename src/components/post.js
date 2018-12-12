import React, { Component } from 'react';
import '../post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  doLike() {
    const updatedLikes = this.state.likes + 1
    this.setState({ likes: updatedLikes });

    this.props.onClickLike(updatedLikes);
  }

  render() {
    const post = this.props.post;
    return (
      <div className="card post">
        <div className="card-content" onClick={() => this.props.onClickPost()} style={{cursor: 'pointer'}}>
          <span className="card-title">{post.author}</span>
          <h3>{post.content}</h3>
          <small>{post.timestamp}</small>
          <p>Likes: {this.state.likes}</p>
        </div>
        <div className="card-action">
          {/* <button >like</button> */}
          <i className="small material-icons" onClick={this.doLike.bind(this)} style={{cursor: 'pointer'}}>thumb_up</i>
        </div>
      </div>
    );
  }
}

export default Post;
