'use strict';

const people = {
    Maria: 20,
    Ana: 14,
    Luis: 16,
    Pepe: 35,
    Manuel: 50,
    Teresa: 12,
    Daniel: 27,
    Irene: 23,
    Alex: 10,
  };

  for (const key in people) {
      if (people[key] >= 18) {
        console.log(`${key} es mayor de edad`);
      } else {
          console.log(`${[key]} es menor de edad`);
    }
  }
console.log(`------------------------`);

function persona(name, age) {
  if (age >= 18){
    return `${name} es mayor de edad`;
} else {
    return `${name} es menor de edad`;
  }
}; 

for (const key in people) {
    console.log(persona(key,people[key]));
};

/* function comprobarEdad(name, age) {
  if (age < 18) {
    return ${name} es menor de edad;
  } else {
    return ${name} es mayor de edad;
  }
} */