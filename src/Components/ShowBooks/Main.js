import PropTypes from 'prop-types';
import React from 'react';
import Shelf from './Shelf';

export default function Main({books, handleChange}) {
        return (
            <div className="list-books-content">
                <Shelf shelf='currentlyReading' books={books} handleChange={handleChange} />
                <Shelf shelf='wantToRead' books={books} handleChange={handleChange} />
                <Shelf shelf='read' books={books} handleChange={handleChange} />
            </div>
        )
}

Main.propTypes = {
    books: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}