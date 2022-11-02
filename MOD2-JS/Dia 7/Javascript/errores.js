' use strict';

/* 
##################################
#############ERRORES##############
##################################

 Para crear un error personalizado usamos la clase Error() de JS

*/

const miError = new Error('Este es el mensaje de mi error personalizado');

// A la variable de error que hemos creado podemos asignarle propiedades

miError.httpStatus = 404;

console.log(miError);

// Si queremos mostrar solo el mensaje
console.log(miError.message);

// Un error hay que LANZARLO

throw miError; // throw lanza el error, solo sirve para esto

// Una vez que se lanza un error(Uncaught) se deja de ejecutar JavaScript 
// y no se ejecuta nada de lo siguiente



