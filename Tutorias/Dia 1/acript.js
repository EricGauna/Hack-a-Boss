"use strict";

function calculadora(numeroA, numeroB, operador) {
  // Dentro de una funcion se puede ejecutar cualquier codigo javascript
  // Si la funcion encuentra un return, deja de leer codigo
  if (operador === "+") {
    return numeroA + numeroB;
  } else if (operador === "-") {
    return numeroA - numeroB;
  } else if (operador === "*") {
    return numeroA * numeroB;
  } else {
    // Si no se cumple ninguna condicion
    return "El operador no es válido";
  }
}

// Llamamos a la funcion

let resultado = calculadora(10, 20, "+");

console.log(resultado);

/////////

function recorrerBucle(numeroInicio, numeroFin) {
    let inicio = numeroInicio;
    let final = numeroFin;

  if (numeroInicio > numeroFin) inicio = numeroFin;
  final = numeroFin;

  // Creamos un bucle que ira desde el numero de inicio indicado como argumento
  // hasta el numero final
  for (let i = inicio; i <= final; i++) {
    console.log(i);
  }
}

//recorrerBucle(5, 20);

const colores = ['negro', 'blanco', 'azul', 'violeta'];

const usuarios = [
    {
        nombre: 'Manolito',
        email: 'manolita@gmail.com',
    
    },
    {
        nombre: 'Angeles',
        email: 'angeles@gmail.com',
    
    },
    {
        nombre: 'Rosalia',
        email: 'rosalia@gmail.com',
    
    },
    {
        nombre: 'Pepe',
        email: 'pepe@gmail.com',
    
    },
 
];
/* for (const color of colores) {
    console.log(color);
    
};
 */
// Crear una funcion que reciba un array, lo recorra y muestre por consola
function leerArray(array) {
    // Siempre crar array en blanco para poder acceder a los metodos de array
    let arrayResultado = [];

    for (const item of array) {

        // Si el tipo de dato que recibimos es un objeto
        if (typeof item === 'object') {
            for (const propiedad in item) {
                 console.log(item[propiedad]);
 
                // A mayores de mostralo por consola,añadimos al array cada 1 de sus valores
                arrayResultado.push(item[propiedad]);
            }
        }
       /*  console.log('');
        console.log(item); */
    }

    return arrayResultado

}

/* leerArray(colores);
leerArray(usuarios); */

const nuevoArray = leerArray(usuarios);
console.log(nuevoArray);

