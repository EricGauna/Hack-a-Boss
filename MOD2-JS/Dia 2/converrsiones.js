'use strict';


/*------------ Conversiones-------- */

// Convertir una variable de tipo String a tipo Number

let miNumero = '10.5';
console.log(typeof miNumero);

// parseInt() -> numero entero(sin decimales)

console.log(parseInt(miNumero));
console.log(typeof parseInt(miNumero));

// parseFlotat () -> numero con decimales
console.log(parseFloat(miNumero));
console.log(typeof parseFloat(miNumero));

// Number() -> convierte un string a un numero
console.log(Number(miNumero));
console.log(typeof Number(miNumero));

// Que pasa si intento convertiruna cadena de texto que no es un numero
let text = 'hola'
console.log(Number(text)); // NaN-> not a Number

// isNaN -> devolvera true si lo que queremos convertir va a dar un NaN
console.log(isNaN(miNumero));

/* --------------------------------- */

// Convertimos una variable tipo Number a String
let numero = 24.85;
console.log(typeof numero);

// toString() -> metodo que convierte una variable a un String
console.log(numero.toString());
console.log(typeof numero.toString());

// CORRECION DE TIPOS

// Javascript hacec automaticamente las conversiones que necesita
console.log('10' - '5');

// Con 2 textos y un numero en medio convierte el numero a texto
console.log('Tono tiene ' + 51 + ' años.');

// Concatena, el simbolo '+ sirve para concatenar
console.log('2' + 2);

// Podemos restarlos
console.log('2' - 2);