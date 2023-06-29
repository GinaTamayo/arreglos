//Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo
//["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema
function recibirLetra() {
    let letra = prompt("Ingrese una letra").toLowerCase();
    let abecedario = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    while ((!abecedario.includes(letra))) {
        letra = prompt("Vuela e ingrese una letra");
    }
    let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] === letra) {
            console.log("la letra", letra, "corresponde al elemento en la posicion", index);
        } 
    }
}
recibirLetra()
