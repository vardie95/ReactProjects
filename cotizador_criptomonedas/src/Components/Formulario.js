import React, {useEffect,useState} from 'react';
import Styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda'
import useCriptoMonedas from '../hooks/useCriptoMonedas';
import axios from 'axios';
import Error from './Error'

const Boton = Styled.input`
    margin-top: 20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66a2fe;
    border: none;
    width:100%;
    border-radius:10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;

    }

`

const Formulario = ({setMoneda,setCriptoMoneda}) =>{

    //State de listado de Criptomonedas
    const [listacripto, setCripto] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        {codigo:'CRC', nombre: 'Colón Costarricense'},
        {codigo:'USD', nombre: 'Dolar Estados Unidos'},
        {codigo:'MXN', nombre: 'Peso Mexicano'},
        {codigo:'EUR', nombre: 'Euro'},

    ]
    //utilizanodo customHooks
    const [moneda,SelectMonedas]= useMoneda('Elige Tu Moneda: ', '',MONEDAS);
    const [criptoMoneda, SelectCripto] = useCriptoMonedas('Elige Tu Criptomoneda','',listacripto);

    //Ejecutar llamado al API

    useEffect(() => {
        const consultarAPI = async () => {
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(URL);
            setCripto(resultado.data.Data);
        }
        consultarAPI();
    },[]);
    const cotizarMoneda = e =>{
        e.preventDefault();
        if (moneda ==='' || criptoMoneda === ''){
            setError(true);
            return;

        }

        setError(false);
        setMoneda(moneda);
        setCriptoMoneda(criptoMoneda);
    }

    return (
        
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error/> : null}
            <SelectMonedas
            
            />
            <SelectCripto
            
            />
            <Boton
                type="submit"
                value="Calcular"
            
            />
        </form>


    );


}
export default Formulario;