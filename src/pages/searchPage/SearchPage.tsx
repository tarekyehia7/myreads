import React, { useEffect, useState } from 'react';

import * as booksAPI from '@api/BooksAPI';
import { BookType, TransformedTableBookType } from '../../dataTypes/api';

import { BackLink } from '@components/atoms';
import { SearchList } from '@components/searchList/SearchList';
import { thresholdApplied, transformDataToHashTable } from '@utils/searchHelper';

const SearchPage = () => {
    const [searchText, setSearchText] = useState<string>('');
    const [books, setBooks] = useState<BookType[]>([]);
    const [transformedBooks, setTransformedBooks] = useState<TransformedTableBookType[]>([]);
    const [shelfChanged, setShelfChanged] = useState<boolean | null>(null);

    useEffect(() => {
        if (!thresholdApplied(searchText)) {
            if (searchText === '') setBooks([]);
            return;
        }
        booksAPI.search(searchText).then(data => {
            if (!data.error) {
                setBooks(data);
            } else {
                setBooks([]);
            }
        });
    }, [searchText]);

    useEffect(() => {
        if (shelfChanged || shelfChanged === null) {
            booksAPI.getAll().then(data => {
                const transformedData: TransformedTableBookType[] = transformDataToHashTable(data);
                setTransformedBooks(transformedData);
            });
        }
    }, [shelfChanged]);

    const onShelfChanged = () => {
        setShelfChanged(true);
    }  

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return(
        <div className="search-books">
            <div className="search-books-bar">

              <BackLink to="/" text="Close" />
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={searchText} onChange={onTextChange}/>
              </div>
            </div>
            {books.length === 0 && 
            <div className="search-books-results">
                <h1 style={{ textAlign: 'center' }}>No Results Found...</h1>
            </div>
            }
            {books.length > 0 && <SearchList books={books} transformedBooks={transformedBooks}  onShelfChanged={onShelfChanged} />}
        </div>
    );
};

export default SearchPage;