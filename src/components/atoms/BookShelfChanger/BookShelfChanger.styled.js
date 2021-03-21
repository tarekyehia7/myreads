
import styled from 'styled-components';

import arrowDropDownImageURL from '@icons/arrow-drop-down.svg';

export const ChangerContianer = styled.div`
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #60ac5d;
    background-image: url(${arrowDropDownImageURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;