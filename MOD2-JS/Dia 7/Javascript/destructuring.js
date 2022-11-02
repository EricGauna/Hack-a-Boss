' use strict';
/* 
##################################
########DESTRUCTURING#############
##################################

 LA asignacion de valores por destructuring nos permite acceder de manera
 mas rápida a los elementos de un array o de un objeto.
 */


 //// DESTRUCTURING POR ARRAY

const colores = ['negro', 'verde', 'morado'];

console.log(colores[1]);

// Puede ser poco intuitivo acceder a de esta forma a los elementos del array
// para ello esta el destructuring


// La manera de destructurar un array
// Se asignan variables a cada posicion del array, con el nombre que queramos
const [col1, col2, col3] = colores;

console.log(col2);

const array = ['negro', 'Hola mundo', 24];

console.log(array[1]);

// Puede ser poco intuitivo acceder a de esta forma a los elementos del array
// para ello esta el destructuring


// La manera de destructurar un array
// Se asignan variables a cada posicion del array, con el nombre que queramos
const [color1, saludo, numero] = array;

console.log(numero);

// No se pueden repetir el nombre de las variables.
// En caso de no querer asignar una variable, dejamos un espacio entre comas
// Si no esta definido, devuelve undefined, salvo que le demos nosotros un valor(ej apellido),
// Si existe dentro del array, no lo podemos modificar

const array2 = ['negro', 'Hola mundo', 24, true];
const [color2, , , booleano, apellido = 'Alvite'] = array2;

console.log(color2);
console.log(booleano);
console.log(apellido);

// Si queremos guardar los objetos sobrantes de un array podemos hacer uso 
// del ...rest

const array3 = ['hola', 10, true, 'adios'];

// Hacemos destructuring de los 2 primeros del array y el resto lo guardamos

const [saludo2, numero3, ...rest] = array3

console.log(saludo2);
console.log(numero3);
console.log(rest);

 //// DESTRUCTURING POR OBJETOS

 // Se indican las propiedades a destructurar, da igual el orden,dado que busca el igual
const persona = {
    nombre: 'Tono',
    edad: 51,
    mascotas: ['Lupo', 'Croquetita', 'Blanquita']
};

const { nombre, edad, mascotas } = persona;
console.log(mascotas);
console.log(edad);

// Podemos renombrar una propiedad durante destructuring, la propiedad, solo se puede invocar
// con el nuevo nombre asignado
// Se pueden cambiar todas las propiedades que qqueramos
const { edad: edadRenombrada, nombre: nombrePersona } = persona;

console.log(edadRenombrada);
console.log(nombrePersona);

// ...rest tambien funciona en objetos(se le puede asignar el nombre que se requiera, solo hacen falta
// los ...(nombre que se quiera))
const { edad: edad2, ...resto } = persona;
console.log(resto);

// Podemos hacer destructuring directamenbte en los parametros de una función

function saludaUsuario({nombre, edad}) {
    console.log(`Hola ${nombre} tienes ${edad} años.`);
}

saludaUsuario(persona);

function saludaUsuario2(usuario) {
    // Tambien es valido hacer el desctructuring aqui
    const { nombre, edad } = usuario;
    console.log(`Hola ${nombre} tienes ${edad} años.`);
};

saludaUsuario2(persona);


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

// Un array de objetos al cual queremos que se ejecute la funcion de saludo usuario
// por cada usuario del array
for (const usuario of usuarios) {
    // cada vuelta de este bucle, usuario vale un objeto (cada uno de los usuarios)
    // usamos la funcion de saludaUsuarios
    saludaUsuario(usuario);
};
