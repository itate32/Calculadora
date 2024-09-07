let pantalla = document.getElementById("pantalla");
let resetearPantalla = false;

function agregarNumero(numero) {
    if (resetearPantalla) {
        pantalla.value = "";  // Si venimos de una operación previa, limpiamos la pantalla
        resetearPantalla = false;
    }
    pantalla.value += numero;  // Agregar el número al contenido actual de la pantalla
}

function agregarSimbolo(simbolo) {
    // Solo agregar un símbolo si la pantalla no está vacía y no termina con otro símbolo
    if (pantalla.value !== "" && !isNaN(pantalla.value[pantalla.value.length - 1])) {
        pantalla.value += simbolo;
        resetearPantalla = false;  // No se resetea la pantalla después de agregar un símbolo
    }
}

function limpiar() {
    pantalla.value = "";
}

function borrar() {
    pantalla.value = pantalla.value.slice(0, -1);  // Eliminar el último carácter
}

function calcular() {
    try {
        // Evaluamos la operación ingresada
        pantalla.value = eval(pantalla.value);
        resetearPantalla = true;  // Después de calcular, reseteamos la pantalla para el siguiente número
    } catch (e) {
        pantalla.value = "Error";  // Si hay algún error en la operación, mostramos "Error"
    }
}