'use strict';

/*  Si una condicion es true, ejecuta el codigo que esta entre parentesis */
/* if (condicion) {
    codigo}
*/

let edad = 14
let edad1 = 18

// Si el usuario es mayor de edad,le permitimos ver pelis de terror

if (edad >= 18) {
    console.log('Puedes ver las peliculas de terror');
}

// ELSE
// Si no se da la condicion del if, ejecutara lo que tenga entre parentesis el else

if (edad1 >= 18) {
    console.log('Puedes ver las peliculas de terror');
} else {
    console.log('Lo siento eres muy joven para ver las peliculas de terror');
}

if (edad >= 18) {
    console.log('Puedes ver las peliculas de terror');
} else {
    console.log('Lo siento eres muy joven para ver las peliculas de terror');
}

// ELSE IF

if (edad >= 18) {
    console.log('Puedes ver las peliculas de terror');
} else if (edad >= 14) {
    console.log('No puedes ver las pelis de terror pero puedes ver la patrulla canina');
} else if (edad >= 10) {
    console.log('Lo siento pero eres muy niño');
}

console.log('Sigo leyendo javaScript');