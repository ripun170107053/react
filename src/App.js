import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import AdminNavbar from './components/AdminNavbar';
import UserNavbar from './components/UserNavabar';
import App2 from './App2';
function App() {
  
  return (
    <div className="wrapper">
      <h1>Stock Market App</h1>
      <li className="nav-item">
              <Link to="/admin">Login as Admin</Link>
              <Link to="/user"> Login as User</Link>
      </li>
      <Route exact path="/admin" component={AdminNavbar} />
      <Route exact path="/user" component={UserNavbar} />
    </div>
    
  );
}
export default App;