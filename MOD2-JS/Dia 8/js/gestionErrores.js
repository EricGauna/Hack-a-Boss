'use strict';

/* 
    #######################################
    ####### GESTION DE ERRORES ############
    ####################################### 
    
    Para evitar que nuestro codigo se bloquee cuando encuentre un error
    trabajamos con las sentencias

    try{
        // Todo el codigo que se va a intentar ejecutar, pero que puede dar un error
    } catch (error,err)(se puede llamar de estas 2 formas){
        // Codigo que se ejecuta en caso de ocurrir un error en el try
    } finally(esta parte es opcional) {
        // Esto no se suele usar mucho, mas que nada en backend, conexiones con base de datos
        // Aqui va el codigo que se ejecutará siempre, ocurra o no el error
    }
*/

// vamos a crear una funcion suma que recibe 2 numeros por prompt
// en caso de que el usuario indique algo que no sea un numero(palabra por ejemplo)
// lanzaremos y gestionaremos ese error

/* prompt('Indica un numero') */
const suma = () => {
    try {
        const numero1 = prompt('Indica un 1º numero para sumar:');
        // Si el valor del prompt es texto, lanzaremos un error
        if (isNaN(numero1)) {
            // Hay 2 maneras,declarando el error, como const, o lanzandolo directamente
            /* const errorNumero = new Error('Debes indicar un numero');
            throw errorNumero; */

            throw new Error('Debes indicar un 1º numero');
        }

        const numero2 = prompt('Indica un 2º numero para sumar:');

        if (isNaN(numero2)) {
            // Hay 2 maneras,declarando el error, como const, o lanzandolo directamente
            /* const errorNumero = new Error('Debes indicar un numero');
            throw errorNumero; */

            throw new Error('Debes indicar un 2º numero');
        }
        // Retornamos la suma de los 2 numeros
        // Como el prompt lo que guarda es un STRING, debemos convertir antes el valor a un numero

        return Number(numero1) + Number(numero2);
    } catch (error) {
        console.error(error.message);

        // En caso de que ocurra un error podemos llamar de nuevo a la funcion suma()
        // Para que pida de nuevo los valores hasta que indiques un numero valido

        return suma(); // A esto se le denomina RECURSIVIDAD
    }
};

console.log(`La suma es: ${suma()}`);

console.log(`El error está gestionado y se puede seguir ejecutando código`);
// Llamamos a la funcion
/* suma(); */

