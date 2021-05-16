// o Map altera os valores, ele não altera o array original, mas altera os valores para um novo array

//  Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const  doubleNumbers = numeros.map(valor => valor * 2);
console.log(doubleNumbers);

// Para cada elemento:
// Retorne apenas uam string com o nome da pessoa
// Remova apensas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas= [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade:23 },
  { nome: 'Eduardo', idade:55 },
  { nome: 'Letícia', idade:19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const name1 = pessoas.map(obj => obj.nome);
console.log(name1)

console.log("#####################################");

const idades = pessoas.map(obj => ({ idade: obj.idade}));
console.log(idades);

console.log("#####################################");

const addIds = pessoas.map(function(obj, indice){
  const newObj = {...obj}; // para não alterar pessoas, tem que fazer uma cópia de pessoas.
  newObj.id = indice + 1;

  return newObj;
});
console.log(addIds);

// trabalhar com referências altera o valor principal.