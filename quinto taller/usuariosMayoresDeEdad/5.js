/*5. Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
edad*/
function usuarios() {
    let cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios que van a registrarse"))
    let nombres = []
    for (let index = 0; index < cantidadUsuarios; index++) {
        let nombresUsuarios = prompt("Ingrese su nombre")
        let edad = parseInt(prompt("Ingrese su edad"))
        if (edad >= 18) {
            nombres.push(nombresUsuarios)
        }
    }
    nombres.forEach(i => {
        console.log(i);
    });
}
usuarios()
//terminado