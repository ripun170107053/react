import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from "../context/BooksContext";
import IpoService from "../services/IpoService";
import companyService from '../services/companyService';
const CompanyList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (companyCode) => {
    setBooks(books.filter((book) => book.companyCode !== companyCode));
    companyService.deleteCompany(book.companyCode).then(r => console.log("delete success"));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.companyCode} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No Companies available</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CompanyList;
