class DispostivoEletronico{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado){
      console.log(this.nome + ' Já está ligado');
      return;
    }
    this.ligado = true;
  }

  desligar(){
    if(! this.ligado) {
      console.log(this.nome + ' já desligado');
      return;
    }

    this.ligado = false;
  }
}

class Tablet extends DispostivoEletronico{
  constructor(nome, temWifi){
    super(nome);
    this.temWifi= temWifi
  }

  ligar(){
    console.log('Olha, vocÈ alterou o método ligar.')
  }
}

class Smartphone extends DispostivoEletronico {// Esse extends que faz com que ele usa da classe dispositivoeletronico
  constructor(nome, cor, modelo){
    super(nome); // é utilizado super para pegar do outro e não copiar algo que já foi citado.
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.ligar();0