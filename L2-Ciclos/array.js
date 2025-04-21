//2DO PASO | DESARROLLAR LA LÓGICA

//Ejercicio de práctica de CAMPUS: Clasificación de Frutas.
//Objetivo: Crear un programa que clasifique las frutas según su tipo y cuente cuántas existen de cada tipo.

//a) Declarar un 'arreglo o array' llamado 'frutas' con varios tipos de frutas.
//b) Crear un objeto para almacenar la cantidad de cada tipo de fruta.
//c) Usar un ciclo 'for o while' para recorrer el arreglo y contar las frutas.
//d) Imprimir en la consola la cantidad de cada tipo de fruta.
//e) Tratar de implementar la solución con los dos ciclos 'for y while'.

//1ER SOLUCIÓN UTILIZANDO EL CICLO 'FOR'

//1er Punto | Crear un array o arreglo: Estructura de datos que permite guardar múltiples valores en una sala variable; como en este caso en el que se guardarán frutas de diferentes tipos y de forma repetida. Para cumplir con el objetivo que será contar cuántas frutas existen de cada tipo.

//const frutas:  es una variable global.

//2do punto | Se usa un objeto (también conocido como diccionario o mapa) para guardar cada fruta como una clave, y su cantidad como el valor.

//3er punto | Se implementa un ciclo 'for o while' para recorrer todo el arreglo o array y contar las frutas.

//Cómo funciona: El ciclo recorre cada fruta del arreglo 'frutas' y cada vez que se encuentra con una, la agrega al objeto contadorFrutas o le suma 1 si ya existe ese tipo de fruta.

//Anatomía del ciclo 'for': 

//for(iterador; condición;  incremento){ 
//    Bloque de código.
//}

//En este caso: El ciclo 'for' primero recorre el array 'frutas' desde el índice 0 hasta el último. Para acceder a la fruta actual con frutas[i] y se guarda en una variable llamada 'fruta'. Se utiliza esa fruta como clave en el objeto 'contadorFrutas' si ya existe, le suma 1 y si no existe, crea el tipo y le asigna 1.

//4to punto | Se imprime en la consola del navegador la cantidad de cada tipo de fruta. Una vez que se implementa el conteo guardado en 'contadorFrutas' es momento de visualizar el resultado.

//'for ... in' recorre todas las propiedades (frutas) del objeto (contadorFrutas) y las imprime junto con su cantidad.  


const frutasA = ["ciruela","manzana","pera", "piña", "melón", "sandía", "uva", "ciruela", "piña", "melón", "sandía", "pera", "manzana", "pera" , "sandía", "ciruela", "melón", "piña" , "sandía", "uva", "manzana", "uva", "piña", "manzana", "melón", "piña", "sandía", "uva", "ciruela", "sandía" , "melón", "piña", "sandía", "piña"];

const contadorFrutasA = {};

for(let i = 0; i < frutasA.length; i++){
   const fruta = frutasA[i]; //Se accede a cada furta de manera individual.

   if(contadorFrutasA[fruta]){
      contadorFrutasA[fruta]++; // Si ya existe el tipo de fruta, el contador aumenta 1.
   } else {
      contadorFrutasA[fruta] = 1; // Si no existe, se inicializa con 1.
   }
}

console.log("Cantidad de cada tipo de fruta 🍏: ");
for (const fruta in contadorFrutasA) {
   console.log(`${fruta}: ${contadorFrutasA[fruta]}`);
} 


//2DA SOLUCIÓN UTILIZANDO EL CICLO 'WHILE'

//Anatomía del ciclo 'while':

//while(condición){
//      Bloque de código
//}

//En este caso: Con el ciclo 'while'  se declara una variable i = 0 para controlar el ídice del array. while ( i < furtas.length)  se asegura de que se recorra el arreglo completo.
//En cada vuelta o ciclo: Se toma la fruta actual con 'frutas[i]'. Si ya se encuentra en el objeto 'contadorFrutas', se suma 1. Si no está, la inicializa en 1. Al final de cada vuelta, se incrementa en i con i++.

const frutasB = ["maracuyá", "sandía", "piña", "zarzamora", "guanábana", "maracuyá", "piña", "guanábana", "sandía", "zarzamora", "piña", "sandía", "maracuyá", "guanábana", "maracuyá", "piña", "guanábana", "zarzamora", "piña", "maracuyá", "zarzamora", "piña"];

const contadorFrutasB = {};

let i = 0; // Se inicializa el índice en 0.

while (i < frutasB.length) {
   const fruta = frutasB[i];

   if (contadorFrutasB[fruta]) {
      contadorFrutasB[fruta]++;
   } else {
      contadorFrutasB[fruta] = 1;
   }

   i++;  // IMPORTANTE: Incrementar el índice para evitar el bucle infinito.
}

// Imprimir el resultado en el consola.

console.log("Cantidad de cada tipo de fruta 🍍: ");
for (const fruta in contadorFrutasB) {
   console.log(`${fruta}: ${contadorFrutasB[fruta]}`);
}

/// ENTENDIENDO SUS DIFERENCIAS 'FOR' Y 'WHILE'

// El ciclo 'for' es más compacto y automático; se define su índice, su condición e incremento en una sola línea.

// El ciclo 'while' es más flexible, pero el desarrollador debe de encargarse de controlar todo (incio, condición, incremento).

//Importante aclarar que con ambos ciclos es posible lograr el mismo resultado, pero practicar ambos brinda más confianza y comprensión sobre cómo funcionan los ciclos.