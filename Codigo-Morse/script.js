const morse = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....",
    "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.",
    "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..",
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..", "9": "----."
};
const morseInvertido = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H",
    "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P",
    "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y", "--..": "Z",
    "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5",
    "-....": "6", "--...": "7", "---..": "8", "----.": "9"
};


function codificar() {
    const texto = document.getElementById("mensaje").value.toUpperCase().trim();
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (caracter in morse) {
            resultado += morse[caracter] + " ";
        } else if (caracter === " ") {
            resultado += "  "; // Doble espacio para separar palabras en código Morse
        } else {
            resultado += caracter + " "; // Si no se encuentra en el mapa, se deja el caracter original
        }
    }
    document.getElementById("resultado").textContent = resultado.trim().toLowerCase();
}

function decodificar() {
    const texto = document.getElementById("mensaje").value.trim(); // Eliminar espacios en blanco al principio y al final
    const palabrasMorse = texto.split("   "); // Separar el texto en palabras Morse
    let resultado = "";

    for (let palabraMorse of palabrasMorse) {
        const letrasMorse = palabraMorse.split(" "); // Separar la palabra Morse en letras
        let palabraDecodificada = "";

        for (let letraMorse of letrasMorse) {
            if (letraMorse in morseInvertido) {
            palabraDecodificada += morseInvertido[letraMorse];
            } else {
                // Si la letra Morse no está en el mapa, dejar un espacio
                palabraDecodificada += " ";
            }
    }
        // Agregar la palabra decodificada al resultado
        resultado += palabraDecodificada + " ";
    }
    document.getElementById("resultado").textContent = resultado.trim().toLowerCase(); // Mostrar el resultado decodificado
}


function copiarResultado() {
    const resultado = document.getElementById("resultado").textContent;
    const input = document.createElement('input');
    input.setAttribute('value', resultado);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    window.location.reload();
}

const botonInstrucciones = document.getElementById("instrucciones");
const botonSalir = document.getElementById("salir");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");

function mostrarInstrucciones() {
    container.style.display = "none"
    container2.style.display = "flex"
};
function ocultarInstrucciones() {
    container.style.display = "flex"
    container2.style.display = "none"
};

botonInstrucciones.addEventListener("click",mostrarInstrucciones);
botonSalir.addEventListener("click",ocultarInstrucciones);



const botonCompartir = document.getElementById("compartir");
botonCompartir.addEventListener("click",compartirTexto)

function compartirTexto() {
const textoAcompartir = document.getElementById("resultado").textContent;

if (navigator.share) {
    navigator.share({
        text: textoAcompartir,
        title: "Compartir texto"
    })
    .then(() => console.log("¡texto compartido!"))
    .catch((error) => console.error("Error al compartir texto:", error));
} else {
    // Si el navegador no soporta la Web Share API, muestra un mensaje alternativo
    alert('La función de compartir no está soportada en este navegador. Puedes copiar el texto manualmente.');
}
}

    


