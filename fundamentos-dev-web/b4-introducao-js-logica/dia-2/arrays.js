let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

console.log('***********')

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

console.log('***********')

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index])
}

console.log('***********')

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nome of names) {
    console.log(nome)
}