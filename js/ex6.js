function oddEven() {
    const num = [0,1,2,3,4,5,6,7,8,9,10];
    let par = [];
    let impar = [];
    for (let i = 0; i < num; i++) {
        if (num[i] % 3 == 0) {
            par.push(i);
        } else {
            impar.push(i);
        }
    }
}

console.log(par);
console.log(impar);

oddEven();