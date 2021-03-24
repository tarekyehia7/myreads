import React from 'react';

import { AddIconProps } from '../../../dataTypes/atoms'
import { AddButton } from './AddIcon.styled';

export const AddIcon = ({ to, text }: AddIconProps) => {
  return   (
    <AddButton to={to}>
        {text}
    </AddButton>
  );
};