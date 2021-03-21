import React from 'react';
import { Cover } from './BookCover.styled';

export const BookCover = ({ url }) => {

    return (
        <Cover url={url} />
    );
}