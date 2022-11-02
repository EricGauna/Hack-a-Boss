' use strict';
/* 
##################################
###METDODOS FUNCIONALES DE ARRAY##
##################################
 */

/* 
##################################
#############FIND#################
##################################

 Devuelve el primer elemento del array que cumpla la condicion indicada en el callback
*/

const numeros = [2, 10, 8, 25, 8, 4];

//Busca un numero en el array de "numeros " que sea mayor de 6

console.log(numeros.find((numero) => numero > 6));

// Si queremos devolver TODOS los elementos que cumplan una condicion
// usariamos el metodo FILTER()

// Busca un número en el array de numeros que sea mayor de 100

console.log(numeros.find((numero) => numero > 100));
// Si mp encuentra nada, devuelve un undefined

const usuarios = [
    {
        nombre: 'Zoe',
        edad: 27,
    },
    {
        nombre: 'Samu',
        edad: 17,
    },
    {
        nombre: 'Pepe',
        edad: 35,
    },
    {
        nombre: 'David',
        edad: 20,
    },
    {
        nombre: 'Maria',
        edad: 28,
    },
     
];

const buscamosDavid = usuarios.find((usuario) => usuario.nombre === 'David')

console.log(buscamosDavid);