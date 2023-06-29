//8. Cree una función que reciba un arreglo de n elementos y retorne el número de elementos del
//arreglo.
function arreglo() {
    let ingresar = [];
    let cantidad = parseInt(prompt("Ingrese la cantidad de elementos"));
    for (let index = 0; index < cantidad; index++) {
        let ingresarElementos = prompt(`Ingrese el elemento ${index+1}`);
        ingresar.push(ingresarElementos);
    }
    let contador = 0;
    for (let index = 0; index < ingresar.length; index++) {
        contador++
    }
return contador
}
console.log(arreglos);