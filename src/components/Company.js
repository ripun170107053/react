import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Company = ({
    companyCode,companyName,ceo,turnover,boardDirector,writeup,sector,stockExchange,
  handleRemovecompany
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="company">
      <Card.Body>
        <Card.Title className="company-title">{companyName}</Card.Title>
        <div className="company-details">
          <div>companyCode: {companyCode}</div>
          <div>ceo: {ceo} </div>
          <div>boardDirector: {boardDirector} </div>
          <div>sector: {sector}</div>
          <div>turnover: {turnover}</div>
          <div>stockExchange: {stockExchange}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${companyCode}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemovecompany(companyCode)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Company;
