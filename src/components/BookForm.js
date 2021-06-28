import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      id:props.book? props.book.id:'',
      companyName: props.book ? props.book.companyName : '',
      stockExchange: props.book ? props.book.stockExchange : '',
      pricePerShare: props.book ? props.book.pricePerShare : '',
      totalNumberOfShares: props.book ? props.book.totalNumberOfShares : '',
      openDateTime: props.book ? props.book.openDateTime : '',
      remarks: props.book ? props.book.remarks : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { id,companyName,stockExchange,pricePerShare,totalNumberOfShares,openDateTime,remarks } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [id,companyName,stockExchange,pricePerShare,totalNumberOfShares,openDateTime,remarks];
    let errorMsg = '';

    const allFieldsFilled = 1;
    //     values.every((field) => {
    //   const value = `${field}`.trim();
    //   return value !== '' && value !== '0';
    // });

    if (allFieldsFilled) {
      const book = {
                id,
                companyName,
                stockExchange,
                pricePerShare,
                totalNumberOfShares,
                openDateTime: new Date(),
                remarks,
            };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

      return (

        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="id">
                    <Form.Label>id</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="id"
                        value={id}
                        placeholder="Enter id"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="companyName">
                    <Form.Label>companyName</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="companyName"
                        value={companyName}
                        placeholder="Enter name of companyName"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="stockExchange">
                    <Form.Label>stockExchange</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="stockExchange"
                        value={stockExchange}
                        placeholder="Enter name of stockExchange"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="pricePerShare">
                    <Form.Label>pricePerShare</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="pricePerShare"
                        value={pricePerShare}
                        placeholder="Enter pricePerShare"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="totalNumberOfShares">
                    <Form.Label>totalNumberOfShares</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="totalNumberOfShares"
                        value={totalNumberOfShares}
                        placeholder="Enter totalNumberOfShares"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="openDateTime">
                    <Form.Label>openDateTime</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="date"
                        name="openDateTime"
                        value={openDateTime}
                        placeholder="Enter openDateTimek"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="remarks">
                    <Form.Label>remarks</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="remarks"
                        value={remarks}
                        placeholder="Enter remarks"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn" >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default BookForm;
