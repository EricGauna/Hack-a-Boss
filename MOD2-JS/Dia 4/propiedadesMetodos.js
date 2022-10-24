`use strict`;

// PROPIEDADES

///Son los datos que tiene un objeto

const miString = 'Hola Mundo';// pertenece al objeto string

console.log(miString.length)// Length es una propiedad del objeto String

const usuario = {
    nombre: 'Ana',
    edad: 45,
};

console.log(usuario.edad);//edad es una propiedad del objeto de usuario

// MÉTODOS
/// Los metoso son funciones almacenadas dentro de un objeto

const HelloWorld = {
    name: 'objeto',
    edad: 452,
    sayHello: function () {
        // Aqui va el codigo del metodo
        console.log('Hola mundo!');
        
    }
};

// Accedmos al método sayHello del objeto HelloWorld
HelloWorld.sayHello(); // Los parentesis al final indican que se ejecute la funcion

// Metodo random() perteneciente al objeto Math
console.log(Math.random());

// Métodos de la clase object

// Object.keys():

const claves = Object.keys(HelloWorld)

console.log(claves);

// Object.values():
// Devuelve un array con los valores de cada una de las propiedades del objeto
const values = Object.values(HelloWorld);

console.log(values);


// Object.entries():
// Es una combinacion de las 2 anteriores
// Devuelve un array con los valores y los nombres de las propiedades

const entries = Object.entries(HelloWorld)
console.log(entries);
