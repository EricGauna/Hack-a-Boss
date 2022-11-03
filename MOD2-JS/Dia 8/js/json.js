'use strict';

/* 
/* 
    #######################################
    ############## JSON ###################
    ####################################### 
  
    JAVASCRIPT OBJECT NOTATION -> Anotacion de objetos de Javascript
    JSON representa objetos(y otros valores) de JS pero en formato de texto
    Nosotros debemos convertir este formato JSON (texto) a Javascript

    Es el formato en el que se muestran las API REST
    Una api es una base de datos.
*/

//////  Convertir objetos JavaScript a JSON

const user = {
    name: 'Usuario',
    lastName: 'Prueba',
    age: 29,
    pets: ['Croquetita', 'Lupo', 'Tuti'],
};

// Convertimos el objeto user a JSON (TEXTO)= JSON.stringify()
const userJSON = JSON.stringify(user);

console.log(userJSON);

// Convertimos el objeto JSON  a objeto JavaScript= JSON.parse()
const userJS = JSON.parse(userJSON);

console.log(userJS);

// El JSON nos servia para hacer copias profundas
// Esto requiere de 2 pasos

const userCopiaJSON = JSON.stringify(user);
console.log(userCopiaJSON);

const userCopianJS = JSON.parse(userCopiaJSON);
console.log(userCopianJS);

// Pero se puede simplificar

const userCopia = JSON.parse(JSON.stringify(user));
console.log(userCopia);

// Se pueden modificar variables
userCopia.pets[1] = 'Denver';
console.log(userCopia);

// El JSON tambien nos puede servir para comparar arrays

const colores = ['negro', 'verde', 'rosa'];
const colores2 = ['negro', 'verde', 'rosa'];

// Podemos convertir los array a texto para compararlos de manera extricta como un string normal
// siempre puede comparar texto, no variables
console.log(JSON.stringify(colores)=== JSON.stringify(colores2));