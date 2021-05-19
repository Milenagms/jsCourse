//get obtem o valor e set settar o valor

function Produto (nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;

  let estoqueprivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, 
    configurable: true,
    get: function(){
      return estoqueprivado;
    },

    set: function(valor){
      if(typeof valor !== 'number'){
        throw new TypeError('Mensagem');
      }
      estoqueprivado = valor;
    }
  });
}



const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 500
console.log(p1.estoque);