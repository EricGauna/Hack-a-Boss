'use strict';
/**
 * ##################
 * ## Ejercicio 1 ##
 * ##################
 *
 * Utiliza los métodos map y filter para resolver las siguientes propuestas:
 *
 *  - 1. Crea un nuevo array con únicamente los nombres y edad de cada persona.
 *  - 2. Guarda un array con las personas que tengan más de 30 años.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. A partir del array de las personas que tienen gato, obten un nuevo array
 *      únicamente con el nombre, edad y nombre de la mascota.
 *  - 6. Obten un array con las personas que tengan una 'B' en su nombre, tanto
 *      da si la 'B' es en mayúscula o minúscula.
 *
 */
const persons = [
    {
      name: 'Berto',
      country: 'ES',
      age: 44,
      pet: {
        name: 'Moon',
        type: 'perro',
      },
    },
    {
      name: 'Jess',
      country: 'UK',
      age: 29,
      pet: {
        name: 'Kit',
        type: 'gato',
      },
    },
    {
      name: 'Tom',
      country: 'UK',
      age: 36,
      pet: {
        name: 'Rex',
        type: 'perro',
      },
    },
    {
      name: 'Alexandre',
      country: 'FR',
      age: 19,
      pet: {
        name: 'Aron',
        type: 'gato',
      },
    },
    {
      name: 'Rebeca',
      country: 'ES',
      age: 32,
      pet: {
        name: 'Carbón',
        type: 'gato',
      },
    },
    {
      name: 'Stefano',
      country: 'IT',
      age: 52,
      pet: {
        name: 'Bimbo',
        type: 'perro',
      },
    },
    {
      name: 'Colette',
      country: 'FR',
      age: 22,
      pet: {
        name: 'Amadeu',
        type: 'gato',
      },
    },
  ];
  
const nomEdadUsuarios= persons.map((usuario) => {
    return {
        nombre: usuario.name,
        edad: usuario.age,
 } 
} )
console.log(nomEdadUsuarios)

const usuariosTreinta = persons.filter((usuario) => {
    if (usuario.age > 30 ) {
        return usuario;
    }
});
console.log(usuariosTreinta);

const nomMascotas = persons.map((usuario) => usuario.pet.name);

console.log(nomMascotas);

const perGato = persons.filter((usuario) => {
    if (usuario.pet.type === 'gato' ) {
        return usuario;
    }
});

console.log(perGato);

const nuevoGato = perGato.map((usuario) => {
    return {
        nombre: usuario.name,
        edad: usuario.age,
        mascota: usuario.pet.name
    }
})

console.log(nuevoGato);

const nombresUsuarios = persons.map((usuario) => usuario.name
)   
console.log(nombresUsuarios);


for (const key in nombresUsuarios) {
    if (nombresUsuarios[key].includes('b')) {
        console.log(nombresUsuarios[key]);
    } else if (nombresUsuarios[key].includes('B')) {
        console.log(nombresUsuarios[key]);
    }
}
    