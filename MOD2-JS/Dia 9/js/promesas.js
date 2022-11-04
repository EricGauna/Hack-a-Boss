'use strict';

/* 

    #######################################
    ############## PROMISES ###############
    ####################################### 
  
    Las promesas son datos que provienen de un lugar externo y pueden tardar
    un poco mas en resolverse, son asíncronos.

    Tienen 3 estados:
        - Pendiente: (por defecto)
        - Resuelto: (recibimos los datos correctamente)
        - Reject:   (ha ocurrido un error)
*/

const recetas = [
    {
        nombre: 'Tarta de queso',
        tipo: 'postre',
    },
    {
        nombre: 'Churrasco',
        tipo: 'carnes',
    },
    {
        nombre: 'Sushi',
        tipo: 'postre',
    },
    {
        nombre: 'Tiramisú',
        tipo: 'postre',
    },
    
];

/* function getRecetas() {
    return recetas;
} */

// Simulamos que estamos haciendo una peticion a un api
// Y tarda un poco en resolver la peticion
function getRecetas() {
    setTimeout(() => {
        return recetas;
    }, 1500);
};

console.log(getRecetas());
