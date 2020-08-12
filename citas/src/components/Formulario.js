import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'; 

const Formulario = ({crearCita}) => {

    //Crear State de Citas 
    const [cita,actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    });

    const [error, actualizarError] = useState(false);

    //FUncion que se ejecuta cada que el usuario se escribe en un input
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value

        });
    } 
    // Extraer los valores

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usario presiona agregar cita 

    const submitCita = e =>{
        e.preventDefault();
        //Validar datos 
        if(mascota.trim() === ''){
            actualizarError(true);
            return;
        }else if (propietario.trim() === ''){
            actualizarError(true);
            return;
        }else if (fecha.trim() === ''){
            actualizarError(true);
            return;
        }else if (hora.trim() === ''){
            actualizarError(true);
            return;
        }else if (sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //Eliminar el mensaje previo
        actualizarError(false);

        //Asignar un ID 
        cita.id = uuidv4();

        //Crear Cita 
        crearCita(cita);

        //Reinicar el form 
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''

        })

    };

    return (  
        <Fragment>
            <h2>Crear Cita</h2>
           

            <form
                onSubmit = {submitCita}
            >
                <label>Nombre Mascota:</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange= {actualizarState}
                    value = {mascota}
                />
                <label>Nombre Dueño:</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    onChange= {actualizarState}
                    value = {propietario}
                />
                <label>Fecha cita:</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange= {actualizarState}
                    value = {fecha}
                   
                />
                <label>Hora cita:</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange= {actualizarState}
                    value = {hora}
                   
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Describa los sintomas"
                    onChange= {actualizarState}
                    value = {sintomas}
                
                ></textarea>
                 {error ? 
                    <p className="alerta-error">Todos los campos son Obligatorios</p>
                : null
        }
                <button
                    type="submit"
                    className="u-full-width button-primary"
                
                >Agregar Cita</button>

            </form>
        </Fragment>

    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired

}
 
export default Formulario;