import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import * as BooksAPI from './BooksAPI'

// components
import Header from './Components/ShowBooks/Header'
import Main from './Components/ShowBooks/Main'
import Search from './Components/ShowBooks/Search'
import SearchPage from './Components/SearchBooks/SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        console.log(books)
        this.setState(() => ({
          books: books
        }))
      })
  }

  handleChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf
        this.setState(() => ({
          books: this.state.books.filter(_book => {
            return _book.id !== book.id
          }).concat([book])
        }))
        console.log(this.state.books)
      })
  }

  render() {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={
            <div>
              <Header />
              <Main
                handleChange={this.handleChange}
                books={this.state.books} />
              <Search />
            </div>
          }
          />

          <Route exact path='/search' element={
            <SearchPage
              books={this.state.books}
              handleChange={this.handleChange} />
          } />
        </Routes>
      </div>
    )
  }
}

export default BooksApp;