/* --------EJERCICIO CONDICIONALES

VAMOS A TENER 3 VARIABLES: 2 NUMEROS Y 1 DE OPERADOR(STRING)*/

let numeroA = 10;
let numeroB = 2;
let operador = "suma";

let numeroC = prompt(`Indica el valor para el numero 1:`);
let numeroD = prompt(`Indica el valor para el numero 2:`);
let operadorA = prompt(`Indica la operacion a realizar:`);

switch (operador) {
    case "suma":
        console.log(`${numeroC} sumado a ${numeroD} es igual a ${numeroC + numeroD}`);
        break;
    case "resta":
        console.log(
            `${numeroC} restado a ${numeroD} es igual a ${numeroC - numeroD
            }`
        );
        break;
    case "division":
        console.log(
            `${numeroC} dividido a ${numeroD} es igual a ${numeroC / numeroD
            }`
        );
        break;
    case "multiplicacion":
        console.log(
            `${numeroC} multiplicado a ${numeroD} es igual a ${numeroC * numeroD
            }`
        );
        break;
    default:
        console.log(`El operador no es valido`);
        break;
}

console.log(`----------IF----------`);

if (operador === `suma`) {
    console.log(
        `${numeroA} mas ${numeroB} es ${numeroA + numeroB}`
    );
}

