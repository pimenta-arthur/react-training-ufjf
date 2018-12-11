import React, { Component } from 'react';
import Post from './components/post';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Minha rede social</h1>
        <Post text={'Texto do primeiro post'} time={'13:00'} />
        <Post text={'Texto do segundo post'} time={'15:00'} />
      </div>
    );
  }
}

export default App;
