
//2do PASO | Trabajar Lógica del Programa.

///EJERCICIOS EN CLASE

//1er Ejercicio: Escribir un programa donde se guarde la edad en una variable
//para que se pueda saber si la persona o usuario es mayor o menor de edad.
//Este ejercicio es un ejemplo de lo que se determina como Hardcoding o Harcodeado


//Para tomar como referencia, está es la "anatomía" de la estructura de control [If ... else]:
// if (){
//}else {
//}

///SIGNO: >= (Mayor o igual que)

/// 1er Punto: Declarar una variable.
let age = 20; // JavaScript es un lenguaje débilmente tipado así que el agregar (;) al final de cada línea de código puede o no ser necesario por que si funcionamiento por defecto es continuar leyendo a la siguiente línea del código.
// 2do Punto: Implementar una condicional o estructura de control [if ... else]
if (age >= 18) {
    console.log("ERES MAYOR DE EDAD") // Mensaje en Consola, solo se ve en el inspector del navegador.
}else {
    console.log("ERES MENOR DE EDAD")
} 


//2do Ejercicio: Escribir un programa que le pida o solicite al usuario que ingrese su edad
// para saber si esa persona e mayor o menor de edad.

// En este ejercicio se pretende crear un prompt (el cual sirve para pedir datos al usuario ya sea en palabra/string/cadena).
// window.prompt: Permite que se habrá una ventana en el navegador para realizar preguntas al usuario.
///Es recomendable definir variables en inglés y lo que puede ir en la window.prompt, si puede ser en español.
///Console.log: establece lo que responderá la consola en caso de que la condición se cumpla o no se cumpla.

//1er Punto: Declarar una variable.
let ageUser = window.prompt("¿CUÁNTOS AÑOS TIENES?");
//2do Punto: La siguiente estructura pretende validar si la condición se cumple o no se cumple
if(ageUser >= 18 ){
    console.log("ERES MAYOR DE EDAD")
}else {
    console.log("ERES MENOR DE EDAD")
} 

//3er Ejercicio [If..else]: Escribir un programa para que un usuario pueda darnos su nombre
//para guardar ese dato y solicitar su nombre nuevamente para simular que se le brinda acceso

//1er Punto: Pedir al usuario que brinde su nombre
//2do Punto: Simular que se cuenta con una base de datos. Nombre que se ha guardado en la base de datos
const user = window.prompt("¿CUÁL ES TU NOMBRE?");
const baseDeDatos = "Amable"; 

//3er Punto: Definición de los mensajes de la consola con Console.log(); el cual permite mostrar los mensajes en la consola y ver los datos que se tienen en un instante del código.
// signo: == [igualdad débil] compara dos valores, pero convierte los tipos si es necesario antes de la comparación
console.log("¿EL USUARIO ES EL MISMO?"); 
console.log(user == baseDeDatos); //Traducción: User es similar a baseDeDatos? (True or False).

//signo: != [deferencia débil] compara dos valores y devuelve true si son diferentes ignorando su tipo.
console.log("¿Si son diferentes, debo negar acceso a la app?")
console.log(user != baseDeDatos); //Traducción: User es diferente a baseDeDatos? (True or False).

//4to Punto: Si el dato fuera diferente...
//Se procede a validar la condición para saber si es el usuario correcto
//Console.log: Es un mensaje de validación que solo ve el desarrollador.
//Alert: Es un mensaje tipo pop up, que indica información al usuario.
console.log("El usuario es bienvenido a la app"); 
if(user != baseDeDatos){
    console.log("EL USUARIO NO ES EL MISMO");
    alert("Acceso denegado :(  ¡No es usuario de la app!"); 
}else {
    console.log("EL USUARIO ES EL MISMO");
    alert("Hola :) ¡Te estabamos esperando!");
}
