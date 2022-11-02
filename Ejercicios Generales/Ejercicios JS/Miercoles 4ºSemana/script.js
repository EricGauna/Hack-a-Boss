'use strict';
/**
 *  #################
 *  ### Ejercicio ###
 *  #################
 *
 * Crea un array con la clasificación de una carrera
 *
 *  Un array ['Antonio', 'Maria', 'Juan', 'Carmen', 'Julia']
 *
 *  Vamos a suponer que este es el orden de la clasificacion de un evento
 *
 *  Durante el transcurso del mismo se modifican las siguientes posiciones
 *
 *  - Julia es eliminada del concurso.
 *  - Detras de Maria y antes de Juan se clasifica un nuevo concursante 'Ramon'
 *  - Descalifican a Antonio que iba lider hasta el momento
 *  - Se clasifica un nuevo concursante que pasa a ser el primero 'Antonia'
 *  - Al finalizar el concurso declaran que el orden va a ser el inverso, por lo que se da la vuelta a toooda la clasificacion
 *
 *  Imprime por pantalla el resultado de las modificaciones en el array de clasificacion.
 *
 *  EXTRA: Usa un bucle normal para mostrar por pantalla un console.log con la clasificación final.
 *  Ej:
 *      1. Julia
 *      2. Carmen.
 *      ...
 *      6. Antonia
 */

const carrera = ['Antonio', 'María', 'Juan', 'Carmen', 'Julia']

console.log(carrera);

carrera.pop();

console.log(carrera);

carrera.splice(2, 0, 'Ramón')

console.log(carrera);

carrera.shift();

console.log(carrera);

carrera.unshift('Antonia')

console.log(carrera);

carrera.reverse();

console.log(carrera); 


for (let i = 0; i < carrera.length; i++) {
   
    console.log(i +1+'º',carrera[i]);
  }
  


  /**
 * #################
 * ### Ejercicio ###
 * #################
 *
 * Crea un array con el valor [3, 4, 13, 5, 6, 8] y muestra por consola qué números
 * son pares y qué números son impares
 *
 * EXTRA: Haz lo mismo pero ahora indica cuales son primos y cuales no
 */

const numeros = [3, 4, 13, 5, 6, 8, 9]

for (const numero of numeros) {
    if (numero % 2 === 1) {
        console.log(numero, `este numero es primo`);
    } else {
        console.log(numero, `Este numero es par` );
    }
} 