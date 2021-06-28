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
  import { Form } from 'react-bootstrap';
  import { FormControl } from 'react-bootstrap';
  import { Button } from 'react-bootstrap';
  import { Navbar } from 'react-bootstrap';
const AdminNavbar=()=>
{
    
    return (
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/createNewUser">Create New User</Nav.Link>
            <Nav.Link href="/uploadExcel">Upload Excel</Nav.Link>
            <NavDropdown title="Manage Companies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/companyComparison">Companre Companies</NavDropdown.Item>
              <NavDropdown.Item href="/viewAllCompany">View All Companies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

        // <Router>
        // <div>
        //  <nav class="navbar navbar-expand-lg navbar-light bg-darknp">
        //   <ul>
        //     <li className="nav-item">
        //       <Link to="/createNewUser">  Create New User </Link>
        //     </li>
        //     <p>

        //     </p>
        //     <li className="nav-item">
        //       <Link to="/uploadExcel">  Import Data </Link>
        //     </li>
        //     <p></p>
        //     <li className="nav-item">
        //       <Link to="/listStockExchanges"> List Stock Exchanges </Link>
        //     </li>
        //     <p></p>
        //     <li className="nav-item">
        //       <Link to="/companyComparison">  Compare Companies </Link>
        //     </li>
        //     <p></p>
        //     <UncontrolledDropdown>
        //       <DropdownToggle>
        //         Manage Companies
        //       </DropdownToggle>
        //       <DropdownMenu top >
        //         <DropdownItem > <a href="https://glacial-brook-60163.herokuapp.com/companies/" target="_blank" >View All Companies</a> </DropdownItem>
        //         <DropdownItem ><Link to="/createCompany" >  Add a new Company </Link></DropdownItem>
        //         {/* <DropdownItem ><Link to="/updateCompany" > Update Existing Company </Link></DropdownItem> */}
        //         <DropdownItem ><Link to="/viewAllCompany" >  View All </Link></DropdownItem>
        //         <DropdownItem ><Link to="/company/2/update" >  Update Company </Link></DropdownItem>
        //       </DropdownMenu>
        //     </UncontrolledDropdown>
        //   </ul>
        // </nav> 
        
        // <Route exact path="/" exact component={UserLandingPage} />
        // <Route exact path="/uploadExcel" component={UploadFiles} />
        // <Route exact path="/createNewUser" component={createNewUser} />
        // <Route exact path="/createCompany" component={CreateCompany} />
        // {/* <Route exact path="/updateCompany" component={updateCompany} /> */}
        // <Route exact path="/viewAllCompany" component={Apps}/>
        // <Route exact path="/listStockExchanges" component={getAllSE}/>
        // {/* <Route exact path="/companies" component={CreateCompany} /> */}
        // <Route exact path="/companyComparison" component={CC}/>
        // <Route path = "/company/2/update" component = {UpdateCompanyComponent}/>
        // </div>
        // </Router>
    );
}
export default AdminNavbar;