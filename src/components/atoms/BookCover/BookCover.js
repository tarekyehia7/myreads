import React from 'react';
import PropTypes from 'prop-types';

import { Cover } from './BookCover.styled';

export const BookCover = ({ url }) => {

    return (
        <Cover url={url} />
    );
};

BookCover.propTypes = {
    url: PropTypes.string.isRequired,
};