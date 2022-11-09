'use strict';

/* 

    ################
    #### Eventos ###
    ################
    
    Para poder aplicar un evento,seleccionamos el elemento
*/


////////// MÉTODO ANTIGUO

const boton = document.querySelector('#antiguo');
const body = document.querySelector('body');

// Existe una propiedad por cada evento qque tenemos
boton.onclick = () => {
    // Aqui se indica cuando haga click el usuario
    console.log('click');
    body.style.backgroundColor = `red`
}

// Pasar el raton por encima del boton
boton.onmouseover = () => {
    console.log('Has pasado el raton por encima del raton');
}

//////////// MÉTODO ACTUAL


/* 

    #######################
    #### Metodo moderno ###
    #######################
    
    Para poder aplicar un evento,seleccionamos el elemento
*/
const botonModerno = document.querySelector('#moderno');

// addEventListener() -> es un método que nos permite añadir un evento a un elemento
// este recibe 2 arguementos:
// -el evento
// -la funcion de callback que le indica que tiene que hacer cuando ocurra ese evento

botonModerno.addEventListener('click', () => {
    console.log('click moderno');
})

// La funcion de callback la podemos declarar previamente
// esto puede sernos util para poder eliminar el evento mas adelante
/* 
    Como se nombran estas funciones  listener
        - nombre del elemento al que se asigna est evento
        - nombre del evento
        -handler(manejador)

*/
function botonModernonoClickHandler() {
    console.log('otro click');;
    body.style.backgroundColor=`yellow`
    
}

// Creamos otro evento click sobre el botonModerno, aunque no suele ocurrir
botonModerno.addEventListener('click', botonModernonoClickHandler)

// Eliminar un listener(evento)
// el listener(evento) necesita tener la funcion de callback con nombre
botonModerno.removeEventListener('click', botonModernonoClickHandler);

const h1 = document.querySelector('h1');
// Vamos a crear un lisntener sobre el h1 para el evento de tener el raton encima
h1.addEventListener('mouseover', () => {
    h1.style.color = 'cyan';
    h1.textContent = 'Eventos Modificados';
});

// Siempre se recomienda crear el evento fuera, para poder 
// Creamos otro evento para cuando sacamos el raton encima del h1
function h1MouseLeaveHandler() {
    h1.style.color = 'red';
    h1.style.textAlign = 'center';
}

h1.addEventListener('mouseleave', h1MouseLeaveHandler)

// Los eventos declarados en funciones,se pueden reutilizar
botonModerno.addEventListener('mouseover', h1MouseLeaveHandler)

// Eliminamos el evento
// h1.removeEventListener('mouseleave', h1MouseLeaveHandler);
