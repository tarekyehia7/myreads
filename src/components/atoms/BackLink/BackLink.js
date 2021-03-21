import React from 'react';
import PropTypes from 'prop-types';

import { BackLink as BackButton } from './BackLink.styled';

export const BackLink = ({ to, text, onClick }) => {
  return   (
    <BackButton to={to} onClick={onClick}>
        {text}
    </BackButton>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};