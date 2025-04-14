//2DO PASO | DESARROLLAR LA LÓGICA

//1er Ejercicio: Crear un programa que solicite al usuario un número 'X'
// y por consiguiente se muestre su respectiva tabla de multiplicar 
//del 1 al 9. 

//1er PUNTO | Definir mis variables.
//Se utilizó un 'template string: ${}' para mostrar un texto junto con el dato guardado de una varible.
// i: Se refiere a la abreviación de index.

const numUser = parseInt(prompt("Ingrese un múmero para que desarrolle su respectiva tabla de multiplicar 🧮: "));
//console.log("Tabla de multiplicar del número" + numUser); <--- Forma tradicional.
console.log(`Tabla de multiplicar del número ${numUser}`); // <--- Forma simplificada.
for(let i = 0; i <= 9; i++){
   console.log(`${numUser} x ${i} = ${numUser * i}`);
} 

//2do Ejercicio: Crear un programa que imprima los números pares del 1 al 20.
//El signo de %: Significa división. En este caso dice que: Se espera dividir
//un número entre dos y que el resultado de esa división sea igual a 0.

console.log("Números pares del 1 al 60: ");
for(let i = 1; i <= 60; i++){
   if(i % 2 === 0) {
      console.log(i);
   }
} 

