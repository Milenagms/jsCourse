// Quanto a função de fábrica e a construtura cria novos objetos 
//  A diferença é que na função fabrica é uma função normal e ela retorna um objeto , ela retorna de forma voluntária um objeto
//  Na função construtra ela já faz muita coisa automaticamente, ela já cria o objeto já retorna o objeto, única coisa que precisa fazer é criar ela.
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  // Não precisa colocar return, pois o new já aponta para this

  this.metodo = function(){
    console.log(this.nome + ': Sou um método');
  }
}

const p1 = new Pessoa('Marie', 'Dantra');
const p2 = new Pessoa('Milla', 'Costa');

console.log(p1.nome);
p2.metodo();0