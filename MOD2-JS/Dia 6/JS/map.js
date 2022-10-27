'use strict';

/* 

##############################################
######## METODOS FUNCIONALES DE ARRAY ########
##############################################

*/
// Son métodos que funcionan recibiendo una funcion de callback como argumento

const numeros = [2, 4, 10, 5, 3];

console.log(' Arrary Original');
console.log(numeros);

/* 

#################################
############ MAP() ##############
#################################

*/

// Devuelve un array de la misma longitud que el original PERO
// con sus valores modificados/transformados
// Esta funcion de callback recibe 2 argumentos:
// -El valor: que toma cada uno de los valores del array
// - El Índice(opcional): toma el indicie de la posicionb de cada elemento

// Declaramos la funcion de callback para el metodo map 
// de devolver el doble de cada numero


function mapCallback(valor, indice) {
    //se indica un return
    return valor * 2;
    
}
const dobleNumeros = numeros.map(mapCallback);
console.log(dobleNumeros);

// Aplicamos el metodo map al array de numeros  con una funcion callback en flecha
console.log('---TRIple');

// Cuando solamente ejecutamos una linea(que seria el retura)en la funcion flecha
// podemos indicar todo en la misma linea y quitar el returno y las llaves
const tripleNumeros = numeros.map((numero) => numero * 3);// return explicito

const tripleNumeros2 = numeros.map((valor) => {
    return valor * 4;
});
console.log(tripleNumeros);
console.log(tripleNumeros2);    

