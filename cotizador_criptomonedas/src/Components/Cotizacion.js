import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    margin-top:15px;
    padding: 5px;
    color: #fff;
    border-radius:10px;
    font-family: Arial, Helvetica, sans-serif;

`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
    margin: 5px;

`;

const Precio = styled.span`
    font-size:30px;
    span {
        font-weight:bold;
    }
`;


const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length ===0) return null;
    return (  
        <Container>
            <Precio>El precio es: {resultado.PRICE}</Precio>
            <Info>El precio más alto del día: <span>{resultado.HIGH24HOUR}</span> </Info>
            <Info>El precio más bajo del día:<span>{resultado.LOW24HOUR}</span> </Info>
            <Info>Ultima actualización: {resultado.LASTUPDATE}</Info>
        </Container>
    );
}
 
export default Cotizacion;