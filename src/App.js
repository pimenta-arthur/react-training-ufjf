import React, { Component } from 'react';
import Feed from './components/Feed';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PostDetails from './components/postDetails';

class App extends Component {

  notFoundComponent() {
    return(
      <div>
        Página não encontrada
      </div>
    );
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/post/:timestamp' component={PostDetails}></Route>
            <Route exact path="/" component={Feed} />
            <Route path="*" component={this.notFoundComponent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
