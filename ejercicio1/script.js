// Variables globales
let contador = 0;
const LIMITE_MIN = -10;
const LIMITE_MAX = 10;

// Obtener elementos del DOM
const contadorElement = document.getElementById('contador');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');
const btnReset = document.getElementById('reset');
const mensajeElement = document.getElementById('mensaje');

// Función para actualizar la pantalla
function actualizarContador() {
    contadorElement.textContent = contador;
    
    // Condicionales para mostrar mensajes
    if (contador === LIMITE_MAX) {
        mensajeElement.textContent = '¡Límite máximo alcanzado!';
        mensajeElement.className = 'limite';
    } else if (contador === LIMITE_MIN) {
        mensajeElement.textContent = '¡Límite mínimo alcanzado!';
        mensajeElement.className = 'limite';
    } else if (contador === 0) {
        mensajeElement.textContent = 'Contador en cero';
        mensajeElement.className = 'normal';
    } else {
        mensajeElement.textContent = '';
        mensajeElement.className = '';
    }
}

// Función para incrementar
function incrementar() {
    if (contador < LIMITE_MAX) {
        contador++;
        actualizarContador();
    }
}

// Función para decrementar
function decrementar() {
    if (contador > LIMITE_MIN) {
        contador--;
        actualizarContador();
    }
}

// Función para resetear
function reset() {
    contador = 0;
    actualizarContador();
}

// Eventos del DOM
btnIncrementar.addEventListener('click', incrementar);
btnDecrementar.addEventListener('click', decrementar);
btnReset.addEventListener('click', reset);

// Inicializar la pantalla
actualizarContador();

// Eventos de teclado (opcional)
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' || event.key === '+') {
        incrementar();
    } else if (event.key === 'ArrowDown' || event.key === '-') {
        decrementar();
    } else if (event.key === 'r' || event.key === 'R') {
        reset();
    }
});