import React from 'react';
import PropTypes from 'prop-types';

import { AddButton } from './AddIcon.styled';

export const AddIcon = ({ to, text }) => {
  return   (
    <AddButton to={to}>
        {text}
    </AddButton>
  );
};

AddIcon.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};