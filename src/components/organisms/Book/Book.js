import React from 'react';
import PropTypes from 'prop-types';

import {
    BookContainer,
    BookTop,
    BookTitle,
    BookAuthor
} from './Book.styled';
import { BookCover } from '@atoms';
import { ShelfChanger } from '@molecules';

export const Book = ({
    className,
    bookTitle = '',
    bookAuthor = '',
    selectedShelf = 'none',
    bookCoverUrl = '',
    onSelectionChange,
}) => {
    return(
        <BookContainer className={className}>
            <BookTop>
                <BookCover url={bookCoverUrl} />
                <ShelfChanger selectedOption={selectedShelf} onSelectionChange={onSelectionChange}/>
            </BookTop>
            <BookTitle>
                {bookTitle}
            </BookTitle>
            <BookAuthor>
                {bookAuthor}
            </BookAuthor>
        </BookContainer>
    );
}

Book.propTypes = {
    bookTitle: PropTypes.string,
    bookAuthor: PropTypes.string,
    selectedShelf: PropTypes.string,
    bookCoverUrl: PropTypes.string,
    onSelectionChange: PropTypes.func,
};