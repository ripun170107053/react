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
const AdminNavbar=()=>
{

    return (
        <Router>
            <div>
                {/*<nav class="navbar navbar-expand-lg navbar-light bg-darknp">*/}
                    <table class="table">
                        <td className="nav-item">
                            <UncontrolledDropdown>
                                <DropdownToggle>
                                    Import Data
                                </DropdownToggle>
                                <DropdownMenu top >
                                    <DropdownItem ><Link to="/uploadExcel">  Import Data </Link></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </td>
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/createNewUser">  Create New User </Link>*/}
                        {/*</li>*/}
                        {/*<p>*/}

                        {/*</p>*/}

                        {/*<p></p>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/listStockExchanges"> List Stock Exchanges </Link>*/}
                        {/*</li>*/}
                        {/*<p></p>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/companyComparison">  Compare Companies </Link>*/}
                        {/*</li>*/}
                        {/*<p></p>*/}
                        <td>
                        <UncontrolledDropdown>
                            <DropdownToggle>
                                Manage Companies
                            </DropdownToggle>
                            <DropdownMenu top >
                                {/*//<DropdownItem > <a href="https://glacial-brook-60163.herokuapp.com/companies/" target="_blank" >View All Companies</a> </DropdownItem>*/}
                                <DropdownItem ><Link to="/createCompany" >  Add a new Company </Link></DropdownItem>
                                {/* <DropdownItem ><Link to="/updateCompany" > Update Existing Company </Link></DropdownItem> */}
                                {/*//<DropdownItem ><Link to="/viewAllCompany" >  View All </Link></DropdownItem>*/}
                                <DropdownItem ><Link to="/company/2/update" >  Update Company </Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </td>
                        <td>
                            <UncontrolledDropdown>
                                <DropdownToggle>
                                    Manage Exchange
                                </DropdownToggle>
                                <DropdownMenu top >
                                    {/*<DropdownItem > <a href="https://glacial-brook-60163.herokuapp.com/companies/" target="_blank" >View All Companies</a> </DropdownItem>*/}
                                    <DropdownItem ><Link to="/listStockExchanges" >  List Existing Stock Exchange </Link></DropdownItem>
                                    {/* <DropdownItem ><Link to="/updateCompany" > Update Existing Company </Link></DropdownItem> */}
                                    <DropdownItem ><Link to="/viewAllCompany" > Create New Stock Exchange </Link></DropdownItem>
                                    {/*<DropdownItem ><Link to="/company/2/update" >  Update Company </Link></DropdownItem>*/}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </td>
                        <td>
                            <UncontrolledDropdown>
                                <DropdownToggle>
                                    Update IPO Details
                                </DropdownToggle>
                                <DropdownMenu top >
                                    {/*<DropdownItem > <a href="https://glacial-brook-60163.herokuapp.com/companies/" target="_blank" >View All Companies</a> </DropdownItem>*/}
                                    <DropdownItem ><Link to="/createCompany" >  Add a new IPO </Link></DropdownItem>
                                    {/* <DropdownItem ><Link to="/updateCompany" > Update Existing Company </Link></DropdownItem> */}
                                    <DropdownItem ><Link to="/viewAllCompany" >  View All IPOs </Link></DropdownItem>
                                    {/*<DropdownItem ><Link to="/company/2/update" >  Update Company </Link></DropdownItem>*/}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </td>
                    </table>
                {/*</nav>*/}

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
            </div>
        </Router>
    );
}
export default AdminNavbar;
