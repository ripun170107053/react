import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import companyService from '../services/companyService';
import CompanyForm from './CompanyForm';
import CompanyContext from '../context/CompanyContext';
const  EditCompany = ({ history }) => {
  const { companies, setcompanies } = useContext(CompanyContext);
  //console.log(setcompanies);
  //const companyCodez  = useParams();
  const {companyCode}=  useParams();
  console.log(companyCode);
  const companyToEdit = companies.find((company) => company.companyCode === companyCode);

  const handleOnSubmit = (company) => {
    const filteredCompanies = companies.filter((company) => company.companyCode !== companyCode);
    setcompanies([company, ...filteredCompanies]);
    history.push('/');
    

    var xx=JSON.stringify(company);
    console.log(xx);
    companyService.updateCompany(company).then(r => console.log("Success"));

  };

  return (
    <div>
      <CompanyForm company={companyToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCompany;
