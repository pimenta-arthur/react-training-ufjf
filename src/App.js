import React, { Component } from 'react';
import Feed from './components/Feed';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PostDetails from './components/postDetails';
import './App.css';

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
        <nav>
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo"><i className="material-icons">cloud</i>｜ Minha rede social</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav> 
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path='/post/:timestamp' component={PostDetails}></Route>
              <Route exact path="/" component={Feed} />
              <Route path="*" component={this.notFoundComponent} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
