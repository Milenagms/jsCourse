// Filter => Sempre retornar um array, com a mesma quantidade de elementos ou menos, ele não altera os elementos, só filtra mesmo.

// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array){
  return valor > 10; // quando uma condição retorna true or false, é só retornar o valor já ou ives de fazer um if(valor> 10)return true else retorne false;
}
// outra forma que devo usar é:
/* const numerosFiltrados = numeros.filter(valor => valor > 10);
    console.log(numerosFiltrados);
 */

const numerosFiltrados = numeros.filter(callbackFilter); // essa função filter so espera receber se é true or false, ou seja, se vai add no array ou não.
console.log(numerosFiltrados);

console.log("#####################################");

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas  cujo nome termina com a 

const pessoas= [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade:23 },
  { nome: 'Eduardo', idade:55 },
  { nome: 'Letícia', idade:19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const bigName = pessoas.filter(obj => obj.nome.length >= 5);
console.log(bigName);

console.log("#####################################");

const old50 = pessoas.filter(objeto => objeto.idade > 50);
console.log(old50);

console.log("#####################################");

const nameFinishA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nameFinishA)