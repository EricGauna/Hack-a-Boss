'use strict';

/* ----------OPERADORES LOGICOS -------------*/

//Devuelven como resultado true o false(un valor booleano)

let numeroA = 10;
let numeroB = 4
let numeroC = 8
let numeroD = 4

// Comparacion estricta. === es igual?

console.log(numeroB === numeroD);// 4===4? true
console.log(numeroA === numeroD);// 10===4? false

// Diferencia estricta. !== es diferente?
console.log(numeroB !== numeroD);// 4!==4? False
console.log(numeroA !== numeroD);//  10!==4?false

// Mayor que >
console.log(numeroA > numeroB);//10>4?True
console.log(numeroD > numeroC);// 4>8?False

// Mayor o igual. >=
console.log(numeroB >= numeroD); // 4>=4?true
console.log(numeroB >= numeroC);// 4>=8?false

// Mayor que <
console.log(numeroA < numeroB);//10<4?false
console.log(numeroD < numeroC);// 4<8?true


// Menor o igual. <=
console.log(numeroB <= numeroD); // 4>=4?true
console.log(numeroB <= numeroC);// 4>=8?true



/* --------------PUERTAS LOGICAS------------- */

/* AND(&&) >- devuelve true si TODAS LAS CONDICIONES devuelven true */

console.log(10 > 5 && 7 === 7);//true & true

console.log(4 === 4 && 10 < 5);//true & false

/*  OR(||) -> DEVUELVE TRUE SI AL MENOS UNA DE LAS CONDICONES ES TRUE */

console.log('hola' === 'adios' || 5 > 1);//false||true -> True

///// Negacion
// Devuelve el valor booleano contrario(true o false)

console.log(!true)
console.log(!false);
/*  Se suele utilizar para buscar el error */






