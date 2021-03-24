import React from 'react';
import PropTypes from 'prop-types';

import { Select } from './SelfChanger.styled';
import { BookShelfChanger } from '@atoms';
import { booksCategories } from '@utils/booksHelper';

export const ShelfChanger = ({ selectedOption, onSelectionChange }) => {
    return (
        <BookShelfChanger>
            <Select defaultValue={selectedOption} onChange={(e) => {onSelectionChange(e.target.value)}}>
                <option value="move" disabled>Move to...</option>
                {Object.keys(booksCategories).map(key => (
                    <option key={key} value={key}>{booksCategories[key]}</option>
                ))}
            </Select>
        </BookShelfChanger>
    );
};

BookShelfChanger.propTypes = {
    selectedOption: PropTypes.string,
    onSelectionChange: PropTypes.func
};