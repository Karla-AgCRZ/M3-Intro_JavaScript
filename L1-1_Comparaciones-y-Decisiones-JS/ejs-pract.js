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
let borderTown = window.prompt("¿Reside en un municipio fronterizo del Norte de México? (Sí/No)").toLowerCase() === "Sí";
let pregnant = window.prompt("¿Se encuentra embarazada? (Sí/No)").toLowerCase() === "Sí";
let weeksOfPregnancy = 0;


