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
    for (let index = 0; index = array.length -1; index =+1) {
        if (array[index] > biggest.length) {
            biggest = array[index];
        }
        return biggest;
    }
}
console.log(biggest);

//exercicio 4

