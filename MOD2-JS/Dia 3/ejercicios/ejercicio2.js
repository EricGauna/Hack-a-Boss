'use strict';

/* 
    #########################
    ### EJERCICIOS BUCLES ###
    #########################
*/

// Crear un bucle que vaya de 0 a 100 incrementando de 10 en 10

// Crear un bucle que vaya de 50 a 30 de 1 en 1

// Crear un bucle que recorra los numeros del 1 al 10 y diga si es par o impar

// Crea un bucle que pida al usuario una frase y muestrala por pantalla
// si el usuario teclea 'salir' el bucle finalizará


for (let i = 0; i <= 100 ; i += 10 ) {
    console.log(`Contador ${i}`);
}

console.log(`------------------------------`);

for (let i = 50; i >= 30; i--){
    console.log(`Contador ${i}`);
}

console.log(`--------------------------------`);

for (let i = 1; i <= 10 ; i++ ) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
}


let frase;

while (frase !== `salir`) {
    frase = prompt(`Escribe la frase que quieras, escribe "salir" para terminar.`)
    console.log(`Esta es tu frase: ${frase}`);
}