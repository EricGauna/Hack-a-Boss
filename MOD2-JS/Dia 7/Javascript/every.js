' use strict';
/* 
##################################
###METDODOS FUNCIONALES DE ARRAY##
##################################
 */

/* 
##################################
#############SOME#################
##################################

 Es un método funcional de los array que se comporta de una mnanera muy parecida 
 al condicional AND
 Si TODOS de los elementos del array cumple una condicion devuelve un TRUE
 sino, FALSE

*/

const numeros = [2, 10, 5, 8, 20];

// TODOS  los elementos del array de numeros son menores de 10?
console.log(numeros.every((numero) => numero > 10));

// TODOS los elementos del array de numeros son menores de 40?
console.log(numeros.every((numero) => numero < 40));
