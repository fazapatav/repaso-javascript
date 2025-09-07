// Variables globales
let operacionActual = '';
let operadorAnterior = '';
let operando1 = null;
let operando2 = null;
let operador = null;
let esperandoOperando = false;

// Arreglo para el historial
let historial = [];

// Obtener elementos del DOM
const display = document.getElementById('display');
const listaHistorial = document.getElementById('listaHistorial');

// Objeto con las operaciones matemáticas
const operaciones = {
    '+': function(a, b) { return a + b; },
    '-': function(a, b) { return a - b; },
    '*': function(a, b) { return a * b; },
    '/': function(a, b) { 
        if (b === 0) {
            throw new Error('División por cero');
        }
        return a / b; 
    }
};

// Función para actualizar el display
function actualizarDisplay(valor) {
    display.value = valor;
}

// Función para agregar números
function agregarNumero(numero) {
    if (esperandoOperando) {
        operacionActual = numero;
        esperandoOperando = false;
    } else {
        operacionActual = operacionActual === '0' ? numero : operacionActual + numero;
    }
    actualizarDisplay(operacionActual);
}

// Función para agregar punto decimal
function agregarPunto() {
    if (esperandoOperando) {
        operacionActual = '0.';
        esperandoOperando = false;
    } else if (operacionActual.indexOf('.') === -1) {
        operacionActual += '.';
    }
    actualizarDisplay(operacionActual);
}

// Función para agregar operadores
function agregarOperador(nuevoOperador) {
    const valorActual = parseFloat(operacionActual);
    
    // Condicional para manejar operaciones consecutivas
    if (operando1 === null) {
        operando1 = valorActual;
    } else if (operador) {
        const resultado = realizarCalculo();
        
        if (resultado === null) {
            return;
        }
        
        operando1 = resultado;
        actualizarDisplay(String(resultado));
    }
    
    esperandoOperando = true;
    operador = nuevoOperador;
}

// Función para realizar el cálculo
function realizarCalculo() {
    const anterior = operando1;
    const actual = parseFloat(operacionActual);
    
    if (anterior === null || operador === null) {
        return null;
    }
    
    try {
        // Usar el objeto de operaciones para calcular
        const resultado = operaciones[operador](anterior, actual);
        
        // Agregar al historial
        const operacionCompleta = {
            operacion: `${anterior} ${operador === '*' ? '×' : operador} ${actual}`,
            resultado: resultado,
            fecha: new Date().toLocaleTimeString()
        };
        
        historial.push(operacionCompleta);
        actualizarHistorial();
        
        return resultado;
    } catch (error) {
        mostrarError(error.message);
        return null;
    }
}

// Función para calcular (botón igual)
function calcular() {
    const resultado = realizarCalculo();
    
    if (resultado !== null) {
        operacionActual = String(resultado);
        actualizarDisplay(operacionActual);
        operando1 = null;
        operador = null;
        esperandoOperando = true;
    }
}

// Función para limpiar todo
function limpiar() {
    operacionActual = '0';
    operando1 = null;
    operando2 = null;
    operador = null;
    esperandoOperando = false;
    actualizarDisplay('0');
    display.classList.remove('error');
}

// Función para borrar último carácter
function borrarUltimo() {
    if (operacionActual.length > 1) {
        operacionActual = operacionActual.slice(0, -1);
    } else {
        operacionActual = '0';
    }
    actualizarDisplay(operacionActual);
}

// Función para mostrar errores
function mostrarError(mensaje) {
    actualizarDisplay('Error: ' + mensaje);
    display.classList.add('error');
    
    // Limpiar después de 2 segundos
    setTimeout(() => {
        limpiar();
    }, 2000);
}

// Función para actualizar el historial
function actualizarHistorial() {
    listaHistorial.innerHTML = '';
    
    // Condicional para mostrar mensaje si no hay historial
    if (historial.length === 0) {
        listaHistorial.innerHTML = '<li class="empty-historial">No hay operaciones en el historial</li>';
        return;
    }
    
    // Ciclo para mostrar las últimas 10 operaciones
    const ultimasOperaciones = historial.slice(-10).reverse();
    
    for (let i = 0; i < ultimasOperaciones.length; i++) {
        const operacion = ultimasOperaciones[i];
        const li = document.createElement('li');
        li.className = 'historial-item';
        li.innerHTML = `
            <div>${operacion.operacion} = ${operacion.resultado}</div>
            <small>${operacion.fecha}</small>
        `;
        
        // Evento para reutilizar resultado
        li.addEventListener('click', function() {
            operacionActual = String(operacion.resultado);
            actualizarDisplay(operacionActual);
            operando1 = null;
            operador = null;
            esperandoOperando = false;
        });
        
        listaHistorial.appendChild(li);
    }
}

// Función para limpiar historial
function limpiarHistorial() {
    if (historial.length > 0 && confirm('¿Estás seguro de que quieres limpiar el historial?')) {
        historial = [];
        actualizarHistorial();
    }
}

// Eventos de teclado
document.addEventListener('keydown', function(event) {
    const tecla = event.key;
    
    // Números
    if (tecla >= '0' && tecla <= '9') {
        agregarNumero(tecla);
    }
    // Operadores
    else if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
        agregarOperador(tecla);
    }
    // Punto decimal
    else if (tecla === '.' || tecla === ',') {
        agregarPunto();
    }
    // Calcular
    else if (tecla === 'Enter' || tecla === '=') {
        event.preventDefault();
        calcular();
    }
    // Limpiar
    else if (tecla === 'Escape' || tecla.toLowerCase() === 'c') {
        limpiar();
    }
    // Borrar
    else if (tecla === 'Backspace') {
        borrarUltimo();
    }
});

// Inicializar la calculadora
limpiar();
actualizarHistorial();

// Agregar algunas operaciones de ejemplo al historial
const operacionesEjemplo = [
    { operacion: '5 + 3', resultado: 8, fecha: '10:30:15' },
    { operacion: '10 - 4', resultado: 6, fecha: '10:31:22' },
    { operacion: '7 × 6', resultado: 42, fecha: '10:32:10' }
];

// Ciclo para agregar ejemplos
for (let i = 0; i < operacionesEjemplo.length; i++) {
    historial.push(operacionesEjemplo[i]);
}

actualizarHistorial();