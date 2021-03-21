import React from 'react';
import { ChangerContianer } from './BookShelfChanger.styled';

export const BookShelfChanger = ({ children }) => {
    return (
        <ChangerContianer>
            {children}
        </ChangerContianer>
    )
}