"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];



  try {
    if (typeof dni !== 'string' || dni.length !== 10) {
      throw new Error(
        'Debes indicar un DNI con 10 caracteres y en formato de texto'
      );
    }
    const dniArray = dni.split('-');
    if (dniArray.length !== 2) {
      throw new Error('El DNI debe tener solo un guión.');
    }

    console.log(dniArray);
    const [numeros, letra] = dniArray;

    if (isNaN(numeros) || numeros.length !== 8) {
      throw new Error('La primera parte del DNI deben ser 8 números');
    }

    if (letra.length !== 1 || typeof letra !== 'string') {
      throw new Error('La segunda parte del DNI debe ser una única letra');
    }
    if (letra !== letras[numeros % 23]) {
      throw new Error('La letra no se corresponde');
    }
    console.log('El DNI es válido');
  } catch (error) {
    console.error(error.message); // Mostramos el mensaje de error que hayamos creado
  }


validateDNI('00000000-T');