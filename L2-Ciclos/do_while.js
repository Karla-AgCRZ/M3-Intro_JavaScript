//2DO PASO | DESARROLLAR LA LÓGICA DEL PROGRAMA

//1er Ejercicio: Crear un programa con utilizando el ciclo 'do while' que:
//1er PUNTO | Dentro del bucle 'do while' utilizar la función prompt para pedir al usuario que ingrese un caracter.
//2do PUNTO | Si el usuario ingresa un caracter diferente a 'a' el bucle continúe pidiéndole un nuevo caracter.
//3er PUNTO | Cuando el usuario ingrese la letra 'a', se imprima un mensaje de "¡Ingresó la letra a!".

//Comenzar por declarar mi variable.
// el símbolo != : Significa 'diferente'.
//Una vez que el usuario ingrese el caracter 'k' se concluye el ciclo. 

let caracter; //Esta varible hace referencia al scope global.

do {
   //Bloque de código.
   caracter = prompt("Ingrese un caracter: ");
   console.log(caracter); //Función para saber cuáles son los caracteres que ingresó el usuario.
} while (caracter != "k");
console.log("¡¡¡Ingresó el caracter k!!! 🛸");


//2do Ejercicio: Crear un programa que solicite al usuario una contraseña y no continúe hasta que
// el mismo ingrese la contraseña correcta. 
//1er PUNTO | Es necesario harcoderar la contraseña; es decir que el código se vuelva más estricto
// para que no deje al usuario avanzar hasta que no ingrese lo correcto.

const password = "batman"; // <---- Se determina la contraseña.
let pass;

do {
   pass = prompt("Ingrese la contraseña 😎 : ");
   if(pass !== password) {
      console.log("Contraseña incorrecta, intente nuevamente. 🙃");
   }
} while(pass !== password);
console.log("¡Contraseña correcta, bienvenido! 👏");
