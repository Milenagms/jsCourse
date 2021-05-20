function teste(){
  console.log('Este é um teste, para chamar dentro da classe');
}

class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Método de instância
  aumentarVolume(){
    this.volume += 2;
  }
  diminuirVolume(){
    this.volume -= 2;
  }

  //Método estático
  static soma(x, y){ // é feito isso quando por motivo de organização ou outros motivos querem deixar dentro da função, mas pode criar uma função fora como o exemplo no inicio criando pelo lado de fora.
     return x + y;//o metodo estatico não tem acesso aos dados da instancia
  }
}

const controle1 = new ControleRemoto('LG');
console.log(controle1)

console.log(ControleRemoto.soma(2, 2));