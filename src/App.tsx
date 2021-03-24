import React from 'react'
import { Route } from 'react-router-dom';

import SearchPage from './pages/searchPage/SearchPage';
import ListPage from './pages/listPage/ListPage';
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path='/search' component={SearchPage} />
        <Route path='/' exact component={ListPage} />
      </div>
    )
  }
}

export default BooksApp
