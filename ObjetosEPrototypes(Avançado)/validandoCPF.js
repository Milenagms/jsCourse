// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/


//  O CÓDIGO COMENTADO ASSIM É PARA EXPLICAR E FIXAR O CONTÉUDO.


function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo',{
    enumerable: true, //para ver o número, mostrar ele.
    get: function(){ // o get é onde vai fazer as alterações, igual mexer tirando os pontos.
      return cpfEnviado.replace(/\D+/g, ''); //aqui é para limpar letras espaços, pontos, virgula e só deixar o numero 
    }
  });
}

ValidaCPF.prototype.valida = function() { //aqui vai retornar verdadeiro ou falso e aqui é o proto do ValidaCPF
  if (typeof this.cpfLimpo === 'undefined') return false; //aqui tem que ter um this, porque o cpf limpo estar dentro do ValidaCPF
  if (this.cpfLimpo.length !== 11) return false;
  if  (this.isSequencia()) return false; //se for uma sequencia ele chega aqui verdadeiro e retorna falso.

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial) ///Aqui que chama a função criaDigito e passa o numero configurado para aqui dentro como parametro.
  const digito2 = this.criaDigito(cpfParcial + digito1);
  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1; // aqui  vai pegar o tamanho do array e vai regredir ele, quando colocar regressivo--. Como precisa de 10 então addicionou mais um
  const total = cpfArray.reduce((acumulador, valor) => {//aqui é muito parecido com o for ele vai passando é retirando um no regressivo
    acumulador += (regressivo * Number(valor)); //Aqui ele ia fazer a conta, mas com o Number para colocar como numero, pois é uma string chegando ali
    regressivo--;
    return acumulador;
  }, 0)// Esse 0 aqui tá definindo para o acumulador começar no zero.

  //AQUI SERÁ FEITO A CONTA PARA SABER O PROXIMO DIGITO
  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);// aqui uma ternária para se for maior que 9 ele deve retornar zero e transforma para String, pois o objetivo não é umais fazer conta e sim concatenar


};

ValidaCPF.prototype.isSequencia = function(){
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};



const cpf = new ValidaCPF('705.484.450-52');
cpf.valida();

if (cpf.valida()){
  console.log('CPF válido')
}else {
  console.log('CPF inválido.')
}

const cpf = new ValidaCPF('070.987.720-03');

if(cpf.valida()) {
  console.log('Cpf válido');
} else {
  console.log('Cpf inválido');
}
