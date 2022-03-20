import React from 'react';
import PropTypes from 'prop-types'
import Books from './Books';

export default function Shelf({ books, shelf, handleChange }) {
    const shelfName = shelf === 'currentlyReading' ? 'Currently Reading' : shelf === 'wantToRead' ? 'Want To Read' : 'Read'

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books
                        .filter(book => book.shelf === shelf)
                        .map(book => {
                            return (
                                <Books
                                    book={book}
                                    key={book.id}
                                    title={book.title}
                                    authors={book.authors}
                                    image={book.imageLinks ? book.imageLinks.thumbnail : ''}
                                    shelf={book.shelf}
                                    handleChange={handleChange}
                                />
                            )
                        })}
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}