' use strict';
/* 
##################################
###METDODOS FUNCIONALES DE ARRAY##
##################################
 */

/* 
##################################
#############SORT#################
##################################

Nos permite ordenar arrays por orden alfabetico
ORDENA POR STRING(orden alfabetico)
*/

const numeros = [2, 10, 5, 8, 25];

console.log(numeros);

const frutas = ['Manzana', 'Naranja', 'Melón', 'Frambuesa', 'Sandía'];

console.log(frutas);

// Orden alfabetico
console.log(frutas.sort());
// Orden Reverso
console.log(frutas.sort().reverse());

// Ordenamos el array de numeros
console.log(numeros.sort((a, b) => a - b));


