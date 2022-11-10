'use strict';


/* 

    #########################################
    ####### Delegacion de Eventos ###########
    #########################################

    
    
*/

const boton = document.querySelector('button.add');
const listItems = document.querySelector('ul');

let contador = 0;
function addButtonClickHandler() {
    // Crearmos un li
    const li = document.createElement('li');

    // Añadimos un contenido a la lista
    li.textContent = `Item ${contador++}`

    // Creamos el boton que se encargara de eminar un li
    const deleteButton = document.createElement('button');

    // Añadimos un texto al boton
    deleteButton.textContent = 'X';

    // PAra oidentificar este boton de borrado añadimos la clase 'delete'
    deleteButton.classList.add('delete');

    li.append(deleteButton);

        // Añadimos el li a la lista
    listItems.append(li);
    
}

// Asignamos la funcion manejadora al eventLiustener sobre el boton de añadir
boton.addEventListener('click', addButtonClickHandler);

/*                                      IMPORTANTE!!!!!!!!!!!!

    Si queremos añadir un evento al boton de delete, no podemos hacerlo porque no existe
    en el HTML "original", es un elemento que creamos nosotros desde JS 
    
    La unica manera seria asignando un evento a un elemtno padre que si aparezca en el html
    y con la delegacion de eventos asegurarnos que solamente se ejecuta sobre ese boton
    
*/

// Creamos la funcion manejadora del evento click que eliminara un li(list item)
function deleteHandle(event) {
    // Usando el objeto evento, buscaremos el boton de borrado dentro del ul

    // Para hacer esto mas sencillo vamos a hacer un destructuring del target
    const { target } = event;
    // Esto es igual a event.target
    // matches()
    // Si hacemos click sobre un boton con la clase delete
    if (target.matches('button.delete')) {
        // Si hacemos click sobre un boton con clase delete queremos eliminar su li
        const item = target.parentElement;

        item.remove();
    }
    
}

// Se asigna al unico elemento que podemos seleccionar desde js
listItems.addEventListener('click', deleteHandle)



