const pessoa = { 
  nome: 'MILENA',
  sobrenome: 'GOMES'
};

const chave = 'sobrenome'; // Uma forma de usar assim também, pois se vim de alguma base de dados com a conotação de pontos não tem como.
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 22;
pessoa1.falarNome = function(){
  return (`${this.nome} está falando seu nome`);
};

pessoa1.getDataNascimento = function(){
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

//Factory functions / Contructor functions / Classes

function Person(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;

  //return this; não precisa fazer isso com o this
}

const p1 = new Person('Luiza', 'Almeida');
p1.nome = 'Milena'; // isso pode acontecer, pois não altera o p1 e sim o valor do valor dele.
const p2 = new Person('Lara', 'Almeida');
console.log(p1);
