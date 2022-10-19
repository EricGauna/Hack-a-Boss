'use strict';

/* 
#################
####MATH#########
#################
Math es un objeto de javascriot con el cual podemos realizar 
ciertas funciones matemáticas (no operaciones)
*/

// REDONDEAR UN NUMERO
// AL ALZA: siempre hacia arrbia
// Math.ceil() -> Siempre hacia arriba
console.log(Math.ceil(1.2));

let numero = 2.5;
console.log(Math.ceil(numero))

// A la baja: siempre hacia abajo
// Math.floor() -> siempre hacia abajo
console.log('Redondeamos hacia abajo 1.2:', Math.floor(1.7))

// Redondear normal
// Math.round()
console.log('Redondeamos normal 1.2:',Math.round(1.2))

// Redondear con decimales
console.log('Redondeamos normal 2.5634:', Math.round(2.5634 * 100) / 100)

console.log('------------------------------')

// RETORNAR UN NUMERO ALEATORIO

// Math.random() -> Retorna un numero aleatorio entre 0 y 1

// Mostramos por consola un numero aleatorio entre 0 y 100
// luego lo redondeamos de una manera normal
console.log(Math.round(Math.random() * 20));

// Generar un numero aletorio entre 5 y 10
console.log(Math.round(Math.random() * (15 - 5) + 5))

// podemos guardarlo como una variable
let numeroAleatorioEntreDosValores = Math.round(Math.random() * (20 - 10) + 10)

// Mostramos por consola el valor de la variable
console.log(numeroAleatorioEntreDosValores)

// Retorna el valor maximo o minimo de una lista de numeros

// Retorna el valor maximo Math.max()
console.log(Math.max(7, 5, 8, 1, 4, numeroAleatorioEntreDosValores))

// Retorna el valor min Math.min()
console.log(Math.min(7, 5, 8, 1, 4, numeroAleatorioEntreDosValores))