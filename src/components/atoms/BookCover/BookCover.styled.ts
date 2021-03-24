import styled from 'styled-components';

export const Cover = styled.div<{ url: string }>`
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #eee;
    width: 128px;
    height: 193px;
    background-image: url("${({ url }) => url}")
`;