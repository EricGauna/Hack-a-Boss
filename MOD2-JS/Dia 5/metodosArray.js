'use Strict';

/* 

    ################################
    #####MÉTODOS DE LOS ARRAY#######
    ################################
    
*/

const colores = ['blanco', 'negro', 'azul'];
console.log('Array iniciado:', colores);



// Push
// Añade un elemento/valor al FINAL de un array
colores.push('rosa');
console.log(colores);


// tambien podemos añadir una copia de otro array
const masColores = ['morado', 'gris'];
// Se necesitan los 3 puntos para añadir el contenido del Array,y no el array en si mismo.
colores.push(...masColores);
console.log(colores);

// UNSHIFT
//Añade un elemento/valor al inicio de un array
//OJO! con el UNSHIFT mnodificamos todas las posiciones del array

colores.unshift('verde');
console.log(colores);

// POP
// Hace 'pop!' y elemina el ÚLTIMO elemento del array
// Se puede hacer varios pop, y se van borrando consecutivamente
colores.pop();

console.log(colores);

//// SHIFT
// ELminar el primer elemento del array
//OJO! con el SHIFT mnodificamos todas las posiciones del array

colores.shift();
console.log(colores);

// SPLICE
// Sirve para eleminar o sistuir elemento de un array
// Hay que indicarle en que posicion empieza
// (opcional) cuantos elementos tiene que elimnar,si no indicamos nada,va hasta el final
// (opcional) que introduce

// Nos posicionamos en la posicion 1 del array, y borramos 2 elementos
/* colores.splice(1, 2) */
console.log(colores);

// Nos posicionamos en la poscion 1(color negro), elminamos 1 elementos(negro)
// añadimos en esa posicion el color 'rojo'
colores.splice(1, 0, 'rojo');
console.log(colores);
 

// SLICE
// Devuelve un trozo del array pero sin modificar el array original
// Se indica la posicion inicial(incluida) y la posicion final(NO INCLUIDA)

console.log(colores.slice(1, 3));
console.log(colores);

// Podemos guardar este trozo cortado en un array nuevo
const trozoColores = colores.slice(1, 3);
console.log(trozoColores);

// JOIN
// Convierte un array a un STRING
const letras = ['l', 'u', 'n', 'e', 's'];
console.log(letras.join(''));// no indicamos un seprador, quitando las comas, en este caso, que es lo predeterminado
console.log(letras.join());// el separador es la propia coma, porque no le indicamos separador
console.log(letras.join('🖕'));
console.log(colores.join(' '));

console.log(colores.slice(1, 3).join(' '));//Podemos conbinar metodos


// INDEXOF
// Devuelve la primera posicion que se encuentra, por orden
// Devuelve la posicion que ocupa el elemento de la busqueda
// debemos indicar el elemento exacto
colores.push('rojo')
console.log(colores.indexOf('rojo')); // Si lo encuentra devuelve la posicion del elemento

console.log(colores.indexOf('manuel'));// cuando no encuentra el elemtno devuelve un -1

if (colores.indexOf('manuel') === -1) {
    console.log('No existe un elemento manuel en el array colores');
}

// LAST INDEX OF
// Busca la ultima poscion de la coincidenca de la busqueda
// Devuelve la ultima posicion en la que aparece por ultima vez el valor
console.log(colores.lastIndexOf('rojo'));

// REVERSE
// Da la vuelta al array

console.log(colores);
console.log(colores.reverse());

// INCLUDES
// Devuelve true si el array contiene el elemento indicado y false si no

console.log(colores.includes('blanco'));
console.log(colores.includes('Manuel'));
