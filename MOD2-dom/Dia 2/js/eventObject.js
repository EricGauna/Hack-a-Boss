'use strict';

/* 

    ######################
    #### OBJETO EVENTO ###
    ######################
    
    Para poder aplicar un evento,seleccionamos el elemento

*/
const header = document.querySelector('header');
const body=document.querySelector('body')
const p = document.querySelector('p');

let contador = 0;
// Declaro un contador para sumar y mostrarlos en el parrafo cuando se haga click 

// Todas las funciones manejadoras de un evento reciben por defecto
// un objeto que define este evento(event|e) y este objeto tiene
// acceso a muchas propiedades o métodos del evento que pueden sernos útiles

// Creamos la función manejadopra del evento click sobre el header
function headerClickHandler(event) {
    console.log('Click en el header');

    if (event.altKey) {
        console.log('click con tecla alt pulsada');
    }
    // Target 
    // Selecciona de manera espécifica el elemento sobre el que hemos hecho click
    console.log(event.target);

    // currentTarget -> muestra el elemento que tiene asignado el evento
    console.log(event.currentTarget);

    // con target tenemos acceso a las propiedad del elemento
    if (event.target.id === 'boton') {
        console.log('has pinchado sobre el boton');
        // Si el usuario clicka sobre el boton sumamos un contador al parrafo
        contador++;
        p.textContent = `Numero de click sobre el boton: ${contador}`;
        body.style.backgroundColor = 'yellow';
    }
    // Si el usuario hace click en el boton limpiar
    if (event.target.id === 'limpiar') {
        contador = 0;
        p.textContent = '';
        body.style.backgroundColor = 'white';
    }
}

// Una vez creada la funcion manejadora del evento, se la asignamos
header.addEventListener('click', headerClickHandler)