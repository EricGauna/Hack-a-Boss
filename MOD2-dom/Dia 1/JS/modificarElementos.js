'use strict';

/* 


    ##########################
    ### Modificar Elementos ##
    ##########################

    Para modificar elementos debemos seleccionarlo previamente

*/

const titulo = document.querySelector('h1');
console.log(titulo);

// Leer el contenido de la etiqueta
console.log(titulo.textContent); 

// Podemos modificarlo
titulo.textContent = 'Hemos modificado el titulo'

// Creamos un pequeño temporizaror para modificar el titulo
setTimeout(() => {
    titulo.textContent = 'Titulo modificado despues de 2 segundos'
}, 2000) // Modificamos despues de 2 segundos

const subtitulo = document.querySelector('header > h2')
console.log(subtitulo);

// Con la propiedad textContent modificamos el contenido de la etiqueta
// por texto, no lee etiquetas, solo lee texto

subtitulo.textContent = 'Ahora tiene <strong> algo en negrita</strong>';

// Si queremos modificar el contenido de la etiqueta usando etiquetas dentro
// debemos hacer uso de la propiedad innerHTML

const h3 = document.querySelector('h3');
h3.innerHTML = 'Modificamos y añadimos <em>algo en cursiva</em>';

setTimeout(() => {
    subtitulo.innerHTML = `
    <em>Cursiva</em> es en lo que esta este <a href="http://google.com">enlace</a>`
    titulo.textContent = 'Titulo modificado despues de 2 segundos'
}, 5000)

// Eliminar contenido con innerHTML


// Seleccionamos la seccion de la pagina para eliminar su contenido
const section = document.querySelector('section')
console.log(section);


section.innerHTML = '';
// Eliminamos a los 3 seg

/* setTimeout(() => {
    section.innerHTML = ``;
}, 3000) */

// añadimos a la section una imagen desde javaScript
section.innerHTML = '<img src="http://source.unsplash.com/200x400" alt="imagen"></img>'

// outherHTML Modifica la propia etiqueta junto al contenido

const listaOrdenada = document.querySelector('ol');
console.log(listaOrdenada);

// innerHTML modifica únicamentesu contenido y las etiquetas hijas 
listaOrdenada.innerHTML = `
<li>Modifico el Elemento 1</li>
<li>Modifico el Elemento 2</li>`;

// outerHTML inlcuye tambien la propia etiqueta, y el contenido
listaOrdenada.outerHTML = `
<h4>Titulo añadido por JS con un <span>span</span></h4>`;

// si se modifican las etiquetas, reciben las reglas de css

/* 
    textContent -> modifica en TEXTO el contenido */