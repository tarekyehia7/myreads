import React from 'react';

import { ChangerContianer } from './BookShelfChanger.styled';

export const BookShelfChanger = ({ children }: { children: React.ReactNode }) => {
    return (
        <ChangerContianer>
            {children}
        </ChangerContianer>
    )
};