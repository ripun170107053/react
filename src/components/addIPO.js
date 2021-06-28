import React, { useContext } from 'react';

const addIPO = ({ history }) =>
{
    const { ipo, setipo } = useContext(BooksContext);

    const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        history.push('/');
    };

    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default addIPO;
