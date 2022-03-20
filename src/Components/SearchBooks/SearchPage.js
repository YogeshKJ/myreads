import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import { search } from '../../BooksAPI'

import SearchResult from './SearchResult';

class SearchPage extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired,
    }

    state = {
        searchList: []
    }

    handleInput = (event) => {
        event.target.value === null ? (
            this.setState({ searchList: [] })
        ) : (
            search(event.target.value)
                .then(searchList => {
                    this.setState(() => ({
                        searchList
                    }))
                })
        )
    }

    render() {
        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to='/'>
                            <button className="close-search">Close</button>
                        </Link>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={this.handleInput} />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {this.state.searchList && this.state.searchList.length >= 1 ? (
                            <SearchResult
                                books={this.state.searchList}
                                shelfBooks={this.props.books}
                                handleChange={this.props.handleChange} />
                        ) : <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;