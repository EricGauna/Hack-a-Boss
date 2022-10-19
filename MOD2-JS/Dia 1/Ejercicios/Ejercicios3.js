/* 
Genera un número aleatorio entre 0 y 50 y guardarlo en una variable:

- Redondealo al alza y muestralo por consola.

- Redondealo a la baja y muestralo por consola.

- Redondealo de manera normal y muestralo por consola.

Genera otros 2 números aleatorios entre 0 y 20 y entre 15 y 40
y redondealos de manera normal guardalos en variables.

Usa los 3 numeros en total para mostrar cual es el mayor y cual el menor
(usa Math.max() y Math.min() para esto)
*/
'use strict'; 

const aleatorio =Math.random() * (50 - 0)
console.log('Redondeamos al alza : ', Math.ceil(aleatorio));
console.log('Redondeamos hacia abajo : ', Math.floor(aleatorio))
console.log('Redondeamos normal : ', Math.round(aleatorio));

let aleatorio1 = Math.round(Math.random() * (20 - 0))
let aleatorio2 = Math.round(Math.random() * (40 - 15) + 15)

console.log('El mayor de las variables : ',Math.max(aleatorio, aleatorio1, aleatorio2));
console.log('El menor de las variables : ',Math.min(aleatorio, aleatorio1, aleatorio2));