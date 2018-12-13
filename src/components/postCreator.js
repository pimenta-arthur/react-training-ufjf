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
    };

    this.props.onCreate(newPost);
  }

  render() {
    return (
      <div className="card post">
        <div className="card-content">
          <span className="card-title">Novo Post</span>
          <input
            value={this.state.text}
            onChange={event => {
              const value = event.target.value;
              this.setState({ text: value });
            }}
          />
        </div>
        <div className="card-action">
          <button onClick={() => this.createPost()}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default PostCreator;
