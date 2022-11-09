'use strict';

/* 

    #################################################
    #### Crear y Borrar Elementos desde JavaScript###
    #################################################
    
*/

const ul = document.querySelector('ul');

console.log(ul);

// Creamos un nuevo elemento desde JavaScript
const newLi = document.createElement('li');

console.log(newLi);

// Como elemento html
newLi.textContent = 'Holi, soy nuevo <3';
console.log(newLi);

/// Añadimos el elemento creado al HTML

// Al final del ul( como ultimo hijo)
ul.append(newLi);

// Al inicio del ul(como primer hijo)
// como el newLi ya esta añadido previamente, simplemente lo mueve al inicio
ul.prepend(newLi);

// Eliminar el elemento
// newLi.remove();

/* 

    ###############################
    #### Añadir varios elementos###
    ###############################
    
    Añadir elementos por separado,ralentiza javascript, es mas comodo y rapido añadir
    varios elementos a la vez
*/

const colores = ['balnco', 'azul', 'violeta', 'negro'];

// Vams a crear un fragmento al cual añadimos todos los li para finalmente
// volcar una única vez todos los li sobre el html

// Crear un fragmento
const frag = document.createDocumentFragment();

for (const color of colores) {
    // Crear el li
    const li = document.createElement('li');
    // Añadimos el contenido al li
    li.textContent = color;

    // Añadimos el li al fragmento
    frag.append(li);
}

// Usamos el fragmento, que contiene todos los li que hemos creado
// para añadirlo de una sola vez a la lista
ul.append(frag);
