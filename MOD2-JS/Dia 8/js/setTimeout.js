'use strict';

/*

    #######################################
    ############## ASINCRONIA #############
    ####################################### 

    Que es la sincronia?
    Todo codigo se ejecuta en orden, de ariba a abajo

    setTimeout() es un método asíncrono, quiere decir que se va a 
    ejecutar después

    Las api, cuando se consumen por Javascript son tambien asíncronas.

*/
  
console.log(window); // En el objeto "ventana" representa la ventana del navegador
// y tenemos muchos metodos interesantes como "innerHeight" o "alert"
alert('hola'); // Muestra una ventana emergente con un mensaje

confirm('Confirmas que podemos aceder a tu ubicacion?') // devuelve true o false

/* 
    setTimeout()
        es un método que recibe 2 argumentos
        un callback (con el codigo que tiene que ejecutar al cabo de un tiempo)
        tiempo (en milisegundos) el tiempo que esperamos a que se ejecute el código
*/

setTimeout(() => {
    // Codigo que se ejecutara cuando termine el tiempo que se establezca
    console.log('Hola mundo');
}, 2000); ///  2000ms -> 2 seg

// Al ser asincrono,aunque no tenga tiempo asignado, se ejecuta despues, primero 
// lee todo el codigo sincrono y despues todo el codigo asincrono. 

/* 
    Javascript no es multitarea, solo permite realizar una tarea a la vez.
    Solo tiene un hilo de ejecucion

    Event loop, es un bucle en el cual se decide cuando se tiene que ejecutar 
    cada tarea

*/

setTimeout(() => {
    console.log('Me ejecuto dentro de 5 segundos');
}, 5000);


// clearTimeout() sirve al igual que clearInterval(), para detener una cuenta atras
