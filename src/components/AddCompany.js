import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from "../context/BooksContext";
import { Redirect } from "react-router-dom";
import companyService from "../services/companyService";
import companyForm from "./CompanyForm";
const AddCompany = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    //console.log(JSON.stringify(book));
    //book.id=5;


    setBooks([book, ...books]);
    history.push('/');

    var x= JSON.stringify(book);

    // var p = JSON.stringify(book.openDateTime);
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
    // book.openDateTime=ppp;
    console.log(JSON.stringify(book));
    var xx=JSON.stringify(book);
    companyService.createCompany(book).then(r => console.log("Success"));

  };

  return (
    <React.Fragment>
      <companyForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCompany;
