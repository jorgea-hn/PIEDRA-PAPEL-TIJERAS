var main = document.querySelector("#main")
var mensaje = document.querySelector("#mensaje")
var n_partidas = document.querySelector("#n_partidas")
var fin = document.querySelector("#fin")
var fin_contenedor = document.querySelector("#fin_contenedor")
var fin_texto = document.querySelector("#fin_texto")
var reinicio = document.getElementById("reinicio")

var value_jugador = document.querySelector("#value_jugador")
var value_pc = document.querySelector("#value_pc")

var opcionj = ""
var opcionpc = ""
var resultado = ""

var partidas = 5
var jugador = 0
var pc = 0

var piedra = document.getElementById("piedra");;
piedra.addEventListener('click', () => {
    if (jugador == 5 || pc ==5) {
        main.style.display = "none"
        fin.innerHTML = "FIN DEL JUEGO"
        fin_contenedor.style.display="block"
        ganador()
    }
    else {
        opcionj = "Piedra"
        document.getElementById("imagen-jugador").src = "img/piedras.png";
        opcionpc = getComputerChoice()
        resultado = rondas(opcionj, opcionpc)
        mensaje.innerHTML = resultado
        game(resultado)
    }
});

var papel = document.getElementById("papel");;
papel.addEventListener('click', () => {
    if (jugador == 5 || pc ==5) {
        main.style.display = "none"
        fin.innerHTML = "FIN DEL JUEGO"
        fin_contenedor.style.display="block"
        ganador()
    }
    else {
        opcionj = "Papel"
        document.getElementById("imagen-jugador").src = "img/papels.png";
        opcionpc = getComputerChoice()
        resultado = rondas(opcionj, opcionpc)
        mensaje.innerHTML = resultado
        game(resultado)
    }
});

var tijeras = document.getElementById("tijeras");;
tijeras.addEventListener('click', () => {
    if (jugador == 5 || pc ==5) {
        main.style.display = "none"
        fin.innerHTML = "FIN DEL JUEGO"
        fin_contenedor.style.display="block"
        ganador()
    }
    else {
        opcionj = "Tijeras"
        document.getElementById("imagen-jugador").src = "img/tijerass.png";
        opcionpc = getComputerChoice()
        resultado = rondas(opcionj, opcionpc)
        mensaje.innerHTML = resultado
        game(resultado)
    }
});


reinicio.addEventListener('click', () => {
    main.style.display = "block"
    fin_contenedor.style.display="none"
    partidas = 5
    jugador = 0
    pc = 0
    value_jugador.innerHTML = "0"
    value_pc.innerHTML = "0"
    document.getElementById("imagen-jugador").src = "img/circulo.png";
    document.getElementById("imagen-pc").src = "img/circulo.png";
});


function getComputerChoice() {
    let valor = Math.floor(Math.random() * 3);
    const opciones = ["Piedra", "Papel", "Tijeras"]
    if (valor == 0) {
        document.getElementById("imagen-pc").src = "img/piedras.png";
        return opciones[0]
    }
    else if (valor == 1) {
        document.getElementById("imagen-pc").src = "img/papels.png";
        return opciones[1]
    }
    else if (valor == 2) {
        document.getElementById("imagen-pc").src = "img/tijerass.png";
        return opciones[2]
    }
}

function rondas(jugador, pc) {
    let win = "Ganaste esta Partida"
    let loser = "Perdiste esta Partida"
    let tie = "Empataste"

    pc = pc.toLowerCase()
    jugador = jugador.toLowerCase()

    if (jugador == "piedra") {
        if (pc == "tijeras") {
            return win
        }
        else if (pc == "papel") {
            return loser
        }
        else if (pc == "piedra") {
            return tie
        }
    }
    else if (jugador == "papel") {
        if (pc == "tijeras") {
            return loser
        }
        else if (pc == "papel") {
            return tie
        }
        else if (pc == "piedra") {
            return win
        }
    }
    else if (jugador == "tijeras") {
        if (pc == "tijeras") {
            return tie
        }
        else if (pc == "papel") {
            return win
        }
        else if (pc == "piedra") {
            return loser
        }
    }
}


function game(resultado) {
    if (resultado == "Ganaste esta Partida") {
        jugador += 1
    }
    else if (resultado == "Perdiste esta Partida") {
        pc += 1
    }
    partidas -= 1

    value_jugador.innerHTML = jugador
    value_pc.innerHTML = pc
}


function ganador(){
    if (jugador==5){
        fin_texto.innerHTML="Ganaste la guerra poderoso guerrero."
    }else{
        fin_texto.innerHTML="Perdiste, eres un insecto clase baja no estas listo para esto."
    }
}
