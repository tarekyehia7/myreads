import React, { useEffect, useState } from 'react';

import * as booksAPI from '@api/BooksAPI'

import { BackLink } from '@components/atoms';
import { SearchList } from '@components/searchList/SearchList';
import { thresholdApplied, transformDataToHashTable } from '@utils/searchHelper';

const SearchPage = () => {
    const [searchText, setSearchText] = useState('');
    const [books, setBooks] = useState(null);
    const [transformedBooks, setTransformedBooks] = useState(null);
    const [shelfChanged, setShelfChanged] = useState(null);

    useEffect(() => {
        if (!thresholdApplied(searchText)) {
            if (searchText === '') setBooks(null);
            return;
        }
        booksAPI.search(searchText).then(data => {
            if (!data.error) {
                setBooks(data);
            } else {
                setBooks(null)
            }
        });
    }, [searchText]);

    useEffect(() => {
        if (shelfChanged || shelfChanged === null) {
            booksAPI.getAll().then(data => {
                const transformedData = transformDataToHashTable(data);
                setTransformedBooks(transformedData);
            });
        }
    }, [shelfChanged]);

    const onShelfChanged = () => {
        setShelfChanged(true)
    }  

    const onTextChange = (e) => {
        setSearchText(e.target.value);
    };

    return(
        <div className="search-books">
            <div className="search-books-bar">

              <BackLink to="/" text="Close" />
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" text={searchText} onChange={onTextChange}/>
              </div>
            </div>
            {!books && 
            <div className="search-books-results">
                <h1 style={{ textAlign: 'center' }}>No Results Found...</h1>
            </div>
            }
            {books && <SearchList books={books} transformedBooks={transformedBooks}  onShelfChanged={onShelfChanged} />}
        </div>
    );
};

export default SearchPage;