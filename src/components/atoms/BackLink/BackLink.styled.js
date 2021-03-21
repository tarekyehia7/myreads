import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background-image: url('./icons/arrow-back.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    border: none;
    outline: none;
`;