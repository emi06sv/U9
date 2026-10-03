let victoriasUsuario = 0;
let victoriasMaquina = 0;

while (victoriasUsuario < 3 && victoriasMaquina < 3) {

  let jugada = prompt("Elige: Piedra, Papel o Tijera");

  jugada = jugada.toLowerCase().trim();

  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  let mensajeMaquina = `La máquina eligió: ${jugadaMaquina}`;
  console.log(mensajeMaquina);
  alert(mensajeMaquina);

  if (jugada === jugadaMaquina) {
    console.log("Es un empate en esta ronda.");
    alert("Es un empate en esta ronda.");
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    victoriasUsuario++;
    let msj = `¡Ganaste esta ronda! Marcador: Usuario ${victoriasUsuario} - Máquina ${victoriasMaquina}`;
    console.log(msj);
    alert(msj);
  } else {
    victoriasMaquina++;
    let msj = `Perdiste esta ronda. Marcador: Usuario ${victoriasUsuario} - Máquina ${victoriasMaquina}`;
    console.log(msj);
    alert(msj);
  }
}

let campeonFinal = victoriasUsuario === 3 ? "¡Felicitaciones! ¡Sos el campeón del juego!" : "La máquina ganó el juego. ¡Inténtalo de nuevo!";
console.log(campeonFinal);
alert(campeonFinal);