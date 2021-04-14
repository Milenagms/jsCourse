//  TRABALHANDO COM NÚMEROS


// let num1 = 10;
// let num2 = 2.5;

/* Número para String
console.log(num1.toString() + num2); // toString transforma o número para string para realizar o que foi pedido, mas o num1 ainda continua como number.
console.log(typeof num1);
*/

/* Para limitar a quantidade de casas decimais
console.log(num1.toFixed(2));
*/

/* para verificar se o número é inteiro, se for ele retorna true
console.log(Number.isInteger(num1));
*/

/* nessa parte ele vai verificar se é NaN, se for ela retorna true
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));
*/

/* O js tem um padrão (IEEE 754-2008) que não ia deixar esse número inteiro, para isso, colocamos o parseFloart OU Number e depois o o toFixed(2)
let num1 = 0.7;
let num2 = 0.1;
num1 += num2;
num1 += num2;
num1 += num2;


num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

*/
