const uppercase = require('./exercicios.js')

test('verifica a chamada da callback da função', () => {
  expect(uppercase('ola mundo')).toEqual('OLA MUNDO');
});