'use strict';

/* 
##############################
####CALLBACKS################# 
##############################

*/
// los callbacks son funciones que se pasan como argumento a otra funcion o método.

// Declarar una función llamada diHola
function diHola(params) {
    return 'hola';
}

// Si queremos ejecutar su contenido,debemos ejecutar esa funcion
console.log(diHola());

// Ejecutamos la funcion diHola() y asignamos el valor que devuelve a la variable saludo
let saludo = diHola();
console.log(saludo);

// Asignamos a la variable saludoFuncion la propia funcion diHola
let saludoFuncion = diHola;

// Creamos una funcion que recibe 2 números(a y b) y devuelve la suma de los mismos
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
function calcular(numA, numB, operacion) {
    return operacion(numA, numB)
}
let numeroA = 10;
let numeroB = 2;

console.log(calcular(10, 2, suma));
console.log(calcular(10, 2, resta));
console.log(calcular(numeroA, numeroB, multiplicacion));
console.log(calcular(10, 2, division));


function crearUsuario(nombre, edad) {
    return {
        name: nombre,
        age: edad,
    };
}

function crearFrase(nombre, edad, callback) {
    // Primero ejecutamos el callback para crear un usuario
    const user = callback(nombre, edad);
    return `Hola ${user.name} tienes ${user.age} años.`
}

console.log(crearFrase(`Juan`, 24, crearUsuario));
console.log(crearFrase(`Eric`, 34, crearUsuario));
console.log(crearFrase(`Juan`, 24, crearUsuario));
console.log(crearFrase(`31`, `manolo`, crearUsuario));