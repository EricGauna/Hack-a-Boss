"use strict";

/* 


    ###################################
    ### Modificar Elementos con Style##
    ###################################

    Para modificar elementos debemos seleccionarlo previamente

    La propiedad style nos va servir para dar pequeños
    estilos puntuales a un elemento

    Lo suyo seria trabajar con clases e identificadores css
    para dar estilos

*/
// Seleccionamos todos los elementos con los que vamos a trabajar en JS
const body = document.querySelector("body");
const titulo = document.querySelector("h1");

// Style es una propiedad que pertence a cada elemento

// modificamos el color de fondo de todo el body
body.style.backgroundColor = "aqua";

// Modificamos el color de letra del titulo(h1)
titulo.style.color = "rgb(0, 250, 0)";

titulo.style.textAlign = "center";

// Si queremos añadir varios estilos en linea al mismo tiempo
titulo.style.cssText = `
color: red;
text-align: right;
text-decoration: underline;
`;

// css text sobreecribe todos los estilos en linea que hemos dado previamente


// Vamos a cerar un intervalo que cada 5 seg modifique 
// por un color aleatorio el fondo del body

function getRandomNumber() {
    
    const RandomNumber = Math.round(Math.random() * 255);

    return RandomNumber;
}

// Creamos un interavlo que ejecuta su codigo cada 5 seg
const intervalo = setInterval(() => {
    body.style.backgroundColor= `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`
}, 5000)

// Al cabo de 20 segundos detenemos el intervalo

setTimeout(() => {
    //Limpiamos el intervalo
    clearInterval(intervalo);
}, 10000);