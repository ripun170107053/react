import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from "../context/BooksContext";
import IpoService from "../services/IpoService";

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
    var p = JSON.stringify(book.openDateTime);
    var pp="";
    for(var i =0;i<p.length;i++)
    {
      if(p[i]==='T' || p[i]==='Z')
      {

      }
      else
        pp+=p[i];
    }
    var ppp="";
    for(var i=1;i<=10;i++)
    {
      ppp+=pp[i];
    }
    ppp+=' ';

    for(var i=11;i<=18;i++)
    {
      ppp+=pp[i];
    }
    book.openDateTime=ppp;
    console.log(book);
    var xx=JSON.stringify(book);
    IpoService.updateIpo(xx,book.id).then(r => console.log("Success"));

  };

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
