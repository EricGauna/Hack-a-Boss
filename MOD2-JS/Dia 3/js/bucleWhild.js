`use strict`;

/* 

    while(condicion) {
        //codigo que se ejecuta MIENTRAS la condicion es TRUE
        

 */

let tiempo = 10;

while (tiempo > 0) {
    console.log(`Te quedan ${tiempo} horas de juego`);
    tiempo--;
}


////////////////////////////

let palabra;

while (palabra !== `parar`) {
    console.log(`La palabra no es "parar"`);
    palabra=prompt (`Indica una nueva palabra("parar" detiene el bucle)`)
}

console.log(`He detenido el bucle`);

let pass = prompt (`indica una password(entre 8 y 12 caracteres para finalizar bucle):`)

while (pass.length < 8 || pass.length > 12) {
    console.log(`${pass} tiene una longitud de ${pass.length} caracteres.`);

    pass = prompt (`indica una password(entre 8 y 12 caracteres para finalizar bucle)`)
    
    
}

console.log(`Bucle terminado. ${pass} tiene una longitud de ${pass.length} caracteres`);


let dado = Math.ceil(Math.random() * 6)//numero aleatorio entre 1 y 6

// mientras el valor del dado no sea 5,seguiremos intentando

while (dado !== 5) {
    console.log(`Has tirado dado y sacaste un ${dado}, intentalo de nuevo... :(`);
    dado = Math.ceil(Math.random() * 6)
}

console.log(`Enhorabuena! Has salido de casa. 
Valor del dado: ${dado}`);

/* ----------------------------------------------------------- */

let miPalabra= prompt (`Indicame la palabra ('STOP'):`)

let resultado = '';

//Mientras que el usuario no indique miPalabra 'STOP' vamos a concatenar
// todas las palabras que nos diga como resultado

while (miPalabra !== `STOP`) {

    //Si la palabra es distinta de stop la concatenamos al resultado
    // concatenamos al rsultado lo que guarda la varialbe miPalabra
    resultado += miPalabra + ' ';

    if (resultado.length < 1) {
        resultado += miPalabra;
    } else {
        resultado += ' ' + miPalabra
    }
    //Pedimos nueva palabra(si pone STOP paramos el bucle)
    miPalabra= prompt(`Indicame la palabra ('STOP'):`)
    
}

//una vez termina el bucle mostramos el resultado por pantalla
console.log(resultado);

/* ------------------------------------------------- */

// DO..... While
// La diferencia con el bucle es que do...while se ejecuta siempre minimo 1 vez

const age = 21;

//while nunca va a ejecutar esto porque no se cumple
while (age > 24) {
    console.log(`Tienes mas de 24 años`);
}

    //
    do {
        console.log(`Tienes mas de 24 años`);
    } while (age > 24);
