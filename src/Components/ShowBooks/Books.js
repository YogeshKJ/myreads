import React from 'react'
import PropTypes from 'prop-types'

export default function Books({ shelf, book, title, authors, image, handleChange }) {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={event => handleChange(book, event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        </li>
    )
}

Books.propTypes = {
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}