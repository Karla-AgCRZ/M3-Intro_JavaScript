//2do Paso: Trabajar la lógica del programa


//1er ejercicio: Escribir un programa donde se guarde la edad en una variable
//para que se pueda saber si la persona o usuario es mayor o menor de edad.
//Este ejercicio es un ejemplo de lo que se determina como Hardcoding o Harcodeado


//Para tomar como referencia, está es la "anatomía" de la estructura de control [If ... else]:

// if (){

//}else {

//}

///SIGNO: >= (Mayor o igual que)


/// 1er. punto: Declarar una variable.
let age = 20; // Nunca olvidar agreagar (;) al final de la variable.
// 2do punto: Implementar una condicional o estructura de control [if ... else]
if (age >= 18) {
    console.log("ERES MAYOR DE EDAD")
}else {
    console.log("ERES MENOR DE EDAD")
} 


//2do ejercicio: Escribir un programa que le pida o solicite al usuario que ingrese su edad
// para saber si esa persona e mayor o menor de edad.

// En este ejercicio se pretende crear un prompt (el cual sirve para pedir datos al usuario ya sea en palabra/string/cadena).
// window.prompt: permite que se habrá una ventana en el navegador para realizar preguntas al usuario.
///Es recomendable definir variables en inglés y lo que puede ir en la window.prompt, si puede ser en español.
///Console.log: establece lo que responderá la consola en caso de que la condición se cumpla o no se cumpla.

//1er punto: Declarar una variable.
//let ageUser = window.prompt("¿CUÁNTOS AÑOS TIENES?");
//2do punto: La siguiente estructura pretende validar si la condición se cumple o no se cumple
if(ageUser >= 18 ){
    console.log("ERES MAYOR DE EDAD")
}else {
    console.log("ERES MENOR DE EDAD")
} 


//3er ejercicio [If..else]: Escribir un programa para que un usuario pueda darnos su nombre
//para guardar ese dato y solicitar su nombre nuevamente para simular que se le brinda acceso

//1er punto: Pedir al usuario que brinde su nombre
const user = window.prompt("¿CUÁL ES TU NOMBRE?");
const baseDeDatos = "Amable"; //2do punto: Simular que se cuenta con una base de datos. Nombre que se ha guardado en la base de datos

console.log("¿EL USUARIO ES EL MISMO?"); //3er punto: Definición de los mensajes de la consola con Console.log(); el cual permite mostrar los mensajes en la consola y ver los datos que se tienen en un instante del código.
console.log(user == baseDeDatos); // signo: == [igualdad débil] compara dos valores, pero convierte los tipos si es necesario antes de la comparación

console.log("¿Si son diferentes, debo negar acceso a la app?")
console.log(user != baseDeDatos); //signo: != [deferencia débil] compara dos valores y devuelve true si son diferentes ignorando su tipo.

//4to punto: Si el dato fuera diferente...
console.log("El usuario es bienvenido a la app"); //Se procede a validar la condición para saber si es el usuario correcto
if(user != baseDeDatos){
    console.log("EL USUARIO NO ES EL MISMO");
    alert("Acceso denegado :(  ¡No es usuario de la app!"); //Mensaje tipo pop up, que indica información al usuario.
}else {
    console.log("EL USUARIO ES EL MISMO");
    alert("Hola :)  ¡Te estabamos esperando!");
}

