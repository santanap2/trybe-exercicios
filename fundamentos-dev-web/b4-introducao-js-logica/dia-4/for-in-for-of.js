// O for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice.

let cars = ['Saab', 'Volvo', 'BMW'];

for (let key in cars) {
  console.log(key, cars[key]);
}

console.log(' ');

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};
  
for (let index in car) {
    console.log(car[index]);
}

//O for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in.
console.log(' ');

let food = ['hamburguer', 'bife', 'acarajé'];

for (let value of food) {
    console.log(value);
};

//Para fixar

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  }
console.log('Olá: '); 
for (let nome in names) {
    console.log(names[nome])
}

console.log(' ');

let cars2 = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
}
for (let carros in cars2) {
    console.log(carros, cars2[carros])
}