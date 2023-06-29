let arreglo = [1,2,3,4,5,6];
//a) Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
let contador = 0
while (contador < arreglo.length) {
    console.log(arreglo[contador]);
    contador++
}
//b) Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
}
//c) Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
let segundoArreglo = arreglo.slice()
for (let index = 0; index < segundoArreglo.length; index++) {
    console.log(segundoArreglo[index] + 1 );
}
//d) Calcular el promedio de todos los elementos del arreglo
let contador3 = 0;
let cantidad = 0;
for (let index = 0; index < arreglo.length; index++) {
    contador3 += arreglo[index]
    cantidad ++
}
console.log(contador3/cantidad );
//terminado