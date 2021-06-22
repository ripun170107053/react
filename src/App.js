import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import AdminNavbar from './components/AdminNavbar';
import UserNavbar from './components/UserNavabar';

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