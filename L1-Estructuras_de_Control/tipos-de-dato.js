// Ejercicio Lección 1 CAMPUS

///Objetivo: Agregar distintos tipos de valores para imprimir en la consola 
///del navegador, para identificar y entender a qué tipo de dato pertenece de acuerdo al lenguaje
/// de JavaScript.

//typeof : Se utiliza para determinar el tipo de dato de un valor.

console.log(typeof 42); // Tipo de dato: number.
console.log(typeof 'Veinticinco'); // Tipo de dato: string.
console.log(typeof -666); // Tipo de dato: number.
console.log(typeof true); // Tipo de dato: boolean.
console.log(typeof ''); // Tipo de dato: string.
console.log(typeof null); // Tipo de dato: object.
console.log(typeof undefined); // Tipo de dato: undefined.
console.log(typeof false); // Tipo de dato: boolean.

//TIPOS DE DATOS
//number: Representa valores numéricos, incluyendo enteros y números de punto flotante (42, -666, 0, 3.14).
// string: Representa una secuencia de caracteres (palabras o frases).
// boolean: Representa valores lógicos como: True o False.
//undefined: Representa una variable que ha sido declarada pero NO SE LE HA ASIGNADO UN VALOR.
// null: Representa la ausencia intencional de cualquier valor objeto.
// object: Representa una colección  de propiedades, donde cada propiedad es una clave-valor. Ejemplo
// { nombre: 'Juan', edad: 30 }, [1, 2, 3], null.
// IMPORTANTE: El tipo de dato null es un tipo de dato primitivo, pero cuando se usa el operador typeof para
// obtener el tipo de dato de 'null', este devulve object.