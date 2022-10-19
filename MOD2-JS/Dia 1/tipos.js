'use strict';

//Hacemos un console.log para ver si el archivo.js esta bien vinculado y se muestra por consola
console.log('Holas');

/* 

#############################
###TIPOS DE DATOS PRIMITIVOS#
#############################

*/

//typeof nos sirve para saber que tipo de datos es con el qestamos trabajando
//console.log(typeof valor/variable):

// NUMBER -> son para números
const numero = 2;

console.log(typeof numero)// que tipo de dato es la variable numero

// STRING -> es para cadenas de texto, debe ir SIEMPRE entre comillas, y se deben alternar, simples y dobles

const miNombre = 'Eric Gauna Cornejo';

console.log(typeof miNombre)

// Comprobamos el tipo de la variable numero y miNombre
console.log(typeof numero, typeof miNombre)

// Booleanos
// Es un tipo de dato que solamente recibe 2 valores: verdadero(true) o falso(false)

let verdadero = true;
let falso = false;
console.log(typeof verdadero, falso);

//// Undefinded
// Es lo que se asigna a las variables que no tienen un valor

let valorDesconocido;

console.log(valorDesconocido)

////Null
// representa un valor vacio, pero asignado a propósito

let valorVacio = null;

console.log(valorVacio)
console.log(typeof valorVacio)
// Si esta definido y el typeof lo reconoce como un objeto