import React, { Component } from 'react';
import Post from './components/post';

const postList = [
  {
    content: 'blahblah',
    timestamp: '16:23',
    author: 'John Snow',
    initialLikes: 0
  },
  {
    content: 'lahlahlah',
    timestamp: '16:23',
    author: 'Arya Stark',
    initialLikes: 1
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>Minha rede social</h1>
        {postList.map((post, i) => {
          return <Post key={i} post={post} />;
        })}
      </div>
    );
  }
}

export default App;
