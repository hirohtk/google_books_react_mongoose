import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    return (
        <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">React Google Books Search</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Home<i class="material-icons right">home</i></a></li>
        <li><Link to="/saved">Saved<i class="material-icons right">folder_open</i></Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Nav;