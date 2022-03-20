import React from 'react'

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
                        author={book.author}
                        image={book.imageLinks ? book.imageLinks.thumbnail : ''}
                        shelf={result ? result.shelf : 'none'}
                        handleChange={handleChange}
                    />
                )
            })}
        </ol>
    )
}