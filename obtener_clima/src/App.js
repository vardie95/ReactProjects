import React, {Fragment,useState,useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';

const App = () => {
  const API_KEY= '8f7a1f4c403bbe97638648505993254c'

  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
   pais: ''
});

const [consultar, guardarConsultar] = useState(false);
const [resultado, guardarResultado] = useState({});
const [error, setError]= useState(false);

const {ciudad, pais} = busqueda;
let showResults='';

useEffect (()=>{
  const consultarAPI = async () => {

    if (consultar){
      const URL= `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API_KEY}`;
      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();

      guardarResultado(resultado);
      guardarConsultar(false);

      if (resultado.cod === "404"){
        setError(true);
      }else {
        setError(false);
      }

    }
  }
  consultarAPI()
},[consultar]);

if (error){
  showResults = <p className= "red darken-4 error" >No se encontraron Resultados</p>
}else{
  showResults = <Clima
  resultado = {resultado}
  error = {error}
/>
}



  return (
    <Fragment>
      <Header
        titulo ='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                 <Formulario
                 busqueda = {busqueda}
                 guardarBusqueda = {guardarBusqueda}
                 guardarConsultar = {guardarConsultar}
                 >

                 </Formulario>
                </div>
                <div className="col m6 s12">
                  {showResults}
                </div>
            </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
