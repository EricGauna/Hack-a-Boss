'use strict';

/* 


    ##########################
    ### Modificar Atributos ##
    ##########################

    Siempre hay que seleccionar el elemento con el que queremos empezar

*/

const button = document.querySelector('button');
console.log(button);

const body = document.querySelector('body');
console.log(body);

// Añadir/ modificar atributos
// Añadimos el atributo disabled como true en el boton
button.setAttribute('disabled', true);

// añadimos una clase al boton
button.setAttribute('class', 'unico');

// modificar el atributo "type" a "reset"
button.setAttribute('type', 'reset');

// añadimos un identificador al boton
button.setAttribute('id', 'importante');

// obtenemos el valor de un atributo indicado
console.log(button.getAttribute('type'));
// Si no existe devuelve null
console.log(button.getAttribute('asda'));

// comprobar si un elemento tiene un atributo
console.log('Tiene el body el atributo "lang"?: ' + body.hasAttribute('lang'));

// Con esto podemos hacer condicionales

if (!body.hasAttribute('lang')) {
    // Si el elemento body no tiene el atributo lang
    // Lo añadimos
    body.setAttribute('lang', 'es');
}

console.log(body);
// Elminar un atributo
button.removeAttribute('disabled');
