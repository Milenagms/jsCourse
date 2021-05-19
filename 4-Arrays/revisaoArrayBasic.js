
// Forma de escrever: const nomes = new Array('Eduardo', 'Maria', 'Joana');
const nomes = ['Eduardo', 'Maria', 'Joana'];
const novo = [...nomes]; // Nesse caso está fazendo uma cópia e não apontando para o mesmo lugar na memória

nomes[2] = 'João';
delete nomes[2]; //Esse delete vai apagar o conteúdo sem alterar os indices do array

const removido = novo.pop() // esse apaga o indice também e pode salvar o que foi removido em uma const
// pop remove do final e shift remove do começo

console.log(nomes);
console.log(novo, removido);

//  Para serapar astring e virar um array
const nome = 'Milena Ferreira Gomes';
const nomes1 = nome.split(' ');
console.log(nomes1);

// Para juntar tudo de novo
 const nomes2 = [ 'Milena', 'Ferreira', 'Gomes' ]
 const nome2 = nomes2.join(' ');
 console.log(nome2);
