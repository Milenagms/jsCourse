
class ValidaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.eventos(); //Para que quando chamar a classe valida formulario a primeira coisa que ela vai fazer é chamar os eventos por isso chama logo aqui.
  }

  eventos(){
    this.formulario.addEventListener ('submit', e => { // chamar uma função erow para não perder o this, a função erow não permite alteração do this, entao nesse caso, aqui dentro sera sua propria instancia
      this.handleSubmit(e);

    });
  }

  handleSubmit(e){
    e.preventDefault();
    const camposValidos = this.camposvalidados();
    const senhasValidas = this.senhasValidadas();

    if(camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasValidadas(){
    let valid =true;
    
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value){
      valid = false;
      this.criaErro(senha, 'campos senha e repetir senha precisam ser iguais');
      this.criaErro(repetirSenha, 'campos senha e repetir senha precisam ser iguais');
    }

    if(senha.value.length < 6 || senha.value.length> 12){
      valid = false;
      this.criaErro(senha, 'Senha precisa estar em 3 e 12 caracters');
    }
    return valid;
  }

  camposvalidados(){
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove()
    }

    for(let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText;//irmão do elemento anterior

      if(!campo.value){
        this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
        valid = false;
      }

      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false;
      }

      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  } 

  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;

    if(usuario.length <3 || usuario.length > 12){
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números');
      valid = false;
    }
    return true;
  }

  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()){
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);//afterrend  significa que depois que esse campo acabar que vai adicionar o campo div
  }
}

const valida = new ValidaFormulario();