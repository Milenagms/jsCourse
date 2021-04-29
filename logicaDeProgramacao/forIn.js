// For in -> lê os índices ou chaves do objeto

/*const frutas = ['Pera', 'Maçã', 'uva'];

for (let indice in frutas){
  console.log(frutas[indice])
}*/

const pessoa ={
  nome: 'Luiz', 
  sobrenome: 'Otávio',
  idade: 30
};

for (let chave in pessoa){
  console.log(chave, pessoa[chave]);
}