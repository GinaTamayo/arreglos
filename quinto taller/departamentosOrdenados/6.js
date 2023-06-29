/*6. Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
“Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
queden en el arreglo que les corresponde. Use ciclos.*/

function departamentos() {
    let valle = [`Cali`, `Tulua`, `Cartago`, `Salento`];
    let quindio = [`Cordoba`,`Armenia`, `Palmira`, `Circasia`];
    let valleOrdenado = [];
    let quindioOrdenado = [];
    for (let index = 0; index < valle.length; index++) {
        const municipiosValle = [`Cali`,`Tulua`,`Cartago`,`Palmira`];
        if (municipiosValle.includes(valle[index])) {
            valleOrdenado.push(valle[index])
        } else {
            quindioOrdenado.push(valle[index])
        }
    }
    for (let index = 0; index < quindio.length; index++) {
        const municipiosQuindio = [`Salento`,`Cordoba`,`Armenia`,`Circasia`]
        if (municipiosQuindio.includes(quindio[index])) {
            quindioOrdenado.push(quindio[index])
        } else {
            valleOrdenado.push(quindio[index])
        }
    }
    console.log(valleOrdenado);
    console.log(quindioOrdenado);
}
departamentos()
//terminado

