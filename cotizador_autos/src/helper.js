export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;

}

// calcula el total a pagar segun la marca 

export function calcularMarca(marca){
    let incremento;
    switch(marca){
        case 'europeo':
            incremento= 1.30;
            break;
        case 'americano':
            incremento= 1.15;
            break;
        case 'asiatico':
             incremento= 1.05;
             break;
        default:
            break;

    }
    return incremento;

}

//calcular tipo de seguro
export function obtenerPlan(plan){
    return (plan ==='basico') ? 1.20 : 1.50; 

}

// Muestra la primer letra mayuscula

export function primerMayuscula(text){
    return text.charAt(0).toUpperCase() + text.slice(1);

}