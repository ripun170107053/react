import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';
import AdminNavbar from "../components/AdminNavbar";
import UserLandingPage from "../components/UserLandingPage";
import UploadFiles from "../components/upload-files.component";
import createNewUser from "../components/createNewUser";
import CreateCompany from "../components/createCompany";
import Apps from "../components/Apps";
import getAllSE from "../components/getAllSE";
import CC from "../components/CC";
import IpoForm from "../components/IpoForm";
import UpdateCompanyComponent from "../components/UpdateCompanyComponent";
import CompanyForm from '../components/CompanyForm';
import AddCompany from '../components/AddCompany';
import CompanyList from '../components/CompanyList';
import EditCompany from '../components/EditCompany';
import CompanyContext from '../context/CompanyContext';
const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  const [companies, setCompanies] = useLocalStorage('companies', []);

  return (
    <BrowserRouter>
      <div>
        <AdminNavbar />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/allIPO" exact={true} />
              <Route component={AddBook} path="/addIPO" />
              <Route component={EditBook} path="/edit/:id" />
              {/* <Route component={CompanyList} path="/allC" exact={true} /> */}
              {/*<Route component={() => <Redirect to="/" />} />*/}
              {/*<Route exact path="/" exact component={UserLandingPage} />*/}
              <Route exact path="/uploadExcel" component={UploadFiles} />
              <Route exact path="/createNewUser" component={createNewUser} />
              {/* <Route exact path="/createCompany" component={AddCompany} /> */}
              {/*/!* <Route exact path="/updateCompany" component={updateCompany} /> *!/*/}
              {/* <Route exact path="/viewAllCompanies" component={Apps}/>
              <Route exact path="/listStockExchanges" component={getAllSE}/> */}
              {/*/!* <Route exact path="/companies" component={CreateCompany} /> *!/*/}
              {/* <Route exact path="/companyComparison" component={CC}/> */}
              {/* <Route exact path="/addIPO" component={AddBook}/> */}
              {/*<Route path = "/company/2/update" component = {UpdateCompanyComponent}/>*/}
            </Switch>
          </BooksContext.Provider>
          <CompanyContext.Provider value={{ companies, setCompanies }}>
            <Switch>
              {/* <Route component={BooksList} path="/allIPO" exact={true} />
              <Route component={AddBook} path="/addIPO" />
              <Route component={EditBook} path="/edit/:id" /> */}
              <Route component={CompanyList} path="/allC" exact={true} />
              <Route component={EditCompany} path="/editC/:id" />
              {/*<Route component={() => <Redirect to="/" />} />*/}
              {/*<Route exact path="/" exact component={UserLandingPage} />*/}
              {/* <Route exact path="/uploadExcel" component={UploadFiles} />
              <Route exact path="/createNewUser" component={createNewUser} /> */}
              <Route exact path="/createCompany" component={AddCompany} />
              {/*/!* <Route exact path="/updateCompany" component={updateCompany} /> *!/*/}
              <Route exact path="/viewAllCompanies" component={Apps}/>
              {/* <Route exact path="/listStockExchanges" component={getAllSE}/> */}
              {/*/!* <Route exact path="/companies" component={CreateCompany} /> *!/*/}
              {/* <Route exact path="/companyComparison" component={CC}/> */}
              {/* <Route exact path="/addIPO" component={AddBook}/> */}
              {/*<Route path = "/company/2/update" component = {UpdateCompanyComponent}/>*/}
            </Switch>
          </CompanyContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
