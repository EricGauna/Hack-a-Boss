'use strict';

/* 

###########################
#####OBJETOS###############
###########################

*/

/* SON UN CONJUTNTO DE DATROS,
UNA COLECCION DE PROPUIEDADES(CLAVES) Y VALORES*/

// Declaracion de un objeto, puede tener cualquier tipo de dato
// const miObjeto={}

const miObjeto = {
    propiedad1: 'valor1', // se separan por comas
    propiedad2: 'valor2',
    propiedad3: 'valor3'
}

///////////

const usuario = {
    nombre: 'Jaime',
    edad: 51,
    coloresFavoritos: ['azul', 'negro', 'verde'],
    mascota: {
        nombre: 'FLuffly',
        tipoAnimal: 'perro',
        edad: 10
    }
};

// Mostramos el objeto en consola
console.log(usuario);

// Accedemos a una unica propiedad del objeto
console.log(usuario.nombre);
console.log(usuario.coloresFavoritos);
// Para poder acceder a los diferentes colores,que son array, accedemos a ellos por su posicion el cual empiezan por 0
console.log(usuario.coloresFavoritos[2]);
// Accedemos al objeto del primer objeto,añadiendo puntos
console.log(usuario.mascota.nombre);


/////// Modificamos el valor de una variable
usuario.nombre = 'Claudia'
console.log(usuario.nombre);

// Tambien podemos modificar el valor de un objeto dentro de otro objeto

usuario.mascota.tipoAnimal = 'gato'
console.log(usuario.mascota);

// Modificamos el objeto/propiedad mascota al completo
usuario.mascota = {
    nombre: 'Fluffy',
    patas: 4,
}

/// Agregamos nuevas propiedades al objeto usuario
usuario.mascota2 = {
    nomnbre: 'Rumba',
    patas: 4,

};
usuario.mascota2.sexo = 'M';

console.log(usuario);




/////// Eliminamos una propiedad de un objeto

delete usuario.coloresFavoritos;

console.log(usuario);





