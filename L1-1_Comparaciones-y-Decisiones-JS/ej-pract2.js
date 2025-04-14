///2do EJERCICIO DE PRÁCTICA | Piedra, Papel o Tijera

///Objetivo: Crear un porgrama que haga posible jugar con la computadora al piedra, papel o tijera.
//Para ello se deben de utilizar las funciones:

//Math.random(): La cual genera un número decimal aleatorio. Que al multiplicarlo por un número entero, gana un entero.
//Math.floor(): Redondea hacia abajo, quitando los decimales.
//Math.ceil(): Es el equivalente a Math.floor() pero este redondea hacia arriba.

///1er PUNTO | Establecer mis variables
//Para desarrollar el juego necesito variables que me ayuden a seguir jugando, establecer los puntos del usuario y los puntos de la computadora. Es posible agregar un bucle con 'while' para que se puedan generar más rondas del juego. 

let keepPlaying = true;
let userPoints = 0;
let computerPoints = 0;

///2do PUNTO | El usuario debe de elegir la opción con la que desea jugar en ese ciclo del juego.
// El signo '!' se traduce como: NOT.
/// '!==' operador de control de desigualda estricta: 
///Compara dos valores sin realizar ninguna conversión de tipo. Devuelve ' true ' solo si los valores NO SON IGUALES y NO SON DEL MISMO TIPO DE DATO.

while (keepPlaying) {
   let userChoice = window.prompt("¿Con cuál opción deseas iniciar el juego? Piedra 🪨, Papel 🧻 o Tijera ✂️");
   if (!userChoice) {
      alert("No has escrito ninguna opción para iniciar el juego, ¿No quieres juegar conmigo? 😭");
      continue; // El ciclo avanza
}

userChoice = userChoice.toLowerCase(); // Hará que el string se guarde con minúsculas sin importar como lo escriba el usuario.

if (userChoice !== "piedra" && userChoice !== "papel" && userChoice !== "tijera") {
   alert("Opción inválida. Por favor escribe: Piedra, Papel o Tijera. 😊");
   continue;
}

// 3er PUNTO | Convertir a mayúscula inicial para poder compara correctamente con la computadora.  En caso de que el usuario lo haya escrito diferente.
// Operador de comparación ===: Se traduce como igualdad estricta.

if (userChoice === "piedra") userChoice = "Piedra";
if (userChoice === "papel") userChoice = "Papel";
if (userChoice === "tijera") userChoice = "Tijera";

//4to PUNTO | Obtener la elección aleatoria de la computadora.
// Los símbolos ${...} : Se llaman Plantillas Literales o Template Strings. Permiten insertar de forma dinámica el resultado de cualquier expresión de JavaScript directamente dentro de una cadena, sin necesidad de concatenar con el operador ' + '. 
//Ejemplo: 
//Concatenación tradicional: const mensajeTradicional = "Mi nombre es " + nombre + " y tengo " + edad + " años.";
//Plantilla literal: const mensajeLiteral = `Mi nombre es ${nombre} y tengo ${edad} años.`;


let randomNumber = Math.floor(Math.random()* 3);
let computerChoice;

if (randomNumber === 0) computerChoice = "Piedra";
else if (randomNumber === 1) computerChoice = "Papel";
else computerChoice = "Tijera";

alert(`Yo elegí: ${computerChoice}`);

//5to PUNTO | Determinar un ganador
// Estos símbolos || : Significan OR.
// Estos símbolos ++ : Significan Incremento y tienen dos usos:
// 1) Operador de Post-incremento (variable++): Primero, se utiliza el valor actual de la variable en la expresión en la que aparece. Luego, la variable se incrementa en 1.
//2) Operador de Pre-incremento (++variable): Primero, la variable se incrementa en 1. Luego, el nuevo valor de la variable se utiliza en la expresión en la que aparece.


let gameOutcome = "";

if (userChoice === computerChoice) {
   gameOutcome = "Empate";
   alert("¡Es un empate! 🫱🏼‍🫲🏼");
} else if (
   (userChoice === "Piedra" && computerChoice === "Tijera") ||
   (userChoice === "Papel" && computerChoice === "Piedra") ||
   (userChoice === "Tijera" && computerChoice === "Papel")){
   gameOutcome = "Usuario";
   userPoints++;
   alert("¡Ganaste esta ronda! 🙌");
} else {
   gameOutcome = "Computadora";
   computerPoints++;
   alert("¡Perdiste esta ronda! 😏");
}

// 6to PUNTO | Agregar un marcador
// El símbolo \n : Indica un salto de línea. Cuando JavaScript encuentra \n dentro de una cadena, inserta una nueva línea en la salida.

alert(`Así se encuentra el marcador:\nUsuario: ${userPoints} - Computadora: ${computerPoints}`);

// 7to PUNTO | Preguntar al usuario si quiere iniciar otra ronda.

let answer = window.prompt("¿Quieres jugar de nuevo? (sí / no)");

if (!answer || (answer.toLowerCase()!== "sí" && answer.toLowerCase() !== "sí")){
   keepPlaying = false;
}

}

// 8vo PUNTO | Mostrar el marcador final después de haber jugado varias rondas.
//El símbolo += : Es un operador de asignación compuesta. Es una forma abreviada de realizar una operación de suma y asignación al mismo tiempo. 
// Ejemplo: a += b es equivalente a escribir a = a + b.


let finalMessage = `Este es el marcador final:\nUsuario: ${userPoints} - Computadora ${computerPoints}\n`;

if (userPoints > computerPoints) {
   finalMessage += "¡Felicidades, has ganado el juego! 🥳";
} else if (userPoints < computerPoints) {
   finalMessage += "Computadora haber ganado esta vez 🤖";
} else {
   finalMessage += "Ha sido un empate 🫰";
}

alert(finalMessage);
alert("¡Gracias por jugar conmigo! 💖");

//RECORDATORIO PARA MOI <3 | No cambiar el nombre de las varibles que ya declaré al principio.
// Para evitar, problemas al momento de probar el programa jeje.
