//1
console.log(document.getElementById('elementoOndeVoceEsta'));

//2
document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';

//3
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho';

//4
console.log(document.querySelector('#pai').firstElementChild);

//5
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

//6
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

//7
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling.nextSibling);

//8
console.log(document.querySelector('#pai').children[2]);

//******************//
//Parte 2

//1
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

//2
let exDois = document.createElement('div');
exDois.innerText = 'Exercicio Dois: crie um filho para elementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(exDois);

//3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let exTres = document.createElement('div');
exTres.innerText = 'Exercicio Tres: crie um filho para primeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(exTres);
// COMANDOS PARA ADICIONAR CLASSES E ID EM ELEMENTOS:
// exTres.className = 'exercicio-tres';
// exTres.id = 'ex-tres';

//4
console.log(document.getElementsByTagName('div')[0].parentElement.parentElement.nextElementSibling);


//******************//
//Parte 3

//1
let pai = document.querySelector('#pai');
let primeiroFilho = document.querySelector('#primeiroFilho');
let segundoFilho=  document.querySelector('#segundoEUltimoFilhoDoFilho');
let terceiroFilho = document.querySelector('#terceiroFilho');
let quartoFilho =  document.querySelector('#quartoEUltimoFilho');
pai.removeChild(primeiroFilho);
elementoOndeVoceEsta.removeChild(segundoFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoFilho);