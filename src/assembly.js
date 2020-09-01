import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './general.css';

import Nav from './components/nav.js';
import Home from './pages/home/home.js';

class Assembly extends Component {
  render() {
    return(
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    )
  }
}

export default Assembly;
