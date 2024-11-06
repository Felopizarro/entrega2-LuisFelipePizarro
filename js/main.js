function imc () {
    let alturam = parseInt (prompt("Ingresa tu estatura en metros (x.xx)"))
    let peso = parseInt (prompt("Ingresa tu peso en kilogramos"))
    let imctotal = peso / (alturam^2)
    alert("Tu indice de masa corporal es de "+imctotal)
}
