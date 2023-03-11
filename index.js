function getComputerChoice(){
    let valor =  Math.floor(Math.random() * 3);

    const opciones = ["Piedra","Papel","Tijeras"]

    if (valor ==0){
        return opciones[0]
    }
    else if (valor ==1){
        return opciones[1]
    }
    else if (valor ==2){
        return opciones[2]
    }
}

// console.log(getComputerChoice())


function rondas(jugador, pc){
    let win = "Ganaste esta Partida"
    let loser = "Perdiste esta Partida"
    let tie = "Empataste"

    pc = pc.toLowerCase()
    jugador = jugador.toLowerCase()


    console.log("Jugador: ", jugador)
    console.log("Computadora: ",pc)
    if (jugador =="piedra"){
        if (pc == "tijeras"){
            return win
        }
        else if (pc == "papel"){
            return loser
        }
        else if (pc == "piedra"){
            return tie
        }
    }
    else if (jugador =="papel"){
        if (pc == "tijeras"){
            return loser
        }
        else if (pc == "papel"){
            return tie
        }
        else if (pc == "piedra"){
            return win
        }
    }
    else if (jugador =="tijeras"){
        if (pc == "tijeras"){
            return tie
        }
        else if (pc == "papel"){
            return win
        }
        else if (pc == "piedra"){
            return loser
        }
    }
    
}

partida = rondas("PIEDRA",getComputerChoice())
console.log(partida)