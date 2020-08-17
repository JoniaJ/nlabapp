import React, {Component} from 'react'
import logo from './logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom';
import Home from './Home';
import About from './About';

class Header extends Component {
    render() {
      return (
          <Router>
  <div className="header">
    <div className="logo">
      <img src={logo} alt="NLab"/>
      <h1>NLAB INNOVATION ACADEMY</h1>
      </div>
  <div className="nav">
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT NLAB</Link>
    <Link to="/services">OUR SERVICES</Link>
    <Link to="/contact">CONTACT US</Link>
  </div>
  </div>

  <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/about">
          <About/>
      </Route>
  </Switch>

  </Router>
  );
  }
  }
  export default Header;