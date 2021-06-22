import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import UserNavbar from './components/Navbars/UserNavbar';
// import AdminNavbar from "./components/Navbars/AdminNavbar";
 import CreateCompany from "./components/createCompany";
// import Companies from './components/companyComponents/allCompanies';
import UserLandingPage from "./components/UserLandingPage.js";
// import AdminLandingPage from './components/users/AdminLandingPage';
import UploadFiles from "./components/upload-files.component";
// import Signup from './components/forms/Signup';
// import Exchanges from './components/companyComponents/allExchanges';
// import AddStockExchange from './components/forms/AddStockExchange';
// import AddNewIPO from './components/forms/AddNewIPO';
import Apps from "./components/Apps";
import 'bootstrap/dist/css/bootstrap.min.css';
import updateCompany from "./components/updateCompany";
import createNewUser from './components/createNewUser';
import getAllSE from './components/getAllSE';
import CC from './components/CC';
import AdminNavbar from './components/AdminNavbar';
import UserNavbar from './components/UserNavbar';
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
    return(
      <Router>
      <div className="table">
      <h1>Stock Charting App</h1>
      {this.state.admin ? <AdminNavbar/> : <UserNavbar/>}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/createNewUser">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/uploadExcel">Import Data</Link>
            </li>
            <li className="nav-item">
              <Link to="/listStockExchanges">List Stock Exchanges</Link>
            </li>
            <li className="nav-item">
              <Link to="/companyComparison">Compare Companies</Link>
            </li>
            <UncontrolledDropdown>
              <DropdownToggle>
                Manage Companies
              </DropdownToggle>
              <DropdownMenu top >
                <DropdownItem > <a href="https://glacial-brook-60163.herokuapp.com/companies/" target="_blank" >View All Companies</a> </DropdownItem>
                <DropdownItem ><Link to="/createCompany" > Add a new Company </Link></DropdownItem>
                <DropdownItem ><Link to="/updateCompany" > Update Existing Company </Link></DropdownItem>
                <DropdownItem ><Link to="/viewAllCompany" > View All </Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ul>
        </nav> */}


      <switch>
        <Route exact path="/" exact component={UserLandingPage} />
        <Route exact path="/uploadExcel" component={UploadFiles} />
        <Route exact path="/createNewUser" component={createNewUser} />
        <Route exact path="/createCompany" component={CreateCompany} />
        <Route exact path="/updateCompany" component={updateCompany} />
        <Route exact path="/viewAllCompany" component={Apps}/>
        <Route exact path="/listStockExchanges" component={getAllSE}/>
        {/* <Route exact path="/companies" component={CreateCompany} /> */}
        <Route exact path="/companyComparison" component={CC}/>
        </switch>
      </div>
</Router>
      
    )
  }

}
export default App;
