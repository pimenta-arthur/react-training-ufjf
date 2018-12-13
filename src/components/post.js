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
    // const updatedLikes = this.state.likes + 1
    this.setState({ likes: this.state.likes + 1 }, () => {
      this.saveUpdatedPosts();
    });
  }

  saveUpdatedPosts() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const updatedPosts = posts.map(post => {
      if (post.timestamp === this.props.post.timestamp) {
        post.likes = this.state.likes;
      }
      return post;
    });

    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  }

  render() {
    const post = this.props.post;
    return (
      <div className="card post hoverable">
        <div className="card-image  waves-effect waves-block waves-light activator">
          <img
            className="activator"
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
          />
          <div className="card-title">
            {post.author}
            <span id="likes-count">{this.state.likes} likes</span>
          </div>
        </div>
        <div className="card-content" onClick={() => this.props.onClickPost()}>
          <p>{post.content}</p>
          <small>{new Date(post.timestamp).toDateString()}</small>
        </div>
        <div className="card-action valign-wrapper">
          <i
            className="small material-icons"
            onClick={this.doLike.bind(this)}
            style={{ cursor: 'pointer' }}
          >
            thumb_up
          </i>
        </div>
      </div>
    );
  }
}

export default Post;
