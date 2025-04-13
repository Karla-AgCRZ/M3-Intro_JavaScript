//2do PASO | TRABAJAR LA lÓGICA DEL PROGRAMA

///1er EJERCICIO DE PRÁCTICA | REQUISITOS DE VACUNACIÓN

///Objetivo: Crear un programa que determine si una persona puede vacunarse.
///Para ello el individuo debe de cumplir al menos una de las siguientes condiciones:

//1.- Ser mayor de 18 años y residir en un municipio fronterizo del Norte de México.
//2.- Embarazadas mayores de 18 años y con más de 9 semanas de gestación.
//3.- Individuos que cumplan 30 años o más en el año en curso.

///Si el individuo NO CUMPLE NINGUNA DE LAS CONDICIONES ANTERIORES, entonces NO PUEDE VACUNARSE.

///1er PUNTO | Establecer mis variables
//Para evaluar cada condición necesito variables que representen la información del individuo.

//ageUser: Número que indica la edad del individuo.
//borderTown: True o False. Indica si reside en un municipio en el norte del país.
//pregnant: True o False. Indica si está gestando.
//weeksOfPregnancy: Número que indica las semanas de embarazo.
//birthYear: Año de nacimiento del individuo.
//currentYear: Año en curso.


///2do PUNTO | Comenzar a desarrollar el programa
//Solicitar datos usuario para determinar si cumple con los requisitos de vacunación

//La función parseInt: Convierte un texto (string) en un número entero. Cuando se usa window.prompt(), el valor que se devuelve siempre es texto. Lo que provoca que al realizar la comparación ageUser > 18, no funcionará bien si ageUser se mantiene como texto por ello es necesario agregar parseInt.

// El método .toLowerCase: Hace que todo un texto (string) se convierta a minúsculas. Para que sin importar que el usuario escriba con mayúsculas o minúsculas, las comparaciones puedan ejecutarse de forma correcta siempre.

//Se determina let weeksOfPregnancy = 0 al inicio y no > 9 porque no todas las personas que utilicen el programa se encuentran embarazadas.

let ageUser = parseInt(window.prompt("¿Qué edad tiene?"));
let borderTown = window.prompt("¿Reside en un municipio fronterizo del Norte de México? (sí/no)").toLowerCase() === "sí";
let pregnant = window.prompt("¿Se encuentra embarazada? (sí/no)").toLowerCase() === "sí";
let weeksOfPregnancy = 0;


if (pregnant) {
   weeksOfPregnancy = parseInt(window.prompt("¿Cuántas semanas de gestación tiene?"));
}

let birthYear = parseInt(window.prompt("¿En que año nació?"));
let currentYear = new Date().getFullYear(); // Variable que se establece para detectar autómaticamente el año en curso. 

/// 3er PUNTO | Determinar mis estructuras de control con: If o else if, else. Para comparar y tomar decisiones.
// &&: Es un operador lógico y significa 'y'.

if (ageUser > 18 && borderTown) {
   window.alert("Puede vacunarse ya que usted es mayor de edad y reside en un municipio fronterizo del norte de México 👍");
} else if (pregnant && ageUser > 18 && weeksOfPregnancy > 9) {
   window.alert("Puede vacunarse ya usted está embarazada, es mayor de edad y cuenta con más de 9 semanas de gestación 👍");
} else if (pregnant && ageUser > 18 && weeksOfPregnancy <= 9){
   window.alert("Disculpe, usted no puede vacunarse todavía ya que aunque está embarazada y es mayor de edad, tiene menos de 9 semanas de gestación 📝❌");
} else if ((currentYear - birthYear) >= 30){
   window.alert("Puede vacunarse porque cumple 30 años o más este año 👍");
} else {
   window.alert("Disculpe, usted no cuenta con los requisitos para poder vacunarse 📝❌");
}




