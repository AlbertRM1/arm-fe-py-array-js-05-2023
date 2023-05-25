// Ejemplos de arrays
let A = 1;
let B ='patata';
let C = true;

let valores = ['hola',14,true,null,7,8,[1,2,3,[a,b]]];

let pos3 = valores[6][2];

valores[6] = 'adios';
let extension = valores.length;
let pos1 = valores[1];
console.log(pos1);
console.log(extension);

valores[1] = 89;
console.log(valores[1]);