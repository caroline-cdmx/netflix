import {
  BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom';
import React, { Component } from 'react';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Logout from './components/logout/Logout';
import Movies from './components/movies/Movies';
import checkToken from './resolvers/checkToken';

class Routes extends Component {

  PrivateRoute = ({component:Component,...rest}) => {
    <Route {...rest} render = {()=>(
      checkToken () === true ? <Component {...props}/> : <Redirect to="/login"/> 
      )}/>
  }
  
  render () {
    return (
      <Router>
        <main>
          <Nav/>
          <Route exact path='/' component ={Home}/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/signup' component ={Signup}/>
          <Route exact path='/logout' component= {Logout}/>
          <Route exact path='/movies' component= {Movies}/>
        </main>
      </Router>

    )
  }
}

export default Routes; 