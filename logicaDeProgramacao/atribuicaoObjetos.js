const pessoa = {
  nome : 'Milena',
  sobrenome : 'Gomes', 
  idade: 30,
  endereco:{
    rua:'Av Brasil', 
    numero: 320
  }

}
/*Nessa atribuição via desestruturação funciona ele pegando o nome dentro de pessoa e já craindo uma variável chamada nome
const{nome, sobrenome} = pessoa;
console.log(nome, sobrenome);
*/

const { endereco: {rua, numero}} = pessoa;
console.log(rua);
