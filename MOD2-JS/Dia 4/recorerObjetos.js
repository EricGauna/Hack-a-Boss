'use strict';

/* 

    ####################################
    ###BUCLES PARA RECOERER OBJETOS#####
    ####################################
    
    
*/

const usuario = {
    nombre: 'Juan',
    edad: 24,
    suscripcion: null
};

// Para recoerer las propiedad de un objetos usamos un bucle for in
// la constante "key" toma el valor de cada una de las propiedades 
// del objeto indicado en el "in"

for (const key in usuario) {
    //En cada vuelta del bucle "key" toma como valor el nombre de la propiedad
    console.log(key
    );

    // Accedemos al valor de la propiedad
    console.log(usuario[key]);
}

///// Otro ejemplo:

const equipos = {
    equipoA: 205,
    equipoB: 100,
    equipoC: 345,
};

for (const key in equipos) {
    console.log(`El equipo ${key} tiene ${equipos[key]} puntos`);
}

