
/*cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.*/
function adn(cadena) {
    let a = ""
    let c = ""
    let t = ""
    let g = ""
    for (let index = 0; index < cadena.length; index++) {
        let cadenaADN = cadena[index];
        for (let index = 0; index < cadenaADN.length; index++) {
            switch (cadenaADN[index]) {
                case "A":
                    a += cadenaADN[index];
                    break;
                    case "C":
                    c += cadenaADN[index]
                    break;
                    case "T":
                    t += cadenaADN[index]
                    break;
                    case "G":
                    g += cadenaADN[index]
                    break;
                    default:
                        return "Las bases validas son A, C, T y G"
            }
        }
    }
    console.log(a," ",c," ",t," ",g);
}
let cadenaDeADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
let total = adn(cadenaDeADN)
console.log(total);
//terminada
