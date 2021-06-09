const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

// const pessoas = [
//     { nome: 'joão' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Luiza' },
//     { nome: 'Milena' },
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados) // para voltar a ser um objeto 
    dados.forEach(val => console.log(val));
}
lerArquivo(caminhoArquivo)


// const dadosArquivo = lerArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));














// const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname, '..', 'test.txt');/* os .. é para escrever em uma pasta de antes */

// fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w', encoding: 'utf8' });/*flag w significa que vai apagar tudo que esta dentro dele e coloca o que eu mandando agora*/
// /*flag a vai adicionar sem substituir */