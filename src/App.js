import React, { useState } from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <Router>
      <div className="wrapper">
        <h1>Stock Market App</h1>
        <li className="nav-item">
                <Link to="/admin">Login as Admin</Link>
                <Link to="/user"> Login as User</Link>
        </li>
        <Route exact path="/admin" component={AdminNavbar} />
        <Route exact path="/user" component={UserNavbar} />
      </div>
      </Router>
      
    );
  }
  
}
export default App;