import Styled from '@emotion/styled';
import React from 'react';

const Errorp = Styled.p`
    background-color:#b7322c;
    color:white;
    padding:10px;
    border-radius:10px;
    font-family: 'Bebas Neue', cursive; 
    font-weight: 400;
    font-size:1.2rem;
    text-align:center;

`;

const Error = () => {
    
    return (<Errorp>Todos los campos son obligatorios</Errorp>  );
}
 
export default Error;



