const currentHour = 2;
let message;


if (currentHour >= 22){
    message = 'Nao deveriamos comer nada, eh hora de dormir'; 
}
else if (currentHour >=18 && currentHour<22) {
    message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >=14 && currentHour<18) {
    message = 'Vamos fazer um bolo pro cafe da tarde?';
}
else if (currentHour >=11 && currentHour<14) {
    message = 'Hora do almoco';
}
else if (currentHour >=4 && currentHour<11) {
    message = 'Hmmm, cheiro de cafe recem passado';
}
else {
    message = 'Estou dormindo';
}

console.log (message)
