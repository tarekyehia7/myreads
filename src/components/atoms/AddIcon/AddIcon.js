import React from 'react';
import { AddButton } from './AddIcon.styled';

export const AddIcon = ({ to, text,  }) => {
  return   (
    <AddButton to={to}>
        {text}
    </AddButton>
  );
};