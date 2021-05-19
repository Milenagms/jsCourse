//  Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque){

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: false, //significa que o valor não pode ser alterado, se tiver em false, em true pode.
    configurable: false, //como falso não permite apagar e nem reconfigurar
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: nome,
      writable: false, 
      configurable: false

    },
    preco: {
      enumerable: true, 
      value: preco,
      writable: false, 
      configurable: false
    },
  })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)