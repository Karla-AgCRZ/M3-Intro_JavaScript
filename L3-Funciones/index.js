//2DO PASO: DESARROLLANDO LA LÓGICA 

// 1er Ejercicio | Crear un programa que permita devolver un saludo. Por medio de la declaración de una 
// función SIN PARÁMETROS.

function getGreeting() {
    console.log("¡HOLA MUNDO! 🖖");
};
getGreeting();  // Se manda a llamar a la función para que ejecute el código que está dentro de las llaves.


//2do Ejercicio | Crear un programa que permita realizar una suma. 
// Declarando una función CON PARÁMETROS.

//Los parámetros de getSuma también pueden ser: X, y | a,b | num1, num2. 
//Dependiendo de lo que se requiera obtener.

//Objetivo del código: Primero, define una función 'getSuma' para después recibir dos parámetros 'num1, num2'.
//Para devolver un valor de salida con 'return'; el cual mediante 'console.log' devuelve un mensaje al 
// desarrollador a través del inspector con dicho valor de salida.

function getSuma(num1, num2) {
    return num1 + num2;
};
console.log("La suma es: " + getSuma(2,2)); // <---- Esta es una concatenación; la cual al utilizar 'Template strings' se simplica.
// al unir el texto con el dato de salida de la función. 

// El signo (;) es para declarar que un código termino de ser escrito; pero JavaScript al ser débilmente tipado 
// no es tan estricto en ello y continua funcionando sin necesidad de esto. 

// 3er Ejercicio: Función con párametrosque permite realizar una suma; donde JavaScript aplica la 
// habilidad por defecto llamada 'Hoisting'.

function getSum(x,y) {
    console.log(`La suma es: ${x + y}`); //Mensaje al desarrollador.
    alert(`La suma es: ${x + y}`); // Mensaje al usuario. 
}

// Se solicita al usuario los datos para convertirlos a números. De esta manera,
//JavaScript aplica el 'hoisting' y mueve la declaración de las variables 'const x' y 'const y'
//al principio del código. 

// La función 'parseFloat' convierte el contenido de una cadena de texto
// a un número decimal.

const x = parseFloat(prompt("Ingrese un número: "));
const y = parseFloat(prompt("Ingrese otro número: "));

// en esta línea se verifica que los valores ingresados sean válidos.
// La función isNaN: Significa 'is not a number'.
//El símbolo || : significa OR.

if(isNaN(x) || isNaN(y)) {
    console.log("Por favor ingrese números que sean válidos.");
    alert("Por favor ingrese números que sean válidos.");
} else {
    getSum(x, y); // Se llama a la función con los valores ingresados.
}

// DIFERENCIAS CLAVE ENTRE EL EJERCICIO 2 Y 3:
// 1️⃣ la función getSuma(x, y) en el ejercicio 3, ahora puede recibir
// parámetros en lugar de pedir los valores dentro de la función.

// 2️⃣ Los prompt() se ejecutan antes de llamar a la función, 
// y los valores ingresados se validan antes de usarlos.

// 3️⃣ Si los valores ingresados no son números, se muestra
// un mensaje de error y la función no se ejecuta; debido a la función
// isNaN.