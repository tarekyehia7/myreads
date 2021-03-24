import React from 'react';

import * as booksAPI from '@api/BooksAPI';
import { SearchListProps } from '../../dataTypes/search';

import { Spinner } from '@atoms/index';
import { Book } from '@organisms/index';
import { booksCategoriesKeys } from '@utils/booksHelper';


export const SearchList = ({ books, transformedBooks, onShelfChanged }: SearchListProps) => {

    const onShelfChange = (id: string, shelf: string) => {
        booksAPI.update({ id }, shelf);
        onShelfChanged();
    };

    const getSelectedShelf = (id: string) => {

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