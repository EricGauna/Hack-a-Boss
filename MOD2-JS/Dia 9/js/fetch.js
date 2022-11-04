'use strict';

/* 

    #######################################
    ############## FETCH ##################
    ####################################### 
  
    Es un métodfo de JAvascript que nos sirve para hacer peticiones 
    a otros servidores.

    Nosotros lo usaremos para realizar peticiones APIS
    
    El método fetch devuelve una promesa(la cual debemos esperar a que se resuelva)
    con la respuesta del servidor.

    Para obetener los datos de la api usamos el metodo .json() sobre la respuesta
    este método tambien se demora en devolver los datos por los que tambien demeos esperar.
*/

// Vamos a crear una variable que guarde la url
const apiLocalizaciones = 'https://rickandmortyapi.com/api/location';
const apiPersonajes = 'https://rickandmortyapi.com/api/character '
// para poddwer ejecutar el fetch debemos esperar a que se resuelva
// la mejor manera que conocemos es una funcion asincrona
// Es escalable y se puede reutilizar en multiples usos
async function getDAta(url) {
    try {
        // Hacer fetch
        const response = await fetch(url)

        // El fetch devuelve la respuesta del servidor
        const data = await response.json();
        
        return data
    } catch (error) {
        console.error(error)
    }
}

// Llamamos a la funcion
// No se ve nada en consola porque solo devuelve datos con el return, utilizando las 2 funciones
// de abajo mostramos por consola:

getDAta(apiLocalizaciones);
getDAta(apiPersonajes);

// Creamos una funcion encargada de MOSTAR los datos
async function printLocations(urlLocations) {
    try {
        // Llamamos a la funcon getData pasandola la api de las localizaciones 
        // para retornar sus datos
        const localizaciones = await getDAta(urlLocations);
        const { results } = localizaciones;
        
        // Crear un array de objetos nuevo a partir de results
        // con las propiedades (name, type, dimension)
        const misResultados = results.map((item) => {
            //item es cada uno de los elementos del array
            return {
                name: item.name,
                type: item.type,
                dimension: item.dimension,
            };
        });
        // Mostrar el array nuevo al completo por consola
        // console.log(misResultados)

        // Vamos a filtrar el array de misresultados y quedarnos únicamente con
        // las localizaciones cuya dimension conozcamos(NO sea "unknown")
        const resultadosFiltrados = misResultados.filter((item) => {
            if (item.dimension !== 'unknown') {
                return item;
            }
        });

        for (const item of resultadosFiltrados) {
            console.log(`Estas en el planeta ${item.name} que es de tipo ${item.type} y esta en la dimension ${item.dimension}`);
            }
    } catch (error) {
        console.error(error)
    }
}

async function printCharacteres(urlCharacteres) {
    try {
        // Llamamos a la funcon getData pasandola la api de las localizaciones 
        // para retornar sus datos
        const characteres = await getDAta(urlCharacteres);
        console.log(characteres);
    } catch (error) {
        console.error(error)
    }
}
// Primero crear las funciones y despues invocar las funciones,es la forma correcta
// Llamar a la funcion de mostrar localizaciones
printLocations(apiLocalizaciones)
printCharacteres(apiPersonajes)


