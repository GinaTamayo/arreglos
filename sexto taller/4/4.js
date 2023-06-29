/*4.Valor (2 puntos) Pedro trabaja en una empresa
desarrolladora que está haciendo un software para
el cliente orbi (una empresa multinacional). Pedro
requiere una función que reciba como argumento
el arreglo de caracteres ["b", "p", "s", "z", "o", "b",
"a", "w", "r", “i”] y muestre si es posible formar la
palabra orbi con los elementos del arreglo.
.En caso de ser posible, quite los elementos del
arreglo que no sirven para formar la palabra orbi y
luego ordene el arreglo para que quede como el
siguiente: [“o”, “r”, “b”, “i”]. 
Cree la función que requiere Pedro. Haga el
análisis y luego codifique*/
function arreglo(elementos) {
    let orbi = ['o','r','b','i'];
    let arregoOrdenao = [];
        if (elementos.includes('o') && elementos.includes('r') && elementos.includes('b') && elementos.includes('i')) {
           let borrar = 0
           while (elementos.length > borrar) {
              if (!orbi.includes(elementos[borrar])) {
                
                elementos.splice(borrar,1)
              } else {
                borrar++
              }
           }
          for (let index = 0; index < orbi.length; index++) {
            let posicion = 0
            while (elementos.length > posicion) {
                if (orbi[index] == elementos[posicion]) {
                    arregoOrdenao.push(elementos[posicion])
                    
                }
                posicion++
            }
          }
          let repetidas = 0
          while (arregoOrdenao.length > repetidas) {
            if (arregoOrdenao[repetidas] == arregoOrdenao[repetidas+1]) {
                arregoOrdenao.splice(repetidas,1)
            } else{
                repetidas++
            }
          }
               

           return arregoOrdenao
        }
        
    
    
}
let pedro = ["b", "p", "s", "z", "o", "b","a", "w", "r", "i"]
let valor = arreglo(pedro);
console.log(valor);