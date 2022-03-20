import React from 'react'
import PropTypes from 'prop-types'

import Books from '../ShowBooks/Books'

export default function SearchResult({ shelfBooks, books, handleChange }) {
    return (
        <ol className="books-grid">
            {books.map(book => {
                const result = shelfBooks.find(_book => book.id === _book.id)
                return (
                    <Books
                        book={book}
                        key={book.id}
                        title={book.title}
                        authors={book.authors}
                        image={book.imageLinks ? book.imageLinks.thumbnail : ''}
                        shelf={result ? result.shelf : 'none'}
                        handleChange={handleChange}
                    />
                )
            })}
        </ol>
    )
}

SearchResult.propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
}