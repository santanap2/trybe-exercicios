// console.log('1 - Receber roda');
// console.log('2 - Encaixar parafusos');
// console.log('3 - Fixar roda no carro');

// console.log('1 - Comprar parafusos');
// console.log('2 - Adicionar ao estoque');
// console.log('3 - Receber roda');
// console.log('4 - Encaixar parafusos');
// console.log('5 - Fixar roda no carro');

// setTimeout(() => {
//   console.log('Comprar parafusos')
//   console.log('Adicionar ao estoque')
// }, 2000);

// console.log('1 - Receber roda');
// console.log('2 - Encaixar parafusos');
// console.log('3 - Fixar roda no carro');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);
