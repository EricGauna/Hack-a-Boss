/* 
    EJERCICIO CONDICIONALES

  VAMOS A TENER 3 VARIABLES: 2 DE NÚMEROS Y 1 DE OPERADOR (STRING)
  DEPENDIENDO DEL OPERADOR HAREMOS LA OPERCIÓN CORRESPONDIENTE
  VAMOS A USAR SOLAMENTE SUMA, RESTA, MULTIPLICACION Y DIVISION
  QUIEN QUIERA QUE AÑADA EL RESTO
*/

// Crear la variable para el numero 1
let numeroA = Number(prompt('Indica el valor para el numero 1:'));

// Crear la variable para el numero 2
let numeroB = Number(prompt('Indica el valor para el numero 2:'));

// Crear la variable para el operador
let operador = prompt('Indica la operación a realizar:');

// Creamos el condicional
// En caso de que sea la suma, mostramos por consola numeroA + numeroB

console.log('--- SWITCH ---');

switch (operador) {
  case 'suma':
    console.log(
      `${numeroA} sumado a ${numeroB} es igual a ${numeroA + numeroB}`
    );
    break;

  case 'resta':
    console.log(`${numeroA} menos ${numeroB} es ${numeroA - numeroB}`);
    break;

  case 'multiplicacion':
    console.log(
      `${numeroA} multiplicado por ${numeroB} es ${numeroA * numeroB}`
    );
    break;

  case 'division':
    console.log(`${numeroA} dividido por ${numeroB} es ${numeroA / numeroB}`);
    break;

  default:
    console.log('El operador no es válido.');
    break;
}

console.log('');
console.log('--- IF ---');
// Solución con if

if (operador === 'suma') {
  console.log(`${numeroA} sumado a ${numeroB} es igual a ${numeroA + numeroB}`);
} else if (operador === 'resta') {
  console.log(`${numeroA} menos ${numeroB} es ${numeroA - numeroB}`);
} else if (operador === 'multiplicacion') {
  console.log(`${numeroA} multiplicado por ${numeroB} es ${numeroA * numeroB}`);
} else if (operador === 'division') {
  console.log(`${numeroA} dividido por ${numeroB} es ${numeroA / numeroB}`);
} else {
  console.log('El operador no es válido.');
}
