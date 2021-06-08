const fs = require('fs').promises;
const path = require('path');

/*fs.readdir(path.resolve(__dirname)) //para pegar da pasta que está para frente
    .then(files => console.log(files))
    .catch(e => console.log(e))*/

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.start(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        if (stats.IsDirectory()) {
            readdir(fileFullPath); /*  se for um diretório volte da função readdir e liste os arquivos dela*/
            continue;
        }


        console.log(file, stats.IsDirectory());
    }
}
readdir("c:\Users\jairo\OneDrive\Documentos\projeto_milena\TodosJS\JS-course\9-node\listandoArq\main.js")