/*7. Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
“Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
verduras) queden en el arreglo que les corresponde. Use ciclos.*/
function comestibles() {
    arreglo1 = ['Pera', 'Cebolla', 'Limón', 'Pimentón'];
    arreglo2 = ['Manzana','Banano', 'Lechuga', 'Perejíl'];
    let frutas = [];
    let verduras = [];
    for (let index = 0; index < arreglo1.length; index++) {
        let arregloOrdenado = ['Pera','Limón','Manzana','Banano']
        if (arregloOrdenado.includes(arreglo1[index])) {
            frutas.push(arreglo1[index])
        } else [
            verduras.push(arreglo1[index])
        ]
    }
    for (let index = 0; index < arreglo2.length; index++) {
        let arregloOrdenado = ['Cebolla','Pimentón','Lechuga','Perejíl']
        if (arregloOrdenado.includes(arreglo2[index])) {
            verduras.push(arreglo2[index])
        } else [
            frutas.push(arreglo2[index])
        ]
    }
    console.log(frutas);
    console.log(verduras);
}
comestibles()
//terminado