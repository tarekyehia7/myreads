import styled from 'styled-components';

export const SpinnerComponent = styled.div`
    z-index: 1;
    width: 120px;
    height: 120px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
`;