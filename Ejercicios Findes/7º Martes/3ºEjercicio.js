'use strict';

function quiz() {
    let numeroRandom = Math.round(Math.random() * 100);
    
    for (let iNDEX = 5; iNDEX > 0; iNDEX--) {
        let j = Number(prompt('Avidina el numero del 0 al 100'))
        if (j < numeroRandom) {
             alert(`El numero es mayor, te quedan ${iNDEX-1} oportunidades`)
        } else if (j > numeroRandom) {
             alert(`El numero es menor, te quedan ${iNDEX-1} oportunidades`)
        } else if (j === numeroRandom) {
            return alert('Has acertado');
        }
        if (iNDEX === 1) {
            return alert(`Has perdido, el número era el ${numeroRandom}` )
        }
        
    };
} 


quiz();