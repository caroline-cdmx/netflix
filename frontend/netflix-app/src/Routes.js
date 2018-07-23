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
import Movie from './components/movie/Movie';
import checkToken from './resolvers/checkToken';

class Routes extends Component {
  
  render () {
    
    const PrivateRoute = ({component:Component,...rest}) => (
      <Route {...rest} render = {(props)=>(
        checkToken () === true ? <Component {...props}/> : <Redirect to="/login"/> 
        )}/>
    )
    return (
      <Router>
        <main>
          <Nav/>
          <Route exact path='/' component ={Home}/>
          <Route exact path='/login' component ={Login}/>
          <Route exact path='/signup' component ={Signup}/>
          <PrivateRoute exact path='/logout' component= {Logout}/>
          <PrivateRoute exact path='/movies' component={Movies}/>
          <PrivateRoute exact path=':movie/:id' component={Movie}/>
        </main>
      </Router>

    )
  }
}

export default Routes; 