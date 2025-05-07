const countdown = document.getElementById("countdown");
const eventDate = new Date("2025-07-18T20:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.innerText = "¡El evento ha comenzado!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerText = `${days} días : ${hours} horas : ${minutes} minutos : ${seconds} segundos`;
}

setInterval(updateCountdown, 1000);

// Botón de música
const botonMusica = document.getElementById("botonMusica");
const miAudio = document.getElementById("miAudio");

let reproduciendo = false;

botonMusica.addEventListener("click", () => {
  if (reproduciendo) {
    miAudio.pause();
    botonMusica.src = "img/pausa.png"; // Play
    reproduciendo = false;
  } else {
    miAudio.play();
    botonMusica.src = "img/boton-de-reproduccion.png"; // Pause
    reproduciendo = true;
  }
});
