import React, { useContext } from 'react';
import _ from 'lodash';
// import Company from './Company';
// import CompanyContext from "../context/CompanyContext";
import CompanyContext from '../context/CompanyContext';
import IpoService from "../services/IpoService";
import companyService from '../services/companyService';
import Company from './Company'; 
const CompanyList = () => {
  const { companies, setCompanies } = useContext(CompanyContext);

  const handleRemoveCompany = (companyCode) => {
    setCompanies(companies.filter((company) => company.companyCode !== companyCode));
    companyService.deleteCompany(companyCode).then(r => console.log("delete success"));
  };

  return (
    <React.Fragment>
      <div className="company-list">
        {!_.isEmpty(companies) ? (
          companies.map((company) => (
            <Company key={company.companyCode} {...company} handleRemoveCompany={handleRemoveCompany} />
          ))
        ) : (
          <p className="message">No Companies available</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CompanyList;
