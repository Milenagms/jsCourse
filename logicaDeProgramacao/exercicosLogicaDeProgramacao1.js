// Escreva uma função que recebe 2 número e retorna o maior deles

const numberOne = 1;
const numberTwo = 2;

function maior(numberOne, numberTwo){
  // Escrevendo de forma ternaria return x > y ? : y;
  if  (numberOne > numberTwo) {
    return numberOne;
  }
   return numberTwo;
}
console.log(maior(numberOne, numberTwo));

