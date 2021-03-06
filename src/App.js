import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import './App.css';

import AdminNavbar from './components/AdminNavbar';
import UserNavbar from './components/UserNavbar';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      admin: false,
    };
  }
  render()
  {
    return (
     <>
     
      <Switch>

      </Switch>
      <Router>
      <div className="wrapper">
        <h1>Stock Market App</h1>
        <li className="nav-item">
                <Link to="/admin" >Login as Admin</Link>
                </li>
                <p></p>
               <li> <Link to="/user" > Login as User</Link>
               </li>
        
        <Route exact path="/admin" component={AdminNavbar} />
        <Route exact path="/user" component={UserNavbar} />
      </div>
      </Router>
      </>
    );
  }
  
}
export default App;
