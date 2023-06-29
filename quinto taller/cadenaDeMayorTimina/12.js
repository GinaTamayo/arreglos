/*12. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las 
letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número 
de Timina (T). Se le debe pedir al usuario que introduzca los arreglos*/
function ADN() {
    let cantiadad = parseInt(prompt("Ingrese la cantidad de cadenas de ADN"));
    let arregloADN = [];
    for (let index = 0; index < cantiadad; index++) {
        let valido = true
        let cadena = "";
        while (valido) {
            cadena = prompt(`Ingrese la cadena de ADN numero ${index+1}`)
            cadena = cadena.toUpperCase();
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] != "A" && cadena[i] != "T" && cadena[i] != "G" && cadena[i] != "C") {
                valido = true;
            } else {
                valido = false;
            }
        }          
    }
    arregloADN.push(cadena);
}
    let contador = 0
    let mayorTimina = ``
    for (let index = 0; index < arregloADN.length; index++) {
        let acumulador = arregloADN[index]
        let cantidadT = 0;
        for (let index = 0; index < acumulador.length; index++) {
            if (acumulador[index] == "T") {
                cantidadT++
           }
        }
        if (cantidadT > contador) {
            contador = cantidadT
            mayorTimina = index
        }
    }
    return `La cantidad de Timina es ${contador} y la cadena de ADN con esta cantidad es la cadena ${mayorTimina+1}`
}
console.log(ADN());