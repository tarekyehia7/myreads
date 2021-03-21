import React, { useState, useEffect } from 'react';

import * as booksAPI from '@api/BooksAPI'

import { ListBooksContent } from './BooksList.styled';

import { useShelfesDistribution } from '@hooks/useShelfesDistribution';
import CurrentlyReading from './shelfs/CurrentlyReading';
import WantToRead from './shelfs/WantToRead';
import Read from './shelfs/Read';

const BooksList = () => {
    const [books, setBooks] = useState(null);
    const [booksUpdated, setBooksUpdated] = useState(false);
    const [currentlyReadingBooks, wantToReadBooks, readBooks] = useShelfesDistribution(books);

    useEffect(() => {
      if (books && !booksUpdated) return;
      
      booksAPI.getAll().then((books) => {
        setBooks(books)
        setBooksUpdated(false);
      });
    }, [books, booksUpdated]);

    const onShelfChange = (id, shelf) => {
        booksAPI.update({ id }, shelf)
        setBooksUpdated(true);
    };

    return (
        <ListBooksContent>
          <div>
            <CurrentlyReading books={currentlyReadingBooks} onShelfChange={onShelfChange} />
            <WantToRead books={wantToReadBooks} onShelfChange={onShelfChange} />
            <Read books={readBooks} onShelfChange={onShelfChange} />
          </div>
        </ListBooksContent>
    );
}

export default BooksList;