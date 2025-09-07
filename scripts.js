// CONCEPTOS BÁSICOS DE JAVASCRIPT

// ===========================================
// 1. VARIABLES: let, const, var
// ===========================================

console.log("=== VARIABLES ===");

// VAR - Función scope, puede ser redeclarada y reasignada
var miVar = "Soy una variable VAR";
var miVar = "VAR redeclarada"; // Permitido
console.log("VAR:", miVar);

// LET - Bloque scope, puede ser reasignada pero NO redeclarada
let miLet = "Soy una variable LET";
miLet = "LET reasignada"; // Permitido
// let miLet = "ERROR"; // No permitido - redeclaración
console.log("LET:", miLet);

// CONST - Bloque scope, NO puede ser reasignada ni redeclarada
const miConst = "Soy una constante";
// miConst = "ERROR"; // No permitido - reasignación
// const miConst = "ERROR"; // No permitido - redeclaración
console.log("CONST:", miConst);

// Ejemplo de scope (ámbito)
function ejemploScope() {
    if (true) {
        var varEnBloque = "VAR visible fuera del bloque";
        let letEnBloque = "LET solo en este bloque";
        const constEnBloque = "CONST solo en este bloque";
    }
    
    console.log("Fuera del bloque:");
    console.log("VAR:", varEnBloque); // Funciona
    // console.log("LET:", letEnBloque); // Error - no definida
    // console.log("CONST:", constEnBloque); // Error - no definida
}

// ===========================================
// 2. TIPOS DE DATOS
// ===========================================

console.log("\n=== TIPOS DE DATOS ===");

// STRING (Cadenas de texto)
let nombre = "Juan Pérez";
let apellido = 'Gómez';
let saludo = `Hola, ${nombre} ${apellido}!`; // Template literal
console.log("STRING:", saludo);

// NUMBER (Números)
let entero = 42;
let decimal = 3.14159;
let negativo = -100;
console.log("NUMBERS:", entero, decimal, negativo);

// BOOLEAN (Verdadero/Falso)
let esVerdadero = true;
let esFalso = false;
console.log("BOOLEAN:", esVerdadero, esFalso);

// ARRAY (Arreglos)
let colores = ["rojo", "verde", "azul"];
let numeros = [1, 2, 3, 4, 5];
let mixto = ["texto", 42, true, null];
console.log("ARRAYS:", colores, numeros, mixto);

// OBJECT (Objetos)
let persona = {
    nombre: "Ana",
    edad: 25,
    esEstudiante: true,
    materias: ["JavaScript", "HTML", "CSS"],
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};
console.log("OBJECT:", persona);
console.log("Método del objeto:", persona.saludar());

// Verificar tipos de datos
console.log("\nTipos de datos con typeof:");
console.log("typeof 'texto':", typeof "texto");
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof []:", typeof []);
console.log("typeof {}:", typeof {});
console.log("typeof null:", typeof null); // Retorna "object" 
console.log("typeof undefined:", typeof undefined);

// ===========================================
// 5. FUNCIONES: declaración, expresión, arrow
// ===========================================

console.log("\n=== FUNCIONES ===");

// DECLARACIÓN DE FUNCIÓN (Function Declaration)
function sumar(a, b) {
    return a + b;
}
console.log("Función declarada - sumar(5, 3):", sumar(5, 3));

// EXPRESIÓN DE FUNCIÓN (Function Expression)
const restar = function(a, b) {
    return a - b;
};
console.log("Función expresión - restar(10, 4):", restar(10, 4));

// ARROW FUNCTION (Función flecha)
const multiplicar = (a, b) => {
    return a * b;
};
console.log("Arrow function - multiplicar(6, 7):", multiplicar(6, 7));

// Arrow function simplificada (una línea)
const dividir = (a, b) => a / b;
console.log("Arrow function simple - dividir(20, 4):", dividir(20, 4));

// Arrow function con un parámetro (sin paréntesis)
const cuadrado = x => x * x;
console.log("Arrow function un parámetro - cuadrado(5):", cuadrado(5));

// Función con parámetros por defecto
function saludarPersona(nombre = "Usuario", edad = 18) {
    return `¡Hola ${nombre}! Tienes ${edad} años.`;
}
console.log("Función con parámetros por defecto:");
console.log(saludarPersona()); // Usa valores por defecto
console.log(saludarPersona("María", 25)); // Usa valores proporcionados

// Función que retorna otra función (Higher-Order Function)
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const multiplicarPorDos = crearMultiplicador(2);
const multiplicarPorTres = crearMultiplicador(3);

console.log("Higher-Order Function:");
console.log("multiplicarPorDos(5):", multiplicarPorDos(5));
console.log("multiplicarPorTres(4):", multiplicarPorTres(4));

// Función con rest parameters
function sumarTodos(...numeros) {
    return numeros.reduce((suma, num) => suma + num, 0);
}
console.log("Rest parameters - sumarTodos(1,2,3,4,5):", sumarTodos(1, 2, 3, 4, 5));

// ===========================================
// 3. CONDICIONALES: if, else, else if
// ===========================================

console.log("\n=== CONDICIONALES ===");

function evaluarCalificacion(nota) {
    let resultado;
    
    if (nota >= 90) {
        resultado = "Excelente! ";
    } else if (nota >= 80) {
        resultado = "Muy bien! ";
    } else if (nota >= 70) {
        resultado = "Bien ";
    } else if (nota >= 60) {
        resultado = "Suficiente ";
    } else {
        resultado = "Necesitas estudiar más ";
    }
    
    return resultado;
}

// Ejemplos de uso
console.log("Nota 95:", evaluarCalificacion(95));
console.log("Nota 75:", evaluarCalificacion(75));
console.log("Nota 45:", evaluarCalificacion(45));

// Condicionales con operadores lógicos
function puedeConducir(edad, tieneLicencia) {
    if (edad >= 18 && tieneLicencia) {
        return "Puede conducir ";
    } else if (edad >= 18 && !tieneLicencia) {
        return "Necesita obtener licencia ";
    } else {
        return "Muy joven para conducir ";
    }
}

console.log("Edad 20, con licencia:", puedeConducir(20, true));
console.log("Edad 17, sin licencia:", puedeConducir(17, false));

// ===========================================
// 4. CICLOS: for, while, forEach
// ===========================================

console.log("\n=== CICLOS ===");

// FOR LOOP
console.log("Ciclo FOR:");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteración ${i}`);
}

// FOR...OF (para arrays)
console.log("\nFOR...OF con array:");
const frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
    console.log(`Me gusta la ${fruta}`);
}

// FOR...IN (para objetos)
console.log("\nFOR...IN con objeto:");
const estudiante = { nombre: "Carlos", edad: 20, carrera: "Informática" };
for (const propiedad in estudiante) {
    console.log(`${propiedad}: ${estudiante[propiedad]}`);
}

// WHILE LOOP
console.log("\nCiclo WHILE:");
let contador = 1;
while (contador <= 3) {
    console.log(`WHILE: Vuelta ${contador}`);
    contador++;
}

// DO...WHILE
console.log("\nCiclo DO...WHILE:");
let numero = 1;
do {
    console.log(`DO...WHILE: Número ${numero}`);
    numero++;
} while (numero <= 3);

// FOREACH (método de arrays)
console.log("\nMétodo forEach:");
const paises = ["México", "Colombia", "Argentina", "España"];
paises.forEach((pais, indice) => {
    console.log(`${indice + 1}. ${pais}`);
});

// Ejemplo práctico: Procesar array de objetos
const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 }
];

console.log("\nProcesando productos con forEach:");
productos.forEach(producto => {
    const descuento = producto.precio > 100 ? producto.precio * 0.1 : 0;
    const precioFinal = producto.precio - descuento;
    console.log(`${producto.nombre}: $${precioFinal} (descuento: $${descuento})`);
});



// ===========================================
// 6. DOM: getElementById, querySelector, addEventListener
// ===========================================

console.log("\n=== MANIPULACIÓN DEL DOM ===");

/*
NOTA IMPORTANTE: Los siguientes ejemplos de DOM están comentados porque 
requieren un documento HTML para funcionar. Para probarlos, copia este 
código en un archivo HTML y ejecútalo en el navegador.

=== EJEMPLO BÁSICO DE HTML NECESARIO ===

<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo DOM</title>
</head>
<body>
    <h1 id="titulo">Mi Página Web</h1>
    <p id="parrafo">Este es un párrafo inicial</p>
    <button id="boton">Haz clic aquí</button>
    <input type="text" id="entrada" placeholder="Escribe algo...">
    <div id="resultado"></div>
    
    <script>
        // Aquí va el código JavaScript
    </script>
</body>
</html>

=== CÓDIGO JAVASCRIPT PARA EL EJEMPLO ===
*/

// SELECCIÓN DE ELEMENTOS DEL DOM
console.log("Selección de elementos:");

// getElementById - Selecciona un elemento por su ID
/*
const titulo = document.getElementById('titulo');
console.log("Elemento título:", titulo);
console.log("Texto del título:", titulo.textContent);

const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');
const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');
*/


// EVENTOS BÁSICOS
console.log("Manejo de eventos:");

// Evento click
/*
boton.addEventListener('click', function() {
    resultado.textContent = "¡Botón clickeado!";
    resultado.style.color = "green";
});
*/

// Evento input (se ejecuta cuando el usuario escribe)
/*
entrada.addEventListener('input', function(event) {
    const texto = event.target.value;
    resultado.textContent = `Escribiste: ${texto}`;
    resultado.style.color = texto.length > 5 ? "blue" : "red";
});
*/




