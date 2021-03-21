import React from 'react';

import { AddIcon } from '../../components/atoms';
import BooksList from '../../components/list/BooksList';

const List = () => {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BooksList />
            <div className="open-search">
              <AddIcon
                to={'/search'}
                text={'Add a book'}
              />
            </div>
          </div>
    );
};

export default List;