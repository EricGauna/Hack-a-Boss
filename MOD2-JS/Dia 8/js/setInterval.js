'use strict';

/*

    #######################################
    ############## ASINCRONIA #############
    ####################################### 

    Que es la sincronia?
    Todo codigo se ejecuta en orden, de ariba a abajo

    setTimeout() es un método asíncrono, quiere decir que se va a 
    ejecutar después

    Las api, cuando se consumen por Javascript son tambien asíncronas.

*/

/* 
    setInterval()
        las acciones que se indiquen en el callback de setInterval se repiten
        en el tiempo que indiquemos
    
*/

// Creamos un contador que se suma de 1 en 1
let contador = 0;

// Es importante guardar el setInterval en una variable, ya que sino no podemos pararlo

const intervalo = setInterval(() => {
    console.log(contador);
    contador++;// suma 1 al contador
}, 1000); // cada segundo

//clearInterval() -> detiene un intervalo que indiquemos entre paréntesis

setTimeout(() => {
    clearInterval(intervalo); // Detenemos el intervalo
    console.log('Hemos detenido el intervalo');
}, 11000);

// Tambien podemos detener el intervalo dentro del mismo

let contador2 = 0;

const intervalo2 = setInterval(() => {
    console.log(contador2);
    contador2++;
    if (contador2 > 10) {
        clearInterval(intervalo2);
        console.log('Hemos detenido el tiempo');
    }
}, 1000);


// síncrono  -> el if es códgio síncrono por lo tanto se ejecuta 1 vez y antes del setInterval
// por lo que el contador es siempre 0 y eso es menor de 10


