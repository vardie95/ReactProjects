import React,{Fragment, useState} from 'react';
import Styled from '@emotion/styled';

const useCriptoMonedas = (label,inicialState,options) =>{
   
    const Label= Styled.label`
        font-family: 'Bebas Neue', cursive; 
        color: #FFF;
        text-transform: uppercase;
        font-size:2.0rem; 
        margin-top:2rem;
        display:block
    `
    const Select= Styled.select`
        width: 100%;
        display:block;
        padding:1rem;
        -webkit-appearance:none;
        border-radius:10px;
        border:none;
        font-size:1rem;
    `
    //state de nuesto custom hook
    const [state,updateState] = useState(inicialState);


    const SeleccionarCripto = () =>(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange= {e => updateState(e.target.value)}
                value = {state}
            >
                <option value="">Seleccione</option>
                {options.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
                
            </Select>

        </Fragment>
    );
    //Retornar state, interfaz, fn modificiar el state
    return [state,SeleccionarCripto,updateState]


}
export default useCriptoMonedas