function clock(){
  function getTimeFromSeconds(seconds){
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }


  const relogio = document.querySelector('.relogio');
  let seconds = 0;
  let timer;

  function startsClock() {
    timer = setInterval(function() {
      seconds++;
      relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', function(e){
    const elementor = e.target;

    if (elementor.classList.contains('zerar')){
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      seconds = 0;
    }

    if (elementor.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      clearInterval(timer);
      startsClock();
    }

    if (elementor.classList.contains('pausar')){
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

  });
}
clock();