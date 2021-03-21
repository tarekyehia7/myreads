import React from 'react';
import { BackLink as BackButton } from './BackLink.styled';

export const BackLink = ({ to, text, onClick }) => {
  return   (
    <BackButton to={to} onClick={onClick}>
        {text}
    </BackButton>
  );
};