/*8. Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo*/

function arreglo() {
    let cantidad = parseInt(prompt("Ingresar cantidad de elementos que desea ingresar"))
    let cadena = []
    for (let index = 0; index < cantidad; index++) {
        let elementos = parseInt(prompt(`ingresar elemento ${index+1}`))
        cadena.push(elementos) 
    }
    let mayor = cadena[0]
    for (let index = 0; index < cadena.length; index++) {
        if (mayor < cadena[index]) {
            mayor = cadena[index]
        }        
    }
    return mayor
}
console.log(arreglo());
//terminado
