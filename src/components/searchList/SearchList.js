import React from 'react';

import * as booksAPI from '../../api/BooksAPI'

import { Spinner } from '../atoms';
import { Book } from '../organisms'
import { booksCategoriesKeys } from '../../utils/booksHelper';

export const SearchList = ({ books }) => {

    const onShelfChange = (id, shelf) => {
        booksAPI.update({ id }, shelf);
    };

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {!books && <Spinner />}
                {books && books.map(({ title, authors, imageLinks, id }, index) => (
                    <li key={index}>
                        <Book
                            bookTitle={title}
                            bookAuthor={authors.join(' - ')}
                            bookCoverUrl={imageLinks && imageLinks.thumbnail}
                            selectedShelf={booksCategoriesKeys.none}
                            onSelectionChange={(shelf) => onShelfChange(id, shelf)}
                        />
                    </li> 
                ))}
            </ol>
        </div>
    );
};