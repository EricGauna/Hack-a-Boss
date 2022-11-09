'use strict';

/* 

    #######################
    #### EVENT BUBBLING ###
    #######################

    Eventos que se ejecutan de hijos a padres
    
*/

////// Con bubbling
const ulBubbling = document.querySelector('ul#con-bubbling');
const allBubbling = document.querySelectorAll('ul#con-bubbling li');

// Creamos un evento para cuando hace click sobre el ulBubbling
ulBubbling.addEventListener('click', () => {
    
    console.log('hiciste click en el ul');
});

for (const li of allBubbling) {
    li.addEventListener('click', () => {
        console.log('has hecho click en el li');
    })
    
};

////////// Sin bubbling

const ulSinBubbling = document.querySelector('ul#sin-bubbling');
const allSinBubbling = document.querySelectorAll('ul#sin-bubbling li');

ulSinBubbling.addEventListener('click', () => {
    console.log('hiciste click en el ul');
});

// Recorremos el array de lis para poder acceder a cada uno de ellos
// y asignarles un evento de click
for (const li of allSinBubbling) {
    // Para evitar que el evento de click sobre el li, se propague a su padre (ul)
    // nos hace falta el objeto event, ya que existe un método que evita este comportamiento
    li.addEventListener('click', (event) => {
        // Evitamos que el evento click sobre el li se propague a sus etiquetas padres
        event.stopPropagation();
        console.log(`Hiciste click sobre el li`);
        
    })
}