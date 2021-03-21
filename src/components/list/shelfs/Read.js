import React from 'react';
import PropTypes from 'prop-types';

import { Spinner } from '@atoms';
import { Book } from '@organisms'
import { booksCategoriesKeys, booksCategories } from '@utils/booksHelper';

const Read = ({ books, onShelfChange }) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{booksCategories[booksCategoriesKeys.read]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {!books && <Spinner />}
                    {books && books.map(({ title, authors, imageLinks, id }, index) => (
                        <li key={index}>
                            <Book
                                bookTitle={title}
                                bookAuthor={authors.join(' - ')}
                                bookCoverUrl={imageLinks && imageLinks.thumbnail}
                                selectedShelf={booksCategoriesKeys.read}
                                onSelectionChange={(shelf) => onShelfChange(id, shelf)}
                            />
                        </li> 
                    ))}
                </ol>
            </div>
        </div>
    );
};

Read.propTypes = {
    books: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default Read;