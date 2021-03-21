import React, { useEffect, useState } from 'react';

import * as booksAPI from '@api/BooksAPI'

import { BackLink } from '@components/atoms';
import { SearchList } from '@components/searchList/SearchList';
import { thresholdApplied } from '@utils/searchHelper';

const SearchPage = () => {
    const [searchText, setSearchText] = useState('');
    const [books, setBooks] = useState(null);

    useEffect(() => {
        if (!thresholdApplied(searchText)) {
            if (searchText === '') setBooks(null);
            return;
        }
        booksAPI.search(searchText).then(data => {
            setBooks(data);
        });
    }, [searchText]);

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
            {books && <SearchList books={books} />}
        </div>
    );
};

export default SearchPage;