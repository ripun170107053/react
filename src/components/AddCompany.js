import React, { useContext } from 'react';

import CompanyContext from "../context/CompanyContext";
import { Redirect } from "react-router-dom";
import companyService from "../services/companyService";
import CompanyForm from './CompanyForm';

const AddCompany = ({ history }) => {
  const { companies, setcompanies } = useContext(CompanyContext);

  const handleOnSubmit = (company) => {
    //console.log(JSON.stringify(company));
    //company.id=5;


    setcompanies([company, ...companies]);
    history.push('/');

    var x= JSON.stringify(company);
   // console.log(companies);

    // var p = JSON.stringify(company.openDateTime);
    // var pp="";
    // for(var i =0;i<p.length;i++)
    // {
    //   if(p[i]==='T' || p[i]==='Z')
    //   {

    //   }
    //   else
    //     pp+=p[i];
    // }
    // var ppp="";
    // for(var i=1;i<=10;i++)
    // {
    //   ppp+=pp[i];
    // }
    // ppp+=' ';

    // for(var i=11;i<=18;i++)
    // {
    //   ppp+=pp[i];
    // }
    // company.openDateTime=ppp;
    console.log(JSON.stringify(company));
    var xx=JSON.stringify(company);
    companyService.createCompany(company).then(r => console.log("Success"));

  };

  return (
    <React.Fragment>
      <CompanyForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCompany;
