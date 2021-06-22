import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CC from './CC';
import getAllSE from './getAllSE';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
const UserNavbar=()=>
{
    //const[isOpen,setIsOpen] = useState(false);
    //const toggle= () => setIsOpen(!isOpen);
    return (
        <Router>
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to="/createNewUser">Home</Link>
            </li> */}
            
            <li className="nav-item">
              <Link to="/listStockExchanges">List Stock Exchanges</Link>
            </li>
            <p></p>
            <li className="nav-item">
              <Link to="/companyComparison">Compare Companies</Link>
            </li>
            <p></p>
          </ul>
        </nav>
        
        {/* <Route exact path="/" exact component={UserLandingPage} />
        <Route exact path="/uploadExcel" component={UploadFiles} /> */}
        {/* <Route exact path="/createNewUser" component={createNewUser} /> */}
        {/* <Route exact path="/createCompany" component={CreateCompany} />
        <Route exact path="/updateCompany" component={updateCompany} /> */}
        {/* <Route exact path="/viewAllCompany" component={Apps}/> */}
        <Route exact path="/listStockExchanges" component={getAllSE}/>
        {/* <Route exact path="/companies" component={CreateCompany} /> */}
        <Route exact path="/companyComparison" component={CC}/>
        
        </div>
        </Router>
    );
}
export default UserNavbar;