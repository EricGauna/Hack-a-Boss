'use strict';

/* 

    #######################################
    ########FUNCIONES ASINCRONAS ##########
    ####################################### 

    Es la manera alternativa que tenemos de esperar a que nos llegue un resultado
    (esperar a que se resuelva)
*/


const recetasApi = [
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

function getRecetas() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(recetasApi);
            }, 1500);
        });
};


async function printRecetas() {
    try {
        // Await va a esperar a que se resuelva una promesa para recuperar sus datos
        const recetas = await getRecetas();
        // Dentro de las funciones asíncronas podemos realizar código javascript normal
        const nombresREcetas = recetas.map((receta) => receta.nombre);
        console.log(nombresREcetas);
    } catch (err) {
        console.error(err);
    }
};


// Llamamos a la funcion
printRecetas();

// Para hacer peticiones a URL externas hacemos uso del metodo FETCH()
// El método fetch devuelve una promesa, por lo que debemos ESPERAR a que se resuelva

async function getCharacteres() {
    try {
        // Hacer una llamada a la api y guardar en una varialbe sus datos

        // Esto es obligatio siempre que se utilice un api externa, las 2 const con el await.
        const response = await fetch('https://rickandmortyapi.com/api/character');
        // Lo que recibimos cuando hacemos un fetch es la respuesa completa del servidor
        // Para poder obtener sus datos debemos ejecutar un método .json() sobre la respuesta
        const data = await response.json(); // el método json tambien devuelve una promesa
        console.log(data);
    } catch (error) {
        console.error(error);
    };
};
  
// Llamamos a la funcion getCharacteres
getCharacteres();