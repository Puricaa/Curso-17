function jugarPiedraPapelTijera() {
    // obtener la elección del usuario
    const eleccionUsuario = prompt ('Elige piedra, papel o tijera');
    // Generar una elección aleatoria para la computadora
    const opciones = ['piedra','papel','tijera'];
    const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    // comparar las elecciones y determinar el ganador
    if (eleccionUsuario === eleccionComputadora) {
        alert("Es un empate!");
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        alert("Ganaste!");
    } else {
        alert("Perdite!");
    }
}