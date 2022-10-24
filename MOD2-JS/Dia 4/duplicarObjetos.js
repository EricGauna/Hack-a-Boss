'use strict';

/* 

#####################
###DUPLICAR OBJETOS##
#####################
   
*/

/* const usuario = {
    nombre: 'Juan',
    colores: [`rojo`, `verde`, `azul`],
    edad: 24,
}; */


// Esta no es la manera apropiada de reazlizar una copia,
// dado que se modifican ambos objetos, porque apuntan al objeto 
// original

/* const usuarioCopia = usuario;

console.log(usuario);
usuarioCopia.nombre = 'Adriana'
console.log(usuario);
 */

const usuario = {
    nombre: 'Juan',
    colores: [`rojo`, `verde`, `azul`],
    edad: 24,
    objetoPrueba:{
        propiedad1: 'Este es el valor original'
    }
};

/* 
       ##################
       ####SPREAD########
       ##################
       
*/
// Spread Operator(... nombreObjetoACopiar) 
// Sirve para realizar una copia poco profunda de un objeto
// Es poco profunda porque los arrays y objetos que son propiedad siguen apuntando 
// o estando vinculados al Objeto principal

// Solo se pueden modificar las propiedades básicas del objeto

// VAmos a clonar/copiar el objeto usando Spread
const usuarioCopiaSpread = {
    ...usuario,
    edad: 28//Podemos añadir propiedades o modificarlas directamente al copiarlas
};

console.log(usuarioCopiaSpread);

// Modificamos en la copiaUsuarioSpread la propiedad nombre
usuarioCopiaSpread.nombre = 'Carlos';
console.log(usuarioCopiaSpread);// Copia
console.log(usuario);

// Los arrya y Objetos siguen estando vinculados al objeto original
// Estos se modifican en ambos cuando cambiamos el valor de una posicion
usuarioCopiaSpread.colores[0] = 'amarillo';
console.log(usuario);


/* 

    ###############################
    ##COPIAR POR COMPLETO CON JSON#
    ###############################
    Se utiliza el JSON.parse y JSON.stringify para copiar

    JSON.string(objeto)-> Convertimos a un string(texto plano) el objeto
    JSON.parse(objeto en string)-> Volvemos a convertir a objeto JS en String recibido
    
*/

const usuarioJSON = JSON.parse(JSON.stringify(usuario))

// Los array y objetos ya no estan vinculados al objeto pricipal

usuarioJSON.colores[0] = 'gris';
usuarioJSON.objetoPrueba.propiedad1='JSON'

console.log(usuarioJSON);
console.log(usuario);