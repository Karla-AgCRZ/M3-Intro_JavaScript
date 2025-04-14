// 2DO PASO | INICIAR A DESARROLLAR LA LÓGICA 

// 1er Ejercicio: Se requiere crear un programa que imprima (enliste) los números del 0 al 10 en la consola.

//1er PUNTO | Inicializamos la variable index en 0. 
//2do PUNTO | Se determina el bloque de código.Es necesario hacer que el ciclo itere (se repita) nuevamente.Por lo cual se necesita una especie de contador en el index.
// index = index + 1 | <----- También es una forma válida.

let index = 0;
while(index < 11) {
    console.log(index);
    index++; //Los símbolos ++: Hacen que se sume 1 a index.
} 

//2do Ejercicio: Se requiere crear un programa donde se declaren dos varibles:
//contador: Para llevar la cuenta del número actual.
//numeroUsuario: Para almacenar el número ingresado por el usuario.

//1er PUNTO | La variable contador se inicializa en 0.
//2do PUNTO | El bucle 'while' se ejecuta mientras que contador sea menor que numeroUsuario.
//3er PUNTO | Dentro del bucle 'while' se imprime el contador en la consola.
//4to PUNTO | Al final de bucle 'while', se incrementa el valor de contador en 1.

//La función parseInt: Convierte el contenido de una cadena a un número entero.

// También es posible iniciar el ciclo while como: while(contador <= numUser) el número final de la serie será el que definió el usuario.

let numUser = parseInt(prompt("Ingresa un número, por favor."));
let contador = 0;

while(contador < numUser) {
    console.log(contador);
    contador++;
}

//3er Ejercicio: Crear un programa que pida al usuario un número y que calcule la suma
// de los primeros N múmeros naturales.

//1er PUNTO | Definir mis variables.

//La varible contador se inicializó en 1, por que de lo contrario comenzaría a contar: 0, 1, 2, ....etc.
// y sería un listado demasiado largo.
// let suma: Permite que los números se acumulen.

let n = parseInt(prompt("Ingrese un número que sea positivo, por favor."));
let contDos = 1;
let suma = 0;

while(contDos <= n) {
    //suma = suma + contDos; 1era forma tradicional válida.
    suma += contDos; // 2da forma válida simplificada.
    contDos++;
}
console.log("La suma de los primeros", n, "números naturales es:", suma);
