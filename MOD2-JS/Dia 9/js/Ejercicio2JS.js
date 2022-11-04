'use strict';

/* 
    #######################
    ### EJERCICIO FETCH ###
    #######################

    Haz uso de la siguiente api de localizaciones de rick y morty para:

    https://rickandmortyapi.com/api/location

    1. Crear una funcion asíncrona encargada de hacer fetch a una url y devolver los datos.

    2. Crea otra funcion asíncrona que recupere los datos de la api indicada más arriba

    3. En esa funcion quedate únicamente con la propiedad "results".

    4. "results" es un array de objetos, modificalo y guarda en un nuevo array de objetos solamente
    las propiedades (name, dimension y el primer elemento del array resindents (residents[0]) )

    5. Guarda en un nuevo array el resultado de filtrar el array anterior quedandote únicamente
    con los elementos cuya dimensión NO sea "unknown" y tengan residente (más de 0 residentes?¿).

    6. Recorre el array resultado y muestra por consola la frase "Ciudad {name} de la dimensión {dimension}".

    7. En el array de residentes se guarda una URL a otra parte de la API que guarda información sobre el personaje
    residente en esa localización.
    Reutiliza la funcion encargada de hacer fetch a la url para recuperar sus datos y muéstralos por consola.
*/

const apiRick = 'https://rickandmortyapi.com/api/location'

async function getData(url) {
    try {
        const response = await fetch(url)

        const data = await response.json();
        
        return data; 
    } catch (error) {
        console.error(error)
    }
};

async function nombres(urlApi) {
        try {
            const resultados = await getData(urlApi);
            const { results } = resultados;
            const propResults = results.map((item) => {
                return {
                    name: item.name,
                    dimension: item.dimension,
                    residente: item.residents[0],
                }
            })
            const desconocido = propResults.filter((item) => {
                if (item.dimension !== 'unknown'  && item.residents !== 0)
                    return item;
            });
                for (const item of desconocido) {
                console.log(`Ciudad ${item.name} de la dimensión ${item.dimension}`);
            }
        } catch (error) {
            console.error(error)
        }
    }

    nombres(apiRick)
