const a = 10;
const b = 3;
const c = 20;

//exercicio 1
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//exercicio 2
if (a>b) {
    console.log(a)} 
else if (b>a) {
    console.log(b)
}

//exercicio 3
if (a>b && a>c) {
    console.log (a + ' maior numero A')
} else if (b>a && b>c) {
    console.log (b + ' maior numero B')
} else {
    console.log (c + ' maior numero C')
}

//exercicio 4
if (a>0) {
    console.log('positive')
} else if (a<0) {
    console.log('negative')
} else {
    console.log('zero')
}

//exercicio 5
let triangulo;
const ang1 = 54;
const ang2 = 69;
const ang3 = 58;

if (ang1 + ang2 + ang3 > 180) {
    triangulo=false;
} else if (ang1 + ang2 + ang3 <= 180){
    triangulo=true
}
console.log(triangulo)

//exercicio 6
let pecaXadrez = 'Rei';

switch (pecaXadrez) {
    case 'peao':
    console.log('move até em duas casas no primeiro movimento, ataca so na diagonal em uma casa');
    break;

    case 'torre':
    console.log('move e ataca em quantas casas quiser apenas em linhas retas');
    break;

    case 'cavalo':
    console.log('move e ataca apenas em L e em 3 casas');
    break;

    case 'bispo':
    console.log('move e ataca em quantas casas quiser na diagonal');
    break;

    case 'rainha':
    console.log('move e ataca em quantas casas quiser na em qualquer direcao');
    break;

    case 'rei':
    console.log('move e ataca em apenas em uma casa em qualquer direcao');
    break;

    default: console.log('peça inexistente')
}

//exercicio 7
const nota = -50;

if (nota>=90) {
    console.log ('nota A');}
else if (nota>=80) {
    console.log ('nota B');}
else if (nota>=70) {
    console.log ('nota C');}
else if (nota>=60) {
    console.log ('nota D');}
else if (nota>=50) {
    console.log ('nota E');}
else if (nota<50 && nota >=0) {
    console.log ('nota F');}
else if (nota>100 || nota<0) {
    console.log ('nota invalida');
}

//exercicio 8
const numero1 = 1;
const numero2 = 2;
const numero3 = 3;
let parOuImpar;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    parOuImpar = true }
else {
    parOuImpar = false
}
console.log(parOuImpar);


//exercicio 9
const ex9n1 = 52;
const ex9n2 = 250;
const ex9n3 = 37;
let imparOuPar;

if (ex9n1 % 2 > 0 || ex9n2 % 2 > 0 || ex9n3 % 2 > 0) {
    imparOuPar = true }
else {
    imparOuPar = false
}
console.log(imparOuPar);

//exercicio 10
const custoProduto = 240;
const valorVenda = 480;

const imposto = ((custoProduto/100) * 20);
const custoFinal = custoProduto + imposto;

const lucro = valorVenda - custoFinal;

let venda1000Produtos = lucro * 1000;

if (custoProduto || valorVenda || custoFinal || imposto || lucro < 0) {
    console.log('Valores incorretos: ALERTA PREJUIZO')
}

console.log(venda1000Produtos);


//exercicio 11
const salarioBruto = 3000;

let inss;
    if (salarioBruto <=1556.94) {
        inss = ((salarioBruto/100) *8)

    } else if (salarioBruto <=2594.92) {
        inss = ((salarioBruto/100) *9)

    } else if (salarioBruto <=5189.82) {
        inss = ((salarioBruto/100) *11)

    } else if (salarioBruto >5189.82) {
        inss = 570.88;
    }

const salarioBase = salarioBruto - inss;
let ir;
    if (salarioBruto <=1903.98) {
        ir = 0;

    } else if (salarioBase <=2826.65) {
        ir = (((salarioBase/100) * 7.5) -142.80)

    } else if (salarioBase <=3751.05) {
        ir = (((salarioBase/100) * 15) -354.80)

    } else if (salarioBase <=4664.68) {
        ir = (((salarioBase/100) * 22.5) -636.13)

    } else if (salarioBase >4664.68) {
        ir = (((salarioBase/100) * 27.5)-869.36)
    }

const salarioLiquido = salarioBase - ir;

console.log ('salario bruto ' +salarioBruto);
console.log ('salario base ' +salarioBase);
console.log ('salario liquido ' + salarioLiquido);