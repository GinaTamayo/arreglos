//Dado el arreglo [3, 50, 70, 600, 40]:
let arreglo = [3, 50, 70, 600, 40];

//1. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos
arreglo.forEach(i => {
    console.log(i);
});

//2. Use ciclo forEach para recorrer el arreglo e imprimir todos sus elementos multiplicados por 3
arreglo.forEach(i => {
    console.log(i *3);
});

//3. Use ciclo while para recorrer el arreglo e imprimir todos sus elementos
let contador = 0
while (contador < arreglo.length) {
    console.log(arreglo[contador]);
    contador++
}

//4. Use ciclo for, condicional y operación módulo para recorrer el arreglo y mostrar cuales elementos
//son pares
for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] % 2 === 0) {
        console.log(arreglo[index]);
    }
}




