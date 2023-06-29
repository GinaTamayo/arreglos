//5. Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
//mostrar si el nombre Juan se encuentra dentro del arreglo

let arreglo =  ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] === "Juan") {
        console.log("Juan si se encuentra en los elementos");
        break;
    }
}

