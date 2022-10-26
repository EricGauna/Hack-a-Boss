'use strict';

/* 

########################################
########RECORRER ARRAYS#################
########################################

*/

const colores = ['blanco', 'gris', 'verde', 'azul', 'negro'];

console.log(colores[2]);


///////// Bucle normal
for (let i = 0; i < colores.length; i++) {
    // el contador (i) nos sirve para poder acceder a cada posicion del array
    console.log(i);
    // i empieza valiendo 0 y en cada vuelta se suma 1
    console.log(colores[i]);
}

////// BUCLE FOR ...OF
/// Solo se puede utilizar para arrays

for (const color of colores) {
    // la variable color tomará  el valor de cada uno de los 
    //elemetos dela rray colores, se puede asignar el nombre que se necesite
    //remplazando 'color'
    console.log(color);
}

// Ejemplos:
const numeros = [2, 10, 5, 8];
// VAmos a guardar en un nuevo array una modificacion del array numeros
// en la cual multiplicamos cada valor por 10
// declaramos el array numeros para acceder a cada uno de sus valores por separado
const resultado = []

for (const numero of numeros) {
    resultado.push(numero * 10);
}
// Mostramos el resultado por consola
console.log(resultado);
