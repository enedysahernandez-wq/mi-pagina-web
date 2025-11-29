let num1;
let num2;
let operacion; 

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: no se puede dividir entre cero.";
        }
        return num1 / num2;
    } else {
        return "Error: operación no válida.";
    }
}

alert(
    "Bienvenido a la calculadora básica en JavaScript.\n" +
    "Escribe 'suma', 'resta', 'multiplicacion', 'division' o 'salir' para terminar."
);

while (true) {
    operacion = prompt(
        "¿Qué operación deseas realizar?\n" +
        "Opciones: suma, resta, multiplicacion, division o salir"
    );

    if (operacion === null) {
        alert("No se ingreso operacion. La calculadora terminará.");
        break;
    }

    operacion = operacion.toLowerCase().trim();

    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
        break;
    }
    if (
        operacion !== "suma" &&
        operacion !== "resta" &&
        operacion !== "multiplicacion" &&
        operacion !== "division"
    ) {
        alert("Operación no válida. Intenta de nuevo.");
        continue; 
    }
    let num1Texto = prompt("Ingresa el primer número:");
    if (num1Texto === null) {
        alert("No ingresaste un número. La operación se cancelará.");
        continue;
    }

    let num2Texto = prompt("Ingresa el segundo número:");
    if (num2Texto === null) {
        alert("No ingresaste un número. La operación se cancelará.");
        continue;
    }
    num1 = parseFloat(num1Texto);
    num2 = parseFloat(num2Texto);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Debes ingresar números válidos. Inténtalo de nuevo.");
        continue;
    }

    let resultado = realizarOperacion(num1, num2, operacion);
    alert("El resultado de la " + operacion + " es: " + resultado);
}
