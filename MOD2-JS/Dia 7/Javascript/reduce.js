' use strict';
/* 
##################################
###METDODOS FUNCIONALES DE ARRAY##
##################################
 */


const numeros = [2, 6, 10, 24, 8];
console.log(`Array original`);;
console.log(numeros);

/* 
##################################
############REDUCE################
##################################

Tambien lo podriuamos llamar "acumular"
Lo que hace es aplicar una funcion "reductora" sobre cada elemento del array
y devuelve un unico elemento resultante, de acumularlos(este elemento puede ser
    un array, un numero,objeto...)

    La funcion de callback recibe como argumentos:

    - Un acumulador.
    - Cada elemento del array
    - El indice(index) opcional
*/

// Devolvemos el resultado de acumular todos los numeros de array "numeros"

const totalNumeros = numeros.reduce((aacumulador, numero) => { 
    return aacumulador + numero;
}, 0)

console.log('Resultado de acumular todos los numeros del array:', totalNumeros);

const sumarNumeros = numeros.reduce((acc, numero) => {
    acc.push(numero + 10);

    return acc;

    // Lo que hacemos es retornar en cada vuelta una copia del array acc
    // y una nueva posicion que va a ser el numero + 10
/*     return [...acc, numero + 10];
 */
}, [])

console.log(sumarNumeros);

const usuarios = [
    {
        nombre: 'Zoe',
        edad: 27,
    },
    {
        nombre: 'Samu',
        edad: 17,
    },
    {
        nombre: 'Pepe',
        edad: 35,
    },
    {
        nombre: 'David',
        edad: 20,
    },
    {
        nombre: 'Maria',
        edad: 28,
    },
     
];

const totalEdades = usuarios.reduce((acc, usuario) => {
    return acc + usuario.edad / usuarios.length
}, 0);

// Ambos dan el mismo resultado
/* console.log(totalEdades / usuarios.length); */

console.log(totalEdades)

const nombreUsuarios = usuarios.reduce((acc, usuario) => {
    acc.push(usuario.nombre);
    return acc;
}, [])

console.log(nombreUsuarios);