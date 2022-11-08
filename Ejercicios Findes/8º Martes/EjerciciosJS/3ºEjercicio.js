'use strict';

let secondsCounter = 0;

const interaloSegundos = setInterval(() => {
    secondsCounter++;
}, 1000);

/* ...
Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución del programa
Han pasado 0 días, 0 horas, 1 minuto y 25 segundos desde la ejecución del programa
... */

function printContador() {
    const seconds = secondsCounter % 60;
    const minuteCounter = Math.floor(secondsCounter / 60);
    const minutes = minuteCounter % 60;
    const hoursCounter = Math.floor(minuteCounter / 60);
    const hours = hoursCounter % 24;
    function plurar(unit) {
        if (unit === 1) {
            return '';
        }
        return 's';
    }
    const days = Math.floor(hoursCounter / 24);
    console.log(`Han pasado ${days} día${plurar(days)}, ${hours} hora${plurar(hours)}, ${minutes} minuto${plurar(minutes)} y ${seconds} segundo${plurar(seconds)} desde la ejecución del programa`);
}

const printInterval = setInterval(() => {
    printContador();
}, 5000)

function stop(time, unit) {
    let mstime = time;
    switch (unit) {
        case 'D':
            mstime *= 24;
        case 'H':
            mstime *= 60;
        case 'M':
            mstime *= 60;
        case 'S':
            mstime *= 1000;
    }
    setTimeout(() => {
        clearInterval(interaloSegundos);
        clearInterval(printContador);
        console.log('Programa terminado');
    }, mstime)
}

stop(1, 'M');