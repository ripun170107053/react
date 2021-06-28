import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from "../context/BooksContext";
import { Redirect } from "react-router-dom";
import IpoService from "../services/IpoService";
const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    //console.log(JSON.stringify(book));
    //book.id=5;


    setBooks([book, ...books]);
    history.push('/');
    // state = { redirect: null };
    // setTimeout(function () {
    //   window.location.href = "/allIPO"; //will redirect to your blog page (an ex: blog.html)
    // }, 1);
    var x= JSON.stringify(book);

    console.log(x);
    IpoService.createIpo(x).then(r => console.log("Success"));

  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
