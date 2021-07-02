import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const CompanyForm = (props) => {
    const [company, setCompany] = useState(() => {
        return {
            companyCode:props.company? props.company.companyCode:'',
            companyName: props.company ? props.company.companyName : '',
            ceo: props.company ? props.company.ceo : '',
            turnover: props.company ? props.company.turnover : '',
            boardDirector: props.company ? props.company.boardDirector : '',
            writeup: props.company ? props.company.writeup : '',
            sector: props.company ? props.company.sector : '',
            stockExchange: props.company ? props.company.stockExchange : '',
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const {companyCode,companyName,ceo,turnover,boardDirector,writeup,sector,stockExchange} = company;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [companyCode,companyName,ceo,turnover,boardDirector,writeup,sector,stockExchange];
        let errorMsg = '';

        const allFieldsFilled = 1;
        //     values.every((field) => {
        //   const value = `${field}`.trim();
        //   return value !== '' && value !== '0';
        // });

        if (allFieldsFilled) {
            const company = {
                companyCode,
                companyName,
                ceo,
                turnover,
                boardDirector,
                writeup,
                sector,
                stockExchange,
            };
            props.handleOnSubmit(company);
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
                    setCompany((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setCompany((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setCompany((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (

        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="companyCode">
                    <Form.Label>companyCode</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="companyCode"
                        value={companyCode}
                        placeholder="Enter companyCode"
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
                <Form.Group controlId="ceo">
                    <Form.Label>ceo</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="ceo"
                        value={ceo}
                        placeholder="Enter name of ceo"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="turnover">
                    <Form.Label>turnover</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="turnover"
                        value={turnover}
                        placeholder="Enter turnover"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="boardDirector">
                    <Form.Label>boardDirector</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="boardDirector"
                        value={boardDirector}
                        placeholder="Enter boardDirector"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="writeup">
                    <Form.Label>writeup</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="writeup"
                        value={writeup}
                        placeholder="Enter writeup"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="sector">
                    <Form.Label>sector</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="sector"
                        value={sector}
                        placeholder="Enter sector"
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
                        placeholder="Enter stockExchange"
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

export default CompanyForm;
