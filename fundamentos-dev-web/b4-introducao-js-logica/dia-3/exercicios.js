//exercicio 1
const num10 = 10;
let result = num10;
for (let i=1; i<num10; i+=1) {
    result *=i;
}
console.log(result);

//exercicio 2
let word = 'tryber';
let inverse = '';
for (let i = word.length -1; i >= 0; i -=1 ){
        inverse += word[i];
}
console.log(inverse);

//exercicio 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggest = array[0];
function biggestWord (array) {
    for (let index = 0; index <= array.length -1; index +=1) {
        if (array[index].length > biggest.length) {
            biggest = array[index];
        }
    }
    return biggest;
}
console.log(biggestWord(array,biggest));

//exercicio 4
function primosOuNao (array) {
    for (n=2; n <= array.length; n+=1 ) {
        let ehPrimo = true;

        for (let div = 2; div < n; div += 1) {
            if (n % div === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(n);
    }
}