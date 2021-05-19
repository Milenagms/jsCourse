// Declaração de função (Function hoisting) - não importa onde é chamada se é antes ou depois.

falaOi();
function falaOi(){
  console.log('helo');
}

// Function expression - ela é armazenada dentro da variável e pode ser passada como paramentos em outras funções.
const Dados = function(){
  console.log('dados');
};
Dados();

//  Arrow function - seria uma Fuction expression, pórem mais curta.
const arrowFunction = () => {
  console.log('Sou uma errow function');
};
arrowFunction();

// Dentro de um objeto
const objeto ={
  falar : function(){ //pode ser assim támbem: falar() = {}
    console.log('Estou falando...');
  }
};
objeto.falar();

