
// DA FORMA DE CLASSES 

class Pessoa{
  constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar(){
    console.log(`${this.nome} está falando.`);
  }
}

// DA FORMA DE PROTOTYPES

function Pessoa2(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
  console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Milena', 'Gomes');
const p2 = new Pessoa2('Ana', 'Gomes');

console.log(p1, p2)