
// Promise.all = ele resolve todos e na ordem
//  Promise.race = o race como se fosse uma corrida mesmo, quem terminar primeiro entrega o valor e para de entrgar valores 
// Promise.resolve = se já tem resolve, se não busca a solução
// Promise.reject = toda vez que coloca um reject ele cai no catch


function rand (min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) =>   {
    if(typeof msg !== 'string'){
     reject(false);
     return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - passei na promise');
    }, tempo);
  }); 
}

/*Promise.all 
const promises =[ 
  'Primeiro valor',
  esperaAi('promise 1', 3000),
  esperaAi('promise 2', 500),
  esperaAi('promise 3', 1000),
  'Outro valor'
];

Promise.all(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch (function(erro) {
    console.log(erro);
  });
*/

/* Promise.race
const promises =[ 
  esperaAi('promise 1', 3000),
  esperaAi('promise 2', 500),
  esperaAi('promise 3', 1000),
];

Promise.race(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch (function(erro) {
    console.log(erro);
  });
*/

function baixaPagina(){
  const emCache = true;

  if(emCache){
    return Promise.resolve('Página em cache'); //para se tornar reject subtstitui po resolve por ela
  }else{
    return esperaAi('baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e));