var opcion = prompt("Elige una opcion: piedra, papel o tijera");
var opciones = ["piedra", "papel", "tijera"];
var opcionMaquina = opciones[Math.floor(Math.random() * 3)];
console.log(opcionMaquina);

while (true) {
    opcion = prompt(menu);
    if (opcion === opcionMaquina) {
        console.log("Empate");
    } else if (opcion === "piedra" && opcionMaquina === "tijera" || opcion === "papel" && opcionMaquina === "piedra" || opcion === "tijera" && opcionMaquina === "papel") {
        alert("Ganaste, la computadorajugo: " + opcionMaquina);
    } else {
        alert("Perdiste, la computadora jugo: " + opcionMaquina);
    }
}