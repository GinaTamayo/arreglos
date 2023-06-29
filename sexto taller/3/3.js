/*3. Valor (1 punto) Mariana, que trabaja en la
empresa BioGenetics S.A, requiere una función que
pida al usuario un arreglo con cuatro cadenas de
ADN como elementos, cada cadena debe ser de
logitud 7. Un ejemplo de un arreglo ingresado por
el usuario sería: [“AATGAAC”, “GTTTTTC”,
“GGTAAAT”, “CCCCATG”]) .Luego de obtener el
arreglo del usuario, muestre cuál es la base que más
se repite en tales cadenas que forman el arreglo.
Recuerde que una cadena de ADN puede contener
las cuatro bases químicas, solo tres bases, solo dos
bases o solo una base, por ejemplo:
“AGTTCCAT” cadena formada por 4 bases
“ATTAGATC” cadena formada por 3 bases
“AATTTATA” cadena formada por 2 bases
“CCCCCCC” cadena formada por 1 base
Cree la función que necesita Mariana.*/
function arreglo() {
    let cadena = [];
    
    for (let index = 0; index < 4; index++) {
        let valido = true
        while (valido) {
            let valor = 0
            let pedirUsuario = prompt(`Ingrese la cadena ${index+1} de ADN`).toUpperCase();
            for (let i = 0; i < pedirUsuario.length; i++) {
                if (pedirUsuario[i] != "A" && pedirUsuario[i] != "G" && pedirUsuario[i] != "C" && pedirUsuario[i] != "T") {
                    valor+=1
                }
            }
            if (valor == 0 && pedirUsuario.length == 7) {
                valido = false
                cadena.push(pedirUsuario);
            }
        }
    }
    let a = 0;
    let g = 0;
    let c = 0;
    let t = 0;
    let contador = 0;
    let baseQueMasSeRepite = ``;
    for (let index = 0; index < cadena.length; index++) {
        let recorrer = cadena[index];
        for (let index = 0; index < recorrer.length; index++) {
            switch (recorrer[index]) {
                case 'A':
                    a++
                    break;
                    case 'C':
                    c++
                    break;
                    case 'G':
                    g++
                    break;
                    case 'T':
                    t++
                    break;
            }
        }
    }
    if (a > c && a > g && a > t) {
        baseQueMasSeRepite = 'La adenina (A)'
        contador = a;
    } else if (c > a && c > g && c > t) {
        baseQueMasSeRepite = 'La citocina (C)'
        contador = c;
    } else if (g > a && g > c && g > t) {
        baseQueMasSeRepite = 'La guanina (G)'
        contador = g;
    } else if (t > a && t > g && t > c) {
        baseQueMasSeRepite = 'La timina (A)'
        contador = t;
    }
    return `${baseQueMasSeRepite} es la base qye mas se repite, y se repite ${contador} veces`
}
console.log(arreglo());