// Lista de canciones
const canciones = [
    "/Public/(LETRA) Alta Consigna - El Poder De Tu Mirada.mp3",
    "/Public/Banda El Recodo - Me gusta todo de ti (letra).mp3",
    "/Public/Banda El Recodo - Te Presumo (LETRA).mp3",
    "/Public/Lo que te amo  Crecer Germán letra.mp3",
    "/Public/Río Roma - Tú me cambiaste la vida (Letra).mp3",
    "/Public/Te Regalo - (Video Oficial) - Ulices Chaidez y Sus Plebes - DEL Records 2017.mp3"
];

let indiceCancionActual = 0;

// Obtener referencia al reproductor de música
const music = document.getElementById('backgroundMusic');

// Función para cambiar de canción automáticamente
function cambiarCancion() {
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    music.src = canciones[indiceCancionActual];
    
    // Intentar reproducir la nueva canción
    music.play().catch(() => {
        console.log("Reproducción bloqueada. Se necesita interacción del usuario.");
    });
}

// Agregar evento al botón "Siguiente canción"
document.getElementById('btnSiguiente').addEventListener('click', function() {
    cambiarCancion();
    console.log("Cambiando a la siguiente canción:", canciones[indiceCancionActual]);
});

// Agregar un evento de clic en cualquier parte del documento para iniciar la música
document.addEventListener("click", function iniciarMusica() {
    music.play().then(() => {
        console.log("Reproducción iniciada correctamente.");
    }).catch(() => {
        console.log("No se pudo iniciar la reproducción.");
    });

    // Quitar el evento para evitar múltiples ejecuciones
    document.removeEventListener("click", iniciarMusica);
});

// Evento para cambiar la canción cuando termine
music.addEventListener('ended', cambiarCancion);

// Manejador del botón "Sí"
document.getElementById('siBtn').addEventListener('click', function() {
    alert('¡Sabía que dirías que sí! 💖, Te amo Vivian');
});

// Mover el botón "No" aleatoriamente cuando se pase el mouse sobre él
document.getElementById('noBtn').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

// Función para actualizar la cuenta regresiva hasta San Valentín
function actualizarCuentaRegresiva() {
    const ahora = new Date();
    const sanValentin = new Date(ahora.getFullYear(), 1, 14, 0, 0, 0); // 14 de febrero

    // Si ya pasó este año, establece la fecha para el próximo año
    if (ahora > sanValentin) {
        sanValentin.setFullYear(sanValentin.getFullYear() + 1);
    }

    const diferencia = sanValentin - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = dias;
    document.getElementById('hours').textContent = horas;
    document.getElementById('minutes').textContent = minutos;
    document.getElementById('seconds').textContent = segundos;
}

// Actualizar cada segundo
setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva(); // Llamar de inmediato para mostrar el tiempo sin esperar 1s
