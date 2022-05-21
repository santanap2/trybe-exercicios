//exercicio 1
console.log(' ');
  console.log('ex1');
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Seja bem vinda, ' + info.personagem + '!')

  //exercicio 2
  console.log(' ');
  console.log('ex2');
  info['recorrente'] = 'Sim'
  console.log(info);

  //exercicio 3
  console.log(' ');
  console.log('ex3');
for (let key in info) {
    console.log(key)
}

  //exercicio 4
  console.log(' ');
  console.log('ex4');
  for (let key in info) {
      console.log(info[key]);
  }

  //exercicio 5
  console.log(' ');
  console.log('ex5');
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O ultimo MacPatinhas',
    recorrente: 'Sim',
  }
  for (let key in info) {
      console.log(info[key]);
  }
  for (let key in info2) {
    console.log(info2[key]);
}

//exercicio 6
console.log(' ');
console.log('ex6');
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama ' + leitor.livrosFavoritos['0'].titulo + '. ');

//exercicio 7
console.log(' ');
console.log('ex7');
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });
  console.log (leitor);

  //exercicio 8
console.log(' ');
console.log('ex8');
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
