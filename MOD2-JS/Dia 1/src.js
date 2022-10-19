// Comentario en linea

/* Podemos crear 
comentarios en bloque
tiene varias lineas */

/* ----------------- */
'use strict'; /* el modo escrito nos obliga a delcarar las variables */
// MANERAS DE DEFINIR UNA VARIABLE
// console.log() nos va a permitir mostrar por consola textos, numeros, variable,etc
console.log('Hola Mundo')

// DECLARAMOS UNA VARIABLE CON 'let' de nombre numero y su valor es 9
let numero = 9;

//Declaramos una variable 'const' llamada nombre y con valor 'Manuel'
const nombre = 'Manuel';

//Modificamos el valor de la variable numero
numero = 18;

//Mostramos por consola el valor de la variable numero
console.log(numero)

//Intentamos modificar el valor de la variable constante 'nombre'
// nombre = 'Adriana' no se puede porque es constante

//Mostramos el valor de la variable constante 'nombre'
console.log(nombre);

/* let nombre = 'Eric';

console.log(nombre)
 */

/* --------------------------- */

/* 

#######################################
######COMO NOMBRAR UNA VARIABLE #######
#######################################

*/

//CLEAN CODE -> es todo aqul codigo que se puede leer y entender

//MAL

const t = 999888844; // solo una letra
const teléfono = 999888444; // no deben de llevar tildes

// const numero de telefono = 999888666 no podemos declarar variable cuyo nombre este separado por espacios

//BIEN
const tel = 999888666;
const telefono = 999888666;
const numero_de_telefono = 999888666;

//LA MEJOR MANERA
const numeroTelefono = 999888666; // Los nombres deben ser descriptivos