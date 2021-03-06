import React from 'react';

import { CurrentlyReadingProps } from '../../../dataTypes/list';

import { Spinner } from '@atoms/index';
import { Book } from '@organisms/index';
import { booksCategoriesKeys, booksCategories } from '@utils/booksHelper';

const CurrentlyReading = ({ books, onShelfChange }: CurrentlyReadingProps) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{booksCategories[booksCategoriesKeys.currentlyReading]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {!books && <Spinner />}
                    {books && books.map(({ title, authors, imageLinks, id }, index) => (
                        <li key={index}>
                            <Book
                                bookTitle={title}
                                bookAuthor={authors.join(' - ')}
                                bookCoverUrl={imageLinks && imageLinks.thumbnail}
                                selectedShelf={booksCategoriesKeys.currentlyReading}
                                onSelectionChange={(shelf: string) => onShelfChange(id, shelf)}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default CurrentlyReading;