let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

let javascript2 = ["Objetos", "Arrays", "ParseInt"];

let repe = (array) => {
    let noRepe = new Set(array);
    if (noRepe.size < array.length) {
        console.log('tiene repetidos');
    } else {
        console.log('no tiene repetidos');
    }
}

repe(javascript1);
repe(javascript2);


// const repe = (entrada)=>{
//     for (let i = 0; i < entrada.length; i++) {
//         let newArray = [...entrada];
//         newArray[i]=null;
//         for (let j = 0; j < entrada.length; j++) {
//             if (entrada[i]==newArray[j]) {
//                 console.log('existen valores repetidos');
//             }
//         }
//     }
// }

// repe(javascript1);

// repe(javascript2);