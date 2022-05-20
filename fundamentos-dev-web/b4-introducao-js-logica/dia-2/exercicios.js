//exercicio 1
console.log('Exercicio 1: ')

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index=0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

//exercicio 2
console.log('Exercicio 2: ')

let soma = 0;
for (let index=0; index <numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log(soma);

//exercicio 3
console.log('Exercicio 3: ')

let mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica);

//exercicio 4
console.log('Exercicio 4: ')

if (mediaAritmetica > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor que 20')
}

//exercicio 5
console.log('Exercicio 5: ')

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0];
for (let index=0; index < numbers.length; index += 1) {
    if (maiorValor < numbers[index]) {
        maiorValor = numbers[index]
    }
}
console.log(maiorValor);


//exercicio 6
console.log('Exercicio 6: ')

let numerosImpares = [];
for (let index=0; index <numbers.length; index += 1) {
    if (numbers[index] % 2 > 0) {
        numerosImpares.push('+1');

    } else if (numerosImpares.lenght = 0) {
        console.log('nenhum valor impar encontrado')
    }
}
console.log(numerosImpares.length);

//exercicio 7
console.log('Exercicio 7: ')
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];
for (let index=0; index < numbers.length; index += 1) {
    if (menorValor > numbers[index]) {
        menorValor = numbers[index]
    }
}
console.log(menorValor);


//exercicio 8
console.log('Exercicio 8: ')

let exercicio8 = []
for (let index=0; index < 26; index += 1) {
    exercicio8.push(index);
}
console.log(exercicio8);

//exercicio 9
console.log('Exercicio 9: ')

let divisaoPorDois = []
for (let index=0; index < 26; index += 1) {
    console.log(exercicio8 [index] / 2);
}