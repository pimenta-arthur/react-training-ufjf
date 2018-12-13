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
      <div className="row">
        <div className="col l4 push-l8 col s8">
          <div
            className="valign-wrapper"
            style={{ margin: '.5rem 0 1rem 0', padding: '24px' }}
          >
            <img
              width="50px"
              src="https://s-media-cache-ak0.pinimg.com/originals/0f/f3/1b/0ff31b995db77283d1041e75d4cec215.jpg"
              alt=""
              className="circle responsive-img"
            />
            <span className="black-text" style={{marginLeft: '24px'}}>User name here</span>
          </div>
        </div>

        <div className="col l8 pull-l4 col s12">
          <PostCreator onCreate={this.insertPost.bind(this)} />

          {this.state.posts.map((post, i) => {
            return (
              <Post
                key={post.timestamp}
                post={post}
                onClickPost={() => this.navigateToPost(post)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Feed;
