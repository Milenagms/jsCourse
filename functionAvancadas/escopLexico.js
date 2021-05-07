const nome = "Milena";

function falaNome(){
  console.log(nome);
}

function usaFalaNome(){
  falaNome();
}
usaFalaNome();

// A função como mostra no exemplo - ela busca dentro do escopo primeiro e se não encontrar ela busca em outro escopo (o pai).