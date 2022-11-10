"use strict";

/* 

    ########################
    #### FORM DATA #########
    ########################
    
    Aqui es obligatorio que los input tengn un name
    Sino, no apoarecen en el objeto de FormData

    FormData es una clase en el objeto para trabajar con formularios
*/

const form = document.forms.formulario;

///// FORMDATA deberiamos usarlo en el evento de submit del formulario
// para poder acceder al valor que escriba el usuario

function formSubmitHandle(e) {
    // Evitamos que se recargue la pagina(comportamiento por defecto del evento submit)
    e.preventDefault();
    console.log("Formulario enviado");
    // Creamos el objeto de la clase FormData con los datos de los input cuando
    // se envia el formulario
    const data = new FormData(form);
    
    // Recorremos data para mostrr cada uno de sus valores
    for (const elemento of data) {
        const [nameInput, valueInput] = elemento
        if (nameInput === 'nombre') {
            console.log(`El valor del input de nombre es ${valueInput}`);
        }
        if (nameInput === 'pass') {
            console.log('Contraseña recibida', valueInput);
            
        }
    }
}

// Asignamos al formulario esta funcion manejadora del evento de submit

//Creamos un objeto de la clase FormData
form.addEventListener('submit', formSubmitHandle);

const data = new FormData(form);
// data es un objeto iterable, es decir que podemos recorrer
for (const elemento of data) {
    console.log(elemento);
}

console.log('-------------------------------');


///// Añadir entradas al FORMDATA

// Se pueden guardar varios valores con el mismo "nombre"
data.append('colores', 'blanco')
data.append('colores', 'negro')
data.append('id','1');// append() recibe 2 argumentos, el nombre y el valor
for (const elemento of data) {
    console.log(elemento);
}

/// ELIMINAR ENTRADAS DEL FORMDATA

data.delete('pass');// Indicamos el nombre de la entrada que queremos eliminar
console.log('-------------------------------');

/// MODIFICAR UN VALOR

data.set('id', '5'); // Recibe el nombre y el nuevo valor como argumentos

// Si el nombre que queremos modificar no existe lo va a crear
data.set('ciudad', 'Valladolid');

for (const elemento of data) {
    console.log(elemento);
}

//// COMPROBAR SI EXISTE UNA CLAVE (NOMBRE)
// En el form data existe la clave "id"?
console.log(data.has('id'));

// LEER EL CONTENIDO (VALOR) DE UNA ENTRADA EN CONCRETO
console.log(data.get('ciudad'));

// Si queremos conocer el valor de una entrada con varios valores(ej colores)
console.log(data.getAll('colores'));