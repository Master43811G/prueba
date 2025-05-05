document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const playPauseIcon = document.getElementById('playPause');
  
    // Autoplay con fallback por si falla en móviles
    music.play().catch(err => {
      console.warn('Autoplay bloqueado. Esperando interacción del usuario.');
    });
  
    let isPlaying = true;
  
    playPauseIcon.addEventListener('click', () => {
      if (isPlaying) {
        music.pause();
        playPauseIcon.src = "img/play-icon.png";
      } else {
        music.play();
        playPauseIcon.src = "img/pause-icon.png";
      }
      isPlaying = !isPlaying;
    });
  });
  // Mostrar elementos con fade-in al cargar
document.querySelectorAll('.fade-in').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 100);
  });
  const countdownElement = document.getElementById('countdown');

// Fecha del evento: 18 de julio de 2025 a las 20:00
const eventDate = new Date('2025-07-18T20:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    countdownElement.textContent = "¡El evento ha comenzado!";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownElement.textContent = `Faltan: ${days} días ${hours.toString().padStart(2, '0')} hrs ${minutes.toString().padStart(2, '0')} min ${seconds.toString().padStart(2, '0')} seg`;

  // Ajustar el tiempo hasta el siguiente segundo exacto
  const nextTick = 1000 - (now.getMilliseconds());
  setTimeout(updateCountdown, nextTick);
}

updateCountdown(); // inicia el contador
