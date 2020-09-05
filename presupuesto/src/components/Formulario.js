import React, {useState} from 'react';
import Error from './Error'
import shortid from 'shortid'
const  Formulario = ({guardarGasto, guardarCrearGasto}) => {

    
    const [nombre,guardarNombre] = useState ('');
    const [cantidad,guardarCantidad] = useState (0);
    const [error,guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        //validar

        if(cantidad <1 || isNaN(cantidad) || nombre.trim() ===''){
            guardarError(true);
            return;

        }

        //construi el gasto
        guardarError(false);
        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()
        }

        console.log(gasto);
        // pasar el gasto al componente final 
            guardarGasto(gasto);
            guardarCrearGasto(true);
        //
        guardarNombre('');
        guardarCantidad(0);


    }
    return (  
        <form
            onSubmit={agregarGasto}
        
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje = "Ambos campos son obligatorios "/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type = "text"
                    className = "u-full-width"
                    value ={nombre}
                    onChange = {e =>guardarNombre(e.target.value)}
                
                />
            </div>
            <div className="campo">
            <label>Cantidad Gasto</label>
            <input
                type = "number"
                className = "u-full-width"
                value ={cantidad}
                onChange = {e => guardarCantidad(parseInt(e.target.value))}
            />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>

    );
}
 
export default  Formulario;