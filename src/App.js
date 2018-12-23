import React, { Component } from 'react';
import Feed from './components/Feed';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PostDetails from './components/postDetails';
import './App.css';
import {NavItem, Navbar} from 'react-materialize';


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
        {/* <ul id='dropdown1' className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>  */}
        <Navbar brand='logo' right>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
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
