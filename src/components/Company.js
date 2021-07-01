import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
    companyCode,companyName,ceo,turnover,boardDirector,writeup,sector,stockExchange,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{companyName}</Card.Title>
        <div className="book-details">
          <div>companyCode: {companyCode}</div>
          <div>ceo: {ceo} </div>
          <div>boardDirector: {boardDirector} </div>
          <div>sector: {sector}</div>
          <div>stockExchange: {stockExchange}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${companyCode}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(companyCode)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
