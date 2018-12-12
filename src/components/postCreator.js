import React, { Component } from 'react';

class PostCreator extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  createPost() {
      const newPost = {
        content: this.state.text,
        timestamp: new Date().getTime(),
        author: 'New Author',
        likes: 0
      }

      this.props.onCreate(newPost);
  }

  render() {
    return (
      <div>
        <h3>Novo Post</h3>
        <input value={this.state.text} onChange={(event) => {
            const value = event.target.value;
            this.setState({text: value});
        }} />
        <button onClick={() => this.createPost()}>Enviar</button>
      </div>
    );
  }
}

export default PostCreator;