/*13. Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo*/


function numerosEnteros() {
    let cantiadad = parseInt(prompt("Ingrese la cantidad de elementos"))
    let arreglo = [];
    for (let index = 0; index < cantiadad; index++) {
        let numeros = parseInt(prompt(`Ingrese el elemento ${index+1}`));
        while (arreglo.includes(numeros)) {
                numeros = parseInt(prompt(`Vuelva y Ingrese el elemento ${index+1}`));
            }
            arreglo.push(numeros)
        }
    let numerosOrdenados = []
    while (arreglo.length > 0) {
        let numeroMenor = arreglo[0]
        let menor;
        for (let index = 0; index < arreglo.length; index++) {
            if (arreglo[index] < numeroMenor) {
                numeroMenor = arreglo[index]
                menor = index
            }
        }
        numerosOrdenados.push(numeroMenor)
        arreglo.splice(menor, 1)
    }
   return `la cadena ordenada es : ${numerosOrdenados}`
}

let prueba = numerosEnteros()
console.log(prueba);
//terminado