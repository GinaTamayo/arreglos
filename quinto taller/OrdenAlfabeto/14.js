/*14. Cree una función que reciba un arreglo de letras no repetidas y 
lo retorne ordenado alfabéticamente.Se le debe pedir al usuario que introduzca 
el arreglo*/



function alfabeto() {
    let cantiadad = parseInt(prompt("Ingrese la cantidad de elementos"))
    let arreglo = [];
    let arreglo2 = []
    let abecedario = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for (let index = 0; index < cantiadad; index++) {
        let letras = prompt(`Ingrese el elemento ${index+1}`).toLocaleUpperCase();
        while (arreglo.includes(letras) || (!abecedario.includes(letras))) {
                letras = prompt(`Vuelva y Ingrese el elemento ${index+1}`).toLocaleUpperCase();
            }
            arreglo.push(letras)
        }
        
        for (let index = 0; index < abecedario.length; index++) {
            for (let i = 0; i < arreglo.length; i++) {
                if (abecedario[index] == arreglo[i]) {
                    arreglo2.push(arreglo[i])
                }
            }
        }
        let posicion = 0
        while (posicion < arreglo2) {
            if (arreglo2[posicion] == arreglo2[posicion+1]) {
                arreglo2.splice(posicion,1)
            } else {
                posicion++
            }
        }
}
console.log(alfabeto());
//terminado