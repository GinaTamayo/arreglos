/*9. Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.*/
function arreglo() {
    let primerArreglo = [];
    let cantidadPrimerArreglo = parseInt(prompt("Ingrese la cantiadad de elementos que tendra el primer arreglo"));
    for (let index = 0; index < cantidadPrimerArreglo; index++) {
        let elementos = parseInt(prompt("Ingrese elemento"));
        primerArreglo.push(elementos);
    }
    let segundoArreglo = [];
    let cantidaSegundoArreglo = parseInt(prompt("Ingrese la cantiadad de elementos que tendra el segundo arreglo"))
    for (let index = 0; index < cantidaSegundoArreglo; index++) {
        let elementos = parseInt(prompt(`Ingrese elemento ${index+1}`));
        segundoArreglo.push(elementos)
    }
    let promedioPrimerArreglo = 0
    let contadorPrimerArreglo = 0
    primerArreglo.forEach(i => {
        promedioPrimerArreglo += i
        contadorPrimerArreglo++
    });
    let promedioA = promedioPrimerArreglo/contadorPrimerArreglo
    let promedioSegundoArreglo = 0
    let contadorSegundoArreglo = 0
    segundoArreglo.forEach(i => {
        promedioSegundoArreglo += i
        contadorSegundoArreglo++
    });
    let promedioB = promedioSegundoArreglo/contadorSegundoArreglo
    let promedioMayor = 0
    if (promedioA > promedioB) {
        promedioMayor = promedioA + " del primer arreglo"
    } if (promedioB > promedioA) {
        promedioMayor = promedioB + " del segundo arreglo"
    } if (promedioA === promedioB) {
        promedioMayor = "ambos arreglos tienen el mismo promedio"
    }
    return promedioMayor
}
console.log(arreglo());
//terminado