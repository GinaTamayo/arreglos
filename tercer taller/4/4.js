//4)a) Dado el siguiente arreglo a = [2, 6, 9, 0, 5] , realice una copia dependiente de a.
let arreglo = [2, 6, 9, 0, 5];
let arregllo2 = arreglo;
console.log(arregllo2);
arreglo.push(27);
console.log(arregllo2);


