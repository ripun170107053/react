import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/createNewUser">Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/uploadExcel">Import Data</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/listStockExchanges">List Stock Exchanges</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/companyComparison">Compare Companies</Link>
            </li> */}
            {/* <UncontrolledDropdown>
              <DropdownToggle>
                Manage Companies
              </DropdownToggle>
              <DropdownMenu top >
                <DropdownItem > <a href="https://glacial-brook-60163.herokuapp.com/companies/" target="_blank" >View All Companies</a> </DropdownItem>
                <DropdownItem ><Link to="/createCompany" > Add a new Company </Link></DropdownItem>
                <DropdownItem ><Link to="/updateCompany" > Update Existing Company </Link></DropdownItem>
                <DropdownItem ><Link to="/viewAllCompany" > View All </Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </ul>
        </nav> 
    );
}
export default UserNavbar;