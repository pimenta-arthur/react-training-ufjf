import React, { Component } from 'react';
import Post from './post';
import PostCreator from './postCreator';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  insertPost(post) {
    const posts = this.state.posts;
    posts.unshift(post);
    this.setState({ posts: posts });

    this.savePosts();
  }

  savePosts() {
    let posts = this.state.posts;
    posts = JSON.stringify(posts);
    localStorage.setItem('posts', posts);
  }

  updatePostById(i, likes) {
    let posts = this.state.posts;
    posts[i]['likes'] = likes;
    this.setState({ posts: posts });

    this.savePosts();
  }

  retrievePosts() {
    let posts = localStorage.getItem('posts');
    if (posts) {
      posts = JSON.parse(posts);
      this.setState({ posts: posts });
    }
  }

  componentDidMount() {
    this.retrievePosts();
  }

  navigateToPost(post) {
    this.props.history.push('post/' + post.timestamp);
  }

  render() {
    return (
      <div>
        <h1>Minha rede social</h1>

        <PostCreator onCreate={this.insertPost.bind(this)} />

        {this.state.posts.map((post, i) => {
          return (
            <Post
              key={post.timestamp}
              post={post}
              onClickLike={this.updatePostById.bind(this, i)}
              onClickPost={() => this.navigateToPost(post)}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
