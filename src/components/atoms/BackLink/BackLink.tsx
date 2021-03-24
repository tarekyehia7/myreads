import React from 'react';

import { BackLinkProps } from '../../../dataTypes/atoms';

import { BackLink as BackButton } from './BackLink.styled';

export const BackLink = ({ to, text }: BackLinkProps) => {
  return   (
    <BackButton to={to}>
        {text}
    </BackButton>
  );
};