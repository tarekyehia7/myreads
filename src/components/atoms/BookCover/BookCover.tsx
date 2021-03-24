import React from 'react';

import { BookCoverProps } from '../../../dataTypes/atoms';

import { Cover } from './BookCover.styled';

export const BookCover = ({ url }: BookCoverProps) => {

    return (
        <Cover url={url} />
    );
};