import React, {Component} from 'react';
import {Textfit} from 'react-textfit';

import './nav.css';

class Nav extends Component {
  render() {
    return(
      <div className='nav'>
        <Textfit mode='single'>
          <h1><a className='navLink' href='#about'><i>ABOUT.</i></a> <a className='navLink' href='#projects'><i>PROJECTS.</i></a></h1>
        </Textfit>
      </div>
    )
  }
}

export default Nav;