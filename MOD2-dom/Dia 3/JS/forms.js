'use strict';

/* 

    ########################
    #### FORMULARIOS #######
    ########################
    
    
*/

const form = document.querySelector('form#formulario');

// Propiedad de forms
const forms = document.forms; // Devuelve un array con todos los formularios del documento

// Seleccionar un formulario segun su id, esla mejor forma de seleccionar un formulario
const formulario = document.forms.formulario;

/// Seleccionar INPUT del formulario

// Metodo generico
const inputName = document.querySelector('input#nombre')

// Con la propiedad "elements" del formulario seleccionado
// Si selecciona de esta forma el input DEBE  tener un "name"

const nombre = form.elements.nombre;
const pass = form.elements.pass;
const email = form.elements.email;

console.log(form.elements.nombre);
console.log(form.elements.pass);


// Donde nos interesa acceder al valor de estos input es en el evento de "submit"
form.addEventListener('submit', (event) => {
    // El comportamiento por defecto de los formularios es recargar la pagina
    // Para ello usamos el objeto de "event"
    event.preventDefault(); // No recarga la pagina al enviar el formulario
    console.log(nombre.value);
    // Llamar aqui a la funcion, para comprobar la letra, que se creará fuera
    // checkLetter()

    // Una vez se reciba el valor del input, se RESETEA EL FORMULARIO
    form.reset();
})

/// Eventos de los input

// Evento para cuando cambia el valor del input
email.addEventListener('input', () => {
    // Mostramos por consola el valor de este input cada vez que cambia
    console.log(email.value);
})

// Evento para cuando el input pierde el foco
email.addEventListener('change',() => {
    console.log(`Valor del inpt: ${email.value}`);
})

/* -------------------------------------------------- */

// Cada vez que se envie el formulario recibiremos el usuario y contraseña y los mostramos en una lista

const listUsers = document.querySelector('ul');

// Creamos la funcion manejadora del evento submit del formulario
function formSubmitHandle(event) {
    event.preventDefault();

    // Creamos un nuevo li
    const li = document.createElement('li');

    //// Añadimos el contenido al ul
    // Creando una sublista de Li con el nombre y el pass del usuario
    li.innerHTML = `
    Usuario
        <ul>
        <li>${nombre.value}</li>
        <li>${pass.value}</li>
        </ul>`;
    
    // Añadimos el li a la lista seleccionada
    listUsers.append(li);

    // Reseteamos el formulario
    form.reset();
    
}

// Asignamos al eventListener del formulario la funcion manejadora del evento
formulario.addEventListener('submit', formSubmitHandle)
