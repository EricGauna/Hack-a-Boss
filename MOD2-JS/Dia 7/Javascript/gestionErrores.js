' use strict';

/* 
    ##################################
    ########GESTIONAR ERRORES#########
    ##################################

    Para evitar que el codigo se bloquee cuando encuentra un error,
    debemos gestionar ese error

    Para ello se usan las sentencias try... catch... finally... (es opcional)

    Todo codigo que pueda fallar se deberia de meter en un try... catch

*/

try {
    // Todo código que debe "intentar" ejecutar y sabemos que puede devolver un error
    // Creamos un error
    const miError = new Error('Este es el mensaje de mi error personalizado');
// Un error hay que LANZARLO
    throw miError; 
} catch (error) {

    console.error(error);
    //podemos mostrar unicamente el mensaje
    console.log(error.message);
}

console.log(`En este caso el error esta gestionado`);