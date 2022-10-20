"use strict";

/* ------------CONDICIONALES------------ */

/* IF (Condicion) {
    Codigo que se ejecuta si la condicion es TRUE
} */
let numero = 5;

if (5 > 3) {
  //si el valor de la variable numero es mayor de 3
  //ejecuta el codgio dentro de las llaves
  console.log(
    "El valor de la variable numero es mayor de 3"
  );

  // Declaramos una variable en ambito local {dentro de las llaves de if}
  // Solo funciona dentro de las llaves y no afecta a las variables generales del proyecto/pagina

  let nombre = "Manuel";

  console.log(`El nombre del ususario es ${nombre}`);
}

/*  Cuando una condicion no se cumple podemos comprobar otras 


ELSE IF

*/

let animal = `jajajaja`;

switch (animal) {
  case `toro`:
    // codigo que se ejecuta si el valor de la variable animal es toro
    console.log(`El valor del animal es toro`);
    break;
  case `tortuga`:
    // codigo que se ejecuta si el valor de la variable animal es toro
    console.log(`El valor del animal es tortuga`);
    break;
  case `delfin`:
    // codigo que se ejecuta si el valor de la variable animal es toro
    console.log(`El valor del animal es delfin`);
    break;
  default: // es como el else del is, se ejecuta cuando no se corresponde
    console.log(`Este animal no existe`);
    break;
}
