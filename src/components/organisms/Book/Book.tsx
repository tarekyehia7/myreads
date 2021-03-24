import React from 'react';

import {
    BookContainer,
    BookTop,
    BookTitle,
    BookAuthor
} from './Book.styled';
import { BookCover } from '@atoms/index';
import { ShelfChanger } from '@molecules/index';

type BookProps = {
    className?: string;
    bookTitle: string;
    bookAuthor: string;
    selectedShelf: string;
    bookCoverUrl: string;
    onSelectionChange: (shelf: string) => void;
}

export const Book = ({
    className,
    bookTitle = '',
    bookAuthor = '',
    selectedShelf = 'none',
    bookCoverUrl = '',
    onSelectionChange,
}: BookProps) => {
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