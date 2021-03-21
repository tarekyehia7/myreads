import React from 'react';

import { Spinner } from '../../atoms';
import { Book } from '../../organisms'
import { booksCategoriesKeys, booksCategories } from '../../../utils/booksHelper';


const WantToRead = ({ books, onShelfChange }) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{booksCategories[booksCategoriesKeys.wantToRead]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {!books && <Spinner />}
                    {books && books.map(({ title, authors, imageLinks, id }, index) => (
                        <li key={index}>
                            <Book
                                bookTitle={title}
                                bookAuthor={authors.join(' - ')}
                                bookCoverUrl={imageLinks && imageLinks.thumbnail}
                                selectedShelf={booksCategoriesKeys.wantToRead}
                                onSelectionChange={(shelf) => onShelfChange(id, shelf)}
                            />
                        </li> 
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default WantToRead;