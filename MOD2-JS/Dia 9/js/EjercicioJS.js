'use strict';

/* 
    #######################
    ### Ejercicio Fetch ###
    #######################

    Crea una petición a la api:

    https://randomuser.me/api?results=10

    La cual va a devolver un objeto con 2 propiedades (results e info).

    1. Destructura la propiedad results.

    2. Crea un nuevo array de objetos a partir de este con las siguientes propiedades:
        {
            nombre: (aqui  iria el name.first),
            apellido: (aqui  iria el name.last),
            ciudad: ,
            pais: ,
            email:
        }

    3. Muestra por pantalla el array resultante.

    4. Si te ves capaz intenta (ayudandote de un bucle) recorrer este 
    array resultante y mostrar por pantalla para cada uno de los objetos
    del array la frase:

        "Me llamo {nombre} {apellido} y soy de {ciudad}, {pais}"
*/

const apiNueva = 'https://randomuser.me/api?results=10';

async function getDAta(url) {
    try {
        const response = await fetch(url)

        const data = await response.json();
        
        return data; 
    } catch (error) {
        console.error(error)
    }
};



async function printPersonas(urlPersonas) {
    try {
        const personas = await getDAta(urlPersonas);
        
        const { results } = personas;
        
        const resultados = results.map((item) => {
            return {
                nombre: item.name.first,
                apellido: item.name.last,
                ciudad: item.location.city,
                pais: item.location.country,
                email: item.email,
            };
        });
       console.log(resultados);
        for (const item of resultados) {
            console.log(`Me llamo ${item.nombre} ${item.apellido} y soy de ${item.ciudad}, ${item.pais} y mi email es ${item.email}`);
            }
    } catch (error) {
        console.error(error)
    }
}

printPersonas(apiNueva)