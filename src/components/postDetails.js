import React, { Component } from 'react';
import Post from './post';

class PostDetails extends Component {
  constructor() {
    super();
    this.state = {
      post: null
    };
  }

  componentDidMount() {
    console.log('bla');
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts
      .filter(post => {
        return post.timestamp == this.props.match.params.timestamp;
      })
      .pop();

    this.setState({ post });
  }
  render() {
    console.log(this.state.post);
    if (this.state.post === null) {
      return <div>Loading...</div>;
    } else {
      return <Post post={this.state.post} />;
    }
  }
}

export default PostDetails;
