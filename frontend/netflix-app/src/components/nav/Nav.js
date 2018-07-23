import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import payload from '../../resolvers/payload';
import checkToken from '../../resolvers/checkToken';


class Nav extends Component {
  constructor() {
    super();
  }

  chargeProfile = () => {
    if(checkToken()){
      const  token = localStorage.getItem('token')
      let pl = payload(token);
      return (
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className="nav-link" to='/profil'>Hola {pl.email}  !!</Link>
          </li>
          <li className='nav-item'>
          <Link className='nav-link' to='/logout'>Logout</Link>
          </li>
        </ul>
      )  
    }else {
      return (
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
          </li>
      
        </ul> 
      )
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Netflix</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {this.chargeProfile()}
        </div>
      </nav>
    )
  }
}

export default Nav;