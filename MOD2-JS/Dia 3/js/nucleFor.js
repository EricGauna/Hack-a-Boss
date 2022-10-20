`use strict`;

/*  BUCLE FOR */

/* FOR (Declaracion de un contador ; condicion; modificacion del contador) */

/* Mientras la condicion indicadad sea verdad
se ejecuta todo el codigo*/

// suma de 1 en 1
for (let i = 0; i < 10; i++) {
    console.log((`El valor del contador es ${i}`));
}
    console.log(`--------------for de 2 en 2-----------------`);
/*  Creamos otro bucle que va de 2 en 2 */
for (let i = 10; i < 20; i+=2) {
    console.log(`El valor del contador es ${i}`);
    
}

/* bucle que resta */
console.log(`Bucle for que resta`);

for (let i = 20; i > 10; i -= 2) {
    console.log(`El valor del contador es ${i}`);
    
    
}

// Todo codigo escrito debajo de los bucles se ejecuta cuando estos terminan


console.log(`Break, detiene el bucle`);

for (let i = 1; i < 10; i++) {
    if (i === 5) {
        console.log(`Contador ${i}! Deteniendo bucle...`);
        break;//para el bucle
    }

    console.log(`El valor del contador es ${i}`);
}

console.log(`Continue, salta una vuelta del bucle`);