/*11. Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.*/

function enteros() {
    let enterosPositivos = []
    let contador = 0
    let cantiadad = parseInt(prompt("ingrese la cantidad de elementos"));
    for (let index = 0; index < cantiadad; index++) {
        let numeros = parseInt(prompt(`Ingrese el elemento ${index+1}`));
        while (numeros < 0 ) {
            numeros = parseInt(prompt(`por favor reingrese el elemento ${index+1}, este debe ser positivo`));
        }
        enterosPositivos.push(numeros)
    }
    for (let index = 0; index < enterosPositivos.length; index++) {
        if (enterosPositivos[index] % 2 !== 0) {
            contador++
        }
    }
    return `el arreglo tiene ${contador} numeros impares`
}
console.log(enteros());
//terminado