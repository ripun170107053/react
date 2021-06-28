import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id, companyName, stockExchange, pricePerShare, totalNumberOfShares, openDateTime, remarks,
  handleRemoveBook
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{companyName}</Card.Title>
        <div className="book-details">
          <div>Stock Exchange: {stockExchange}</div>
          <div>Quantity: {totalNumberOfShares} </div>
          <div>Price: {pricePerShare} </div>
          <div>Date: {new Date(openDateTime).toDateString()}</div>
          <div>Remarks: {remarks}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
