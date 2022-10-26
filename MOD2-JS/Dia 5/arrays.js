'use strict';

/* 

###################################
 ##########  ARRAYS  #############
###################################

*/

// Los arrays son una coleccion ordenada de valores, dentro, 
// pueden tener cualquier tipo de valor(numeros, strings, booleanbos, funciones)
// Cada uno de los valores ocupa una posicion del array 
// y estas posiciones empiezan contando desde 0

// Declaramos un array
const array = [];

// Creamos un array de colores 
const colores = ['negro','azul', 'verde', 'marron', 'blanco'];

// Lo mostramos por consola
console.log(colores);

// Para poder acceder a únicamente uno de los elementos
console.log(colores[1]);

// En los array tenemos acceso a la propiedad length, que devuelve
// la longituddel array(Empieza contando desde 1)
console.log(colores.length);

// Como acceder siempre a la ultima posicion del array
console.log(colores[colores.length - 1]);

// Si mostramos una poscion que no teine ningun valor asociado
console.log(colores[999]);//Undefinded

// Modificamos el valor de 'azul' por 'amarillo'
colores[1] = 'amarillo';
console.log(colores);

// Añadimos un valor nuevo al array
colores[6] = 'rosa';
// para añadir un valor al final del array
colores[colores.length] = 'morado';

console.log(colores);

// Si añadrimos un array en otra posicion, se crean arrays undefined
// para las posiciones vacias
colores[10] = 'cyan';
console.log(colores);

// Los array pueden estar formados por distintos de datos

const miArray = [20, 'Mi nombre', null, false, {
    modelo: 'Serie 1',
    marca: ' BMW',
}, 'verde', function () {
    console.log('Soy una funcion  dentro de un array.');
    }, ['podemos', 'indicar', ' otro array'],];

console.log(miArray);
    
// Modificamos la propiedad model del objeto dentro del array
miArray[4].modelo = 'Serie 3'
console.log(miArray);


// Modificamos la posicion 0 del array dentro de miArray
miArray[7][0] = 'Aqui podemos';
console.log(miArray);

// Guardamos en una variable la funcion del array
let variable = miArray[6]

// Llamamos a la funcion guardada
console.log(variable());

// Copiamos un array con el spread operator

const colores2 = [...colores];

console.log(colores2);