//exercicio 1
console.log('ex1');

function palindromoOuNao (string) {
    var splitString = string.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    if (string === joinArray) {
        return true;
    } else {
        return false;
    }
}
console.log(palindromoOuNao('arara'))

//exercicio 2
console.log(' ');
console.log('ex2');

let arrayTeste = [2, 3, 6, 7, 10, 1];
function indiceMaiorValor (array) {
    let maiorIndice = 0;
    for (i = 0; i < array.length; i += 1) {
        if (array[i] > array[maiorIndice]) {
            maiorIndice = i;
        }
    }
    return maiorIndice;
}
console.log(indiceMaiorValor(arrayTeste));


//exercicio 3
console.log(' ');
console.log('ex3');
let teste = [2, 3, 6, 7, 10, 1];
function indiceMenorValor (array) {
    let menorIndice = 0;
    for (i = 0; i < array.length; i += 1) {
        if (array[menorIndice] > array[i]) {
            menorIndice = i;
        }
    }
    return menorIndice;
}
console.log(indiceMenorValor(teste));

//exercicio 4
console.log(' ');
console.log('ex4');

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maisCaracteres (array) {
    let maiorValor = array[0]; 
    for (let index=0; index < array.length; index += 1) {
        if (maiorValor.length < array[index].length) {
            maiorValor = array[index];
        }
    }
    return maiorValor;
}
console.log(maisCaracteres(test));

//exercicio 5
console.log(' ');
console.log('ex5');

let ArrayDeTeste = [2, 3, 2, 5, 8, 2, 3];
function maisRepetido (array) {
    

}

//exercicio 6
console.log(' ');
console.log('ex6');

function somaNumero (numero) {
    let soma = 0
    for (let i=0; i<=numero; i+=1) {
        soma +=i;
    }
    return soma;
}
console.log(somaNumero(10))

//exercicio 7
console.log(' ');
console.log('ex7');

function wordEnding (word, ending) {

}