/*
Javascripré baseado em protótipoa para passar propiriedades e métodos de um objeto para outro.

definição de protótipo 
Protótipo  é um termo usado para se referir ao que foi cirado pela primeira vez , servindo de modelo ou molde para futuras porduções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motos do JS vai tentar encontrar este membro no próprio objeto e depois a cedeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

*/

function Pesssoa(nome, sobrenome){
  this.nome = nome; 
  this.sobrenome = sobrenome;
}

// Pessoa.prototype === pessoa1. __proto__

Pesssoa.prototype.nomeCompleto = function(){ // O Objetivo daqui é não pesar o computador do cliente, pois criando varias poderia ocorrer uma falha de performace.
  return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Maria', 'Santana');
const pessoa2 = new Pessoa('Carlos', 'santos');
