import React, {useState,useEffect} from 'react';
import './App.js'
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './Components/Formulario.js';
import axios from 'axios';
import Cotizacion from './Components/Cotizacion.js';
import Spinner from './Components/Spinner.js';

const Container = styled.div`
  max-width:900px;
  margin: 0 auto;
  @media(min-width:992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:5rem;
  }
` 
const Image = styled.img`
  max-width:100%;
  margin-top:5rem;
  

`
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color:#fff;
  text-align:left;
  font-weight: 500;
  font-size: 50px; 
  margin: 80px 0 50px 0;
  &::after {
    content:'';
    width:150px;
    height:6px;
    background-color:#66A2FE;
    display:block;
  } 
  @media(max-width:1000px){
    font-size:35px;
    text-align:center;
    &::after {
    content:'';
    width:100%;
    height:6px;
    background-color:#66A2FE;
    display:block;
  } 
  }

`

function App() {

  const [moneda,setMoneda] = useState('');
  const [criptoMoneda,setCriptoMoneda] = useState('');
  const [resultado,setResultado] = useState({});
  const [cargando,setCargando] = useState(false);

  useEffect(()=>{
    //evitamos primera ejecucion
    const cotizarCriptoMoneda = async () => {
      if(moneda==='') return;
      //consultar api
      const URL =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(URL);
      setCargando(true);
      setTimeout(() => {
        setCargando(false);
        setResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);

      }, 2000);


      

    }
    cotizarCriptoMoneda();

  },[moneda,criptoMoneda]);

  return (
    <Container>
      <div className="img-Container">
        <Image
          src={imagen}
          alt="Imagen Criptomonedas"
        
        />
      </div>
      <div>
      <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setMoneda={setMoneda}
          setCriptoMoneda={setCriptoMoneda}
          
        />
        {cargando ? <Spinner/> 
        :<Cotizacion
          resultado={resultado}
        
        />}
        
      </div>
    </Container>
  );
}

export default App;
