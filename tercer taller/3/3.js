//3. Use splice para hacer las eliminaciones correspondientes:

//a Dado el arreglo [1, 2, false] Elimine el elemento de índice 2
let arregloA = [1, 2, false];
arregloA.splice(2, 1);
console.log(arregloA);

//b  Dado el arreglo [99, false, 17, 45, 7, "abc", 78] Elimine el elemento de índice 6
let arregloB = [99, false, 17, 45, 7, "abc", 78];
arregloB.splice(6, 1);
console.log(arregloB);

//c Dado el arreglo [-1, -55, -89- 30, 1000] Elimine el elemento de índice 1
let arregloC = [-1, -55, -89- 30, 1000];
arregloC.splice(1, 1);
console.log(arregloC);

//d Dado el arreglo ["zxc", 767, 1298, true, false, [3], 1] Elimine los elementos desde el índice 1 hasta elíndice 4 en un sólo llamado
let arregloD = ["zxc", 767, 1298, true, false, [3], 1];
arregloD.splice(1, 4); 
console.log(arregloD);

//e Dado el arreglo [34, ["q"], 67, 1, 99, 1/2] Elimine los elementos desde el índice 3 hasta el índice 4 en un sólo llamado
let arregloE = [34, ["q"], 67, 1, 99, 1/2];
arregloE.splice(3, 4);
console.log(arregloE);