import React, { Component } from 'react';
import Post from './components/post';
import PostCreator from './components/postCreator';

// const postList = [
//   {
//     content: 'blahblah',
//     timestamp: '16:23',
//     author: 'John Snow',
//     likes: 0
//   },
//   {
//     content: 'lahlahlah',
//     timestamp: '16:23',
//     author: 'Arya Stark',
//     likes: 1
//   }
// ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  insertPost(post) {
    const posts = this.state.posts;
    posts.unshift(post);
    this.setState({posts: posts});

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
    this.setState({posts: posts})

    this.savePosts();
  }

  retrievePosts() {
    let posts = localStorage.getItem('posts');
    if (posts) {
      posts = JSON.parse(posts);
      this.setState({posts: posts});
    }
  }

  componentDidMount() {
    this.retrievePosts();
  }

  render() {
    return (
      <div>
        <h1>Minha rede social</h1>

        <PostCreator onCreate={this.insertPost.bind(this)}></PostCreator>

        {this.state.posts.map((post, i) => {
          return <Post key={post.timestamp} post={post}  onClickLike={this.updatePostById.bind(this, i)}/>;
        })}
      </div>
    );
  }
}

export default App;
