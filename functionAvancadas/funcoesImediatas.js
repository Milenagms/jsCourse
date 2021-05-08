// IIFE -> Immediately invoked fucntion expression
// Para não tocar no escopo global

(function(idade, peso, altura){
  const sobrenome = 'Mendes';
  function criaNome(nome){
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Luiza'));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.80);