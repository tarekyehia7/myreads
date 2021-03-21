import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddButton = styled(Link)`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2e7d32;
    background-image: url(../../../icons/add.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    font-size: 0;
    outline: 0;
`;
