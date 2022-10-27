'use strict';


/* 

##############################################
######## METODOS FUNCIONALES DE ARRAY ########
##############################################

*/
// Son métodos que funcionan recibiendo una funcion de callback como argumento



/*  #######################
    ######### FILTRER #####
    #######################

*/

// Al igual que MAP(), crea un array nuevo a partir de otro.
// Toma cada elemento del array original y lo filtra, dejando
// solo lo que cumpla con las condiciones.


const numeros=[2, 4, 10, 5, 3]
// Estructura de el metodo filtrer
/* 
const nuevoArray = arrayOriginal.filtrer(valor) => {
    if (condicion que tiene que cumplir cada valor){
    return valor;
    }
} */

const mayoresdeCinco = numeros.filter((numero) => {
    if (numero > 5) {
        return numero;
    }
});
console.log(mayoresdeCinco);

const usuarios = [
    {
        nombre: 'Manuel',
        edad: 15,
        nacionalidad: 'es',
    },
    {
        nombre: 'Lucia',
        edad: 19,
        nacionalidad: 'gl',
    },
    {
        nombre: 'Paula',
        edad: 21,
        nacionalidad: 'en',
    },
    {
        nombre: 'Ramón',
        edad: 34,
        nacionalidad: 'es',
    },
    {
        nombre: 'Joaquin',
        edad: 21,
        nacionalidad: 'en',
    },
]

const usuariosEspañoles = usuarios.filter((usuario) => {
    if (usuario.nacionalidad === 'es') {
        return usuario;
    }
});

console.log(usuariosEspañoles);

const nombreUsuariosEspañoles = usuariosEspañoles.map((usuario) => usuario.nombre);

console.log(nombreUsuariosEspañoles);

const usuariosBritish = usuarios.filter((usuario) => {
    if (usuario.nacionalidad === 'en' && usuario.edad > 10 ) {
        return usuario;
    }
});

console.log(usuariosBritish);

const nombreUsuarioBritish = usuariosBritish.map((usuario) => {
    return {
        nombre: usuario.nombre,
        nacionalidad: usuario.nacionalidad,
    }
})

console.log(nombreUsuarioBritish);

for (const usuario of usuariosBritish) {
    console.log(`${usuario.nombre} es de nacionalidad ${usuario.nacionalidad}`);
}

console.log();