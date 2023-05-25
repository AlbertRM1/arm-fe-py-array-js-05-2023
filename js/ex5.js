let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

let result = [];

for (let i = 0; i < arrayUno.length; i++) {
    result.push(arrayUno[i]);
    result.push(arrayDos[i]);
}

let grupo = arrayUno.concat(arrayDos);

arrayUno = [];
arrayDos = [];

console.log(arrayUno);
console.log(arrayDos);

console.log(result.toString());