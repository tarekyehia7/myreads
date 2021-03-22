import React from 'react';
import PropTypes from 'prop-types';

import * as booksAPI from '@api/BooksAPI'

import { Spinner } from '@atoms';
import { Book } from '@organisms'
import { booksCategoriesKeys } from '@utils/booksHelper';

export const SearchList = ({ books, transformedBooks, onShelfChanged }) => {

    const onShelfChange = (id, shelf) => {
        booksAPI.update({ id }, shelf);
        onShelfChanged();
    };

    const getSelectedShelf = (id) => {

        if(transformedBooks && transformedBooks[id]) {
            return transformedBooks[id].shelf
        }
        return booksCategoriesKeys.none
    }

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {!books && <Spinner />}
                {books && books.map(({ title, authors, imageLinks, id }, index) => (
                    <li key={index}>
                        <Book
                            bookTitle={title}
                            bookAuthor={authors && authors.join(' - ')}
                            bookCoverUrl={imageLinks && imageLinks.thumbnail}
                            selectedShelf={getSelectedShelf(id)}
                            onSelectionChange={(shelf) => onShelfChange(id, shelf)}
                        />
                    </li> 
                ))}
            </ol>
        </div>
    );
};

SearchList.propTypes = {
    books: PropTypes.array.isRequired,
    transformedBooks: PropTypes.object.isRequired,
    onShelfChanged: PropTypes.func
};