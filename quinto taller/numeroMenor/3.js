//3) Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
//elementos del arreglo.
function arreglo(elementos) {
    let menor = elementos[0]
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] < menor) {
            menor = arreglo[index]
        }
    }
    return menor
}
let valor = [2,7,0,8,2,5,12]
let valorArreglos = arreglo(valor)
console.log(valorArreglos);

//terminado
    
    


