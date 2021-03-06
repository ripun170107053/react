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
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            {/* <li className="nav-item">
              <Link to="/createNewUser">Home</Link>
            </li> */}
            
            <li className="nav-item">
              <Link to="/listStockExchanges"> List Stock Exchanges </Link>
            </li>
            <p></p>
            <li className="nav-item">
              <Link to="/companyComparison">  Compare Companies </Link>
            </li>
            <li className="nav-item">
            <a href="https://glacial-brook-60163.herokuapp.com/IPO/allIPO" target="_blank" >   IPO Details </a>
            </li>
            <p>

            </p>
            <li className="nav-item">
            <a href="https://glacial-brook-60163.herokuapp.com/companies/" target="_blank" >   View All Companies </a>
            </li>
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