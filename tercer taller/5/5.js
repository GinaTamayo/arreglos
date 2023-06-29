//5)b) Dado el siguiente arreglo b = ["abc", 4, 88, 99] , realice una copia independiente de b
let arregloD = ["abc", 4, 88, 99];
let arregloD1 = arregloD.slice();
console.log(arregloD1);
arregloD.push(27);
console.log(arregloD1);
