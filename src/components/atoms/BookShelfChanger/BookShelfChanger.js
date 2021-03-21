import React from 'react';
import PropTypes from 'prop-types';

import { ChangerContianer } from './BookShelfChanger.styled';

export const BookShelfChanger = ({ children }) => {
    return (
        <ChangerContianer>
            {children}
        </ChangerContianer>
    )
}

BookShelfChanger.propTypes = {
    children: PropTypes.node,
};