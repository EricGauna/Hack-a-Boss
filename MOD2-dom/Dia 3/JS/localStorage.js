'use strict';

/* 

    ###################################
    #### LOCAL STORAGE ################
    ###################################
    
    Nos sirve para almacenar ciertos datos en el almacenamiento en 
    local del navegador


*/


/////// GUARDAR DATOS EN EL LOCALSTORAGE
// Para guardar un dato en el local Storage hay que indicarle una clave(key)
// junto al valor, que sera el dato que queremos introducir

localStorage.setItem('clave', 'valor de prueba');

// Si la clave(key) no existe previamente, la crea
localStorage.setItem('clave', 'valor de prueba2')

// Si si existe, sobreescribe su valor

// ejemplo: un intervalo 

setInterval(() => {
    // Creamos un numero aleatorio
    const numeroAleatorio = Math.round(Math.random() * 10);
    
    // Lo guardamos en el localStorage
    localStorage.setItem('numero', numeroAleatorio);
    // Como ya existe la clave "numero" en localStorage, sobreescribe su valor
    // cada vez que ejecuta el intervalo
}, 5000);

// Guardamos en localStorage un array de objetos
// es necesario convertirlo a un texto JSON para poder guardalo en localStorage
const usuarios = [
    {
        nombre: 'Samuel',
        edad: 34
    },
    {
        nombre: 'Eduardo',
        edad: 32
    }
]

// Debemos convertirlo el array de objetos a un string usando JSON
localStorage.setItem('usuarios', JSON.stringify(usuarios))

/* ------------------------------------ */

/// RECUPERAR DATOS
// Recuperamos el valor guardado en localStorage, si hemos indicado un array de objetos
// debemos de convertirlo de nuevo a un texto JS
const prueba = JSON.parse(localStorage.getItem('usuarios'))

console.log(prueba);
// Esto sigue funcionando correctamente
for (const usuario of usuarios) {
    console.log(usuario);
}

// Seleccionamos el boton

const botonGuardar = document.querySelector('button#guardar');
const input = document.querySelector('input');
const botonRecuperar = document.querySelector('button#recuperar');
const sectionParrafos = document.querySelector('section');

// Cuando el usuario haga click en el boton guardar vamos a recuperar 
// el valor del input y lo guardamos en el local storage 
function botoGuardarClickHandle() {
    localStorage.setItem('frase', input.value);
    // Una vez guardamos el valor, limpiamos el input
    input.value = '';
}

// Funcion botonRecuperar
function botonRecuperarClickHandle() {
    // Recuperamos la "frase" guardad en el localStorage
    const frase = localStorage.getItem('frase');
    // Crear un parrafo
    const p = document.createElement('p');
    // Asignamos contenido a ese parrafo
    p.textContent = frase;
    // Añadimos a la section el parrafo creado
    sectionParrafos.append(p);
    
}
botonRecuperar.addEventListener('click', botonRecuperarClickHandle)

botonGuardar.addEventListener('click', botoGuardarClickHandle)

