/*10. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
introduzca el arreglo*/
function cantidadDeC() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de personas que se registraran"));
    let contador = 0
    let c = "los nombres que tienen la 'C' son:"
    let nombreC = []
    for (let index = 0; index < cantidad; index++) {
        let nombre = prompt("Ingrese su nombre").toLocaleLowerCase();
        nombreC.push(nombre)
    }
    for (let index = 0; index < nombreC.length; index++) {
        if (nombreC[index].includes("c")) {
            if (nombreC[index].indexOf("c") === nombreC[index].lastIndexOf("c")) {
                contador++
            } else if (nombreC[index].indexOf("c") !== nombreC[index].lastIndexOf("c")) {
                contador = contador+2
            }
            c += nombreC[index]+", ";
        }
    }
    return `la cantidad de C es: ${contador} y ${c}`
}
console.log(cantidadDeC());
//terminado