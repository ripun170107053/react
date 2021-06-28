import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CC from './CC';
import getAllSE from './getAllSE';
import UserLandingPage from './UserLandingPage';
import UploadFiles from './upload-files.component';
// import updateCompany from "./components/updateCompany";
import createNewUser from './createNewUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCompany from "./createCompany";
import Apps from "./Apps";
import UpdateCompanyComponent from './UpdateCompanyComponent';
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
  
  import { NavDropdown } from 'react-bootstrap';
  import { Form } from 'reactstrap';
  import { FormControl } from 'react-bootstrap';
  import { Button } from 'reactstrap';
  //import { Navbar } from 'react-bootstrap';
const AdminNavbar=()=>
{
    
    return (

            <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Admin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/companies">View All Companies <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>

            </div>
        </nav>
            <Route exact path="/" exact component={UserLandingPage} />
            <Route exact path="/uploadExcel" component={UploadFiles} />
            <Route exact path="/createNewUser" component={createNewUser} />
            <Route exact path="/createCompany" component={CreateCompany} />
            {/* <Route exact path="/updateCompany" component={updateCompany} /> */}
            <Route exact path="/viewAllCompany" component={Apps}/>
            <Route exact path="/listStockExchanges" component={getAllSE}/>
            {/* <Route exact path="/companies" component={CreateCompany} /> */}
            <Route exact path="/companyComparison" component={CC}/>
            <Route path = "/company/2/update" component = {UpdateCompanyComponent}/>

        </Router>
        

    );
}
export default AdminNavbar;
