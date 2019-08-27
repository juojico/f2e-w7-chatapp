import React from 'react';
import styled from 'styled-components';

const MainArea = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primary};
    text-align: center;
`;

const Club = () => {
    return <MainArea>Club Screen</MainArea>
}

export default Club;