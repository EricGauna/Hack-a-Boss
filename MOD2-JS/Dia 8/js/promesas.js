'use strict';

/* 
    #########################
    #####PROMESAS############
    #########################

    Las promesas tienen 3 estados: 
    El estado inicial es siempre "pendiente"
    esto quiere decir que es asíncrona, tardara en "resolverse"
    Estado "Resuelto"  -> la promesa se resuelve correctamente, recibimos los datos BIEN
    Estado "Rechazada" -> la promesa ha fallado, no recibimos los datos correctos.

    Las promesas se pueden CREAR  pero lo que realmente nos interesa es
    TRABAJAR CON LAS PRROMESAS
*/

///// COMO TRABAJAMOS CON UNA PROMESA

/// Metodos .then() y catch() reciben una funcion de callback como argumento
//  y son muy parecidos al try y al catch que ya hemos visto
// .then() hace referencia a cuando la promesa se resuelve correctamente.
// .catch() cuando la promesa es rechazada


// Vamos a pedir unos datos a la api de rick y morty
// para hacer unas peticiones a apis externas

/* fetch('https://rickandmortyapi.com/api/character')
    // res hace referencia a la respuesta de la promesa
    .then((res) => res.json())// Siempre vamos a hacer esta linea para trabajar con las apis
    // res.json devuelve otra promesa
    .then((data) => console.log(data))// data es la respuesta de la api en formato objeto
    .catch((error) => console.error(error)); */

    