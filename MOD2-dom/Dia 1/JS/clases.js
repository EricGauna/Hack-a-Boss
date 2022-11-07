'use strict';


/* 


    #####################################
    ### MODIFICANDO Y AÑADIENDO CLASES ##
    #####################################

    Vincular archivo CSS y JS


*/

// Vamos a seleccionar todas las etiquetas <li>
const elementoLi = document.querySelectorAll('li');
console.log(elementoLi);

for (const elemento of elementoLi) {
    console.log(elemento);
};

const body = document.querySelector('body');

// Agregar una clase
body.classList.add('dark');
// Añadimos otra clase
body.classList.add('grande');

// Eliminar una clase
body.classList.remove('grande');

// Agregamos una clase a un elemento si no la tiene, y si la tiene la quita
// body.classList.toggle('light');

const intervalo = setInterval(() => {
    body.classList.toggle('light');
}, 2000);

setTimeout(() => {
    clearInterval(intervalo)
}, 5000);

// Metodo que comprueba si existe una clase. Devuelve true o false
console.log(`Contiene el body la clase dark? ${body.classList.contains('dark')}`);

// Reemplazar una clase por otra
// Reemplazamos la clase dark del body por light
body.classList.replace('dark', 'light');

/* 
    Vamos a jugar con los <li>, estos estan guardaos en un array
    elementoLi y se comporta como tal, si queremos al primer li seria
    elementosLi[0] 
    
    Sabiendo esto, interactua con las clases:
    1. Añade a los li posicion0, 2 y 6 la clase dark
    
    2. Añade la clase grande a los li 2 y 4
    
    3. Elimina la clase dark del li en posicion o.
    
    4. Si tiene la clase light el li 2 añadela, sino quitala.
    
*/

