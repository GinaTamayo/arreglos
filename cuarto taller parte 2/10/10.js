/*10. Dado el arreglo de caracteres: ["z", "p", "s", "z", "o", "b", "a", "w", "d"] 
use ciclo for para inspeccionar los elementos del arreglo y mostrar si con tales 
elementos sería posible formar la palabra adso.*/
let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let concatenar = "";
let a = 0;
let d = 0;
let s = 0;
let o = 0;
for (let index = 0; index < arreglo.length; index++) {
    switch (arreglo[index]) {
        case "a":
            a++
            break;
            case "d":
            d++
            break;
            case "s":
            s++
            break;
            case "o":
            o++
            break; 
    }
    
}
    if (a > 0 && d > 0 && s > 0 && o > 0) {
        console.log("Es posible formar la palabra 'adso'");
    } else {
        console.log("no es posible formar la palabra 'adso'");
    }

