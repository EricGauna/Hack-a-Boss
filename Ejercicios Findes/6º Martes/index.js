`use strict`;

for (i = 0; i < 8; i++) {
    console.log(`Son las ${i}:00 horas`);
}
for (let i = 8; i <= 12 ;  i++) {
    console.log(`Son las ${i}:00 horas`, 'CUCÚ! '.repeat((i)));

}
for (let i = 13; i <= 23 ;  i++) {
    console.log(`Son las ${i}:00 horas`, 'CUCÚ! '.repeat((i)-12));

}

for (let i = 23; i === 23 ) {
    console.log(`Son las ${i}:00 horas`);
    break
}
    
  
