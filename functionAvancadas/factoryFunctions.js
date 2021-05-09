function criaPessoa(nome, sobrenome, altura, peso){
  return{
    nome, 
    sobrenome,

    // Getter - o get faz com que ele para de ser uma função para ser só uma atributo, pois o objetivo é só pegar o valor dele.
    get nomeCompleto(){
      return ` ${this.nome} ${this.sobrenome}`;
    },

    // Setter 
    set nomeCompleto(valor) {
      valor = valro.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre nada'){
      return `${this.nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const dadosPessoa1 = criaPessoa('lara', 'Alves', 1.8, 80);
const dadosPessoa2 = criaPessoa('Maria', 'cristina', 1.6, 60);
const dadosPessoa3 = criaPessoa('Marie', 'Nascimento', 1.70, 90);


console.log(dadosPessoa1.imc);
console.log(dadosPessoa2.imc);
console.log(dadosPessoa3.imc);