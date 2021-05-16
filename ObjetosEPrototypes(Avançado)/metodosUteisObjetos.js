//  Copiar objetos 

const produto = { nome: 'Produto', preco: 1.8};
const caneca = {
  ...produto, //aqui ele copia os dados do produto sem alterar ele , e pode também adicionar novos como adicionou material
  material: 'porcelana'
};

caneca.nome = 'Livre Amor'
caneca.preco = 25.50;

console.log(produto);
console.log(caneca);


// const produto2 = { nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({}, produto2, {material: 'porcelana'}) //aqui ta copiando tudo de produto para o objeto vazio

// fim de copiar objetos

// Para pegar somente os valores de dentro do atributo

const produto1= {nome:'Produto1', preco1: 1.8 };
console.log(Object.values(produto1));// values é para ler os valores e o keys é para ler as chaves

const produto2= {nome:'Produto2', preco1: 1.8 };
console.log(Object.entries(produto2)); //entries é para pegar os dois a chaves e o valor

const produto3= {nome:'Produto2', preco1: 1.8 , material: 'porcelana'};

for(let[chave, valor] of Object.entries(produto)){
  console.log(chave, valor); // passa no for e pega os dois itens 
}
