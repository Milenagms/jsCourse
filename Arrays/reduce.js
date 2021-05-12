
// Some todos os números (reduce)
// Retorne um array cm os pares (Filter)
// Retorne um array com o dobro dos valores (Map )


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce(function(acumulador, valor){
//   acumulador += valor;
//   return acumulador;
// }, 0); //se eu não mandar nada aqui entende-se que o valor sera o primeiro no array
// console.log(total);

console.log("#####################################");

const total = numeros.reduce(function(acumulador, valor){
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []); //se eu não mandar nada aqui entende-se que o valor sera o primeiro no array
console.log(total);

console.log("#####################################");

const pessoas= [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade:23 },
  { nome: 'Eduardo', idade:55 },
  { nome: 'Letícia', idade:19 },
  { nome: 'Rosana', idade: 100 },
  { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
  if(acumulador.idade > valor.idade) return acumulador; 
  return valor; 
});
console.log(maisVelha);
