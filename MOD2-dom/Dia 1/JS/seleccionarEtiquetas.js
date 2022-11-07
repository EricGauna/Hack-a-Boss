'use strict';


/* 
    #################################
    #COMO SELECCIONAR ELEMENTOS HTML#
    #################################
    
    DOM ->  Document Object Model
    
    document es el objeto del cual accedemos a todos los elementos de la pagina
    
*/
console.log(document);

// Para seleccionar cualquier elemento hacemos uso del "querySelector"
// Si hay varios elementos con la misma clase, query, seleccionara el primer elemento
// que cumpla con la clase. Si no encuentra la etiqueta devuelve un null

const titulo = document.querySelector('h1');
const tituloNull = document.querySelector('h6');
console.log(titulo);
console.log(tituloNull);

// Podemos usar query Selector para seleccionar por clase
const subtituloHeader = document.querySelector('.subtitulo');// Seleccionamos clase con .
console.log(subtituloHeader);

// Por id
const sectionPrincipal = document.querySelector('#seccion-principal');
console.log(sectionPrincipal);

// Podemos usar cualquier selector tipo CSS

const parrafoMain = document.querySelector('main>p:first-child');
console.log(parrafoMain);

// Si queremos seleecionar TODOS los elementos(NODOS) que cumplan 
// un mismo selector, a esto se le llama lista de NODOS(NODELIST), un array
const claseSubtitulo = document.querySelectorAll('.subtitulo')
console.log(claseSubtitulo);

// La variable claseSubtitulo tiene una lista de (array) con todos los elementos
// del html que cumplen el selector indicado, podemos trabajar exactamente igual
// que cualquier array

for (const elemento of claseSubtitulo) {
    console.log(elemento);
};

/* -------------------------------------------- */

// Otros métodos para seleecionar elementos

// Podemos seleecionar por el tag(etiqueta)
const p = document.getElementsByTagName('p');
console.log(p);

// Selecionamos por clase
const subtitulo = document.getElementsByClassName('subtitulo');
console.log(subtitulo);

// Seleccionamos por ID
const id = document.getElementById('seccion-principal');
console.log(id);

/* ---------------------------------------------- */

/* 


    ##############################################################
    ### Seleccionar elementos a partir de los ya seleecionados ###
    ##############################################################

    

*/

// Seleccionamos la section con id=otra-seccion

const otraseccion = document.querySelector('#otra-seccion')
console.log(otraseccion);

const parrafoImportante = otraseccion.querySelector('.importante')
console.log(parrafoImportante);

// Es lo mismo hacer esto document.querySelector('#otra-seccion > .importante')

// A partir de la seccionPrincipal(seleccionada previamente) nos quedamos
// con su parrafo con clase subtitulo
const parrafoSubtitulo = sectionPrincipal.querySelector('.subtitulo');
console.log(parrafoSubtitulo);

// Seleccionamos el elemento padre del parrafo con clase importante
const padreParrafoImportante = parrafoImportante.parentElement;
console.log(padreParrafoImportante);

const header = titulo.parentElement;
console.log(header);

// Seleccionamos un hermano anterior del elemento
const hermanoAnterior = parrafoImportante.previousElementSibling;
console.log(hermanoAnterior);

/* 

    Propiedades para seleccionar

    .childen -> Todos los hijos
    .firstElementChild -> Primer hijo
    .lastElementChild -> ultimo hijo
    .previousElementSibling -> hermano anterior
    .nextElementSibling -> hermano siguiente
    .parentElement -> Padre directo

*/