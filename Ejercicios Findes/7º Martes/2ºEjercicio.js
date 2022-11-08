'use strict';

const names = [
    "A-Jay",
    "Manuel",
    "Manuel",
    "Eddie",
    "A-Jay",
    "Su",
    "Reean",
    "Manuel",
    "A-Jay",
    "Zacharie",
    "Zacharie",
    "Tyra",
    "Rishi",
    "Arun",
    "Kenton",
];


function unico(gringos) {
    let sinDuplicar = [];
    for (const nombre of gringos) {
        if (!sinDuplicar.includes(nombre)) {
            sinDuplicar.push(nombre)
        } 
    }return sinDuplicar;
};

console.log(unico(names));
