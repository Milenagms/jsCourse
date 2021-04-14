let varA = 'A';
let varB = 'B';
let varC = 'C';
let varD;

varD = varA; // varD = A
varA = varB; // varA = B
varB = varC;
varC = varD;

console.log(varA, varB, varC);
