/*2. Valor (1 punto) Shilrley trabaja como
programadora en la empresa Data East
programando videojuegos. Ella requiere una
función que reciba como argumentos los arreglos
[“s”, “w”, “@”, “3”, “a”, “p”] y [“#”, “p”, “a”, “z”, “@]
y retorne un arreglo con los elementos que se
repiten en ambos, emparejados como una cadena,
en este caso: [“@@”, “aa”, “pp”].
Cree la función que requiere Shirley*/
function elementos(a, b) {
    let arreglo = []
    for (let index = 0; index < a.length; index++) {
         let caracter = a[index]
        for (let index = 0; index < b.length; index++) {
            if (b[index] === caracter) {
                arreglo.push(b[index]+caracter)
            }
        }
    }
    return arreglo
}

let arreglo1 = ['s','w','@','3','a','p']
let arreglo2 = ['#','p','a','z','@']
let valor = elementos(arreglo1, arreglo2);
console.log(valor);