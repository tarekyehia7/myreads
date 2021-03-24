import React, { useState, useEffect } from 'react';

import * as booksAPI from '@api/BooksAPI';
import { BookType } from '../../dataTypes/api';

import { ListBooksContent } from './BooksList.styled';

import { useShelfesDistribution } from '@hooks/useShelfesDistribution';
import CurrentlyReading from './shelfs/CurrentlyReading';
import WantToRead from './shelfs/WantToRead';
import Read from './shelfs/Read';

const BooksList = () => {
    const [books, setBooks] = useState<BookType[]>([]);
    const [booksUpdated, setBooksUpdated] = useState(false);
    const [currentlyReadingBooks, wantToReadBooks, readBooks] = useShelfesDistribution(books);

    useEffect(() => {
      if (books.length && !booksUpdated) return;
      
      booksAPI.getAll().then((books) => {
        setBooks(books)
        setBooksUpdated(false);
      });
    }, [books, booksUpdated]);

    const onShelfChange = (id: string, shelf: string) => {
        booksAPI.update({ id }, shelf)
        setBooksUpdated(true);
    };

    return (
        <ListBooksContent>
          <div>
            {currentlyReadingBooks && <CurrentlyReading books={currentlyReadingBooks} onShelfChange={onShelfChange} />}
            {wantToReadBooks && <WantToRead books={wantToReadBooks} onShelfChange={onShelfChange} />}
            {readBooks && <Read books={readBooks} onShelfChange={onShelfChange} />}
          </div>
        </ListBooksContent>
    );
}

export default BooksList;