/*4) Cree una función que reciba un arreglo de números naturales y muestre todos los números primos en
él.*/
function naturales(elementos) {
    for (let index = 0; index < elementos.length; index++) {
        let contador = 0
        let cadena = elementos[index]
        for (let index = 0; index <= cadena; index++) {
            if (cadena % index === 0) {
                contador++
            }
        }
        if (contador <= 2) {
            console.log(cadena);
            contador = 0
        } else {
            contador = 0
        }
    }

}
let numeros = [1,4,7,8,9,10,11,12,13,14,5,3]
let valor = naturales(numeros)
console.log(valor);
//terminada