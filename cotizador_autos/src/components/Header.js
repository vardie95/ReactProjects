import React from 'react';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
    background-color:#00838F;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
    
`;

const TextoHeader = styled.h1`
    font-size:2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align:center;
    padding-bottom:10px;


`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>

        </ContenedorHeader>

     );
}
 
export default Header;