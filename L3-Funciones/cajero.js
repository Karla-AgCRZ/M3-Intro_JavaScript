//2DO PASO: DESARROLLANDO LA LÓGICA

// EJERCICIO DE PRÁCTICA | Se requiere desarrollar un programa que simule la interacción con un cajero automático; el cual de integrar los siguientes requisitos:

//1️⃣ El saldo inicial de la cuenta debe ser de $1000.
//2️⃣ El usuario puede ingresar un monto a retirar.
//3️⃣ El programa debe de verificar si el monto solicitado es menor o igual al saldo disponible.
//4️⃣ Si el monto es válido, se realiza la transacción y se actualiza el saldo.
//5️⃣ Se informa al usuario del nuevo saldo disponible.
//6️⃣ Si el monto es mayor al saldo disponible; el programa debe de informa al usuario que la operación no puede realizarse por falta de fondos.

//PARA PODER DESARROLLARLO EN ESTE CASO ES NECESARIO UTILIZAR: lenguaje de programación JavaScript, funciones, declaración de variables con 'let' y 'const', ciclo tipo 'for' o 'if else'.


//* 1ER PUNTO |  Declarar variables  para la inicialización del proceso. 
// RECUERDA: los comentarios se ven de diferentes colores debido a la extensión 'Better Comments', no es un error o falla del código.

let saldo = 1000; // Variable que específica el saldo inicial de la cuenta.
let historial = []; // Variable que indica el historial de transacciones de la cuenta y que se guardan en una lista.
let intentosFallidos = 0; // Variable que indica los intentos fallidos del usuario al momento de retirar. Más adelante se establecerá un límite pero al inicio del proceso se inicializa en '0'.


//* 2DO PUNTO | Implementación de una función SIN PARÁMETROS que permite consultar el saldo.

function getSaldo(){
    console.log(`El saldo actual es de: ${saldo}`); // Mensaje al programador
    alert(`Su saldo actual es de: ${saldo}`); // Mensaje al usuario
};
// ! El símbolo de pesitos: Representa el conjunto de texto 'El saldo actual es de: '.


//* 3ER PUNTO | Implementación de la función para realizar retiro de efectivo.

function retirarSaldo(){
    if(intentosFallidos >= 3){
        alert (`Ha excedido el número máximo de intentos fallidos. Tu cuenta ha sido bloqueada.`);
        return; // ! Return devuelve FALSE por que se ha excedió el número de intentos disponibles que en esta caso serían '3', y se procede a terminar o finalizar el funcionamiento del código si no se cumple esa condición.
    }

    //Se continua con el bloque de código.
    //* Variable que solicita el monto a retirar en la simulación. 

    let monto = parseFloat(prompt("Ingrese el monto a retirar:"));   // ! parseFloat:  Es una función que acepta montos enteros y con dos decimales.
    
    //* El siguiente bloque de código verifica que el monto ingresado por el usuario sea válido.

    if (isNaN(monto) || monto <= 0){
        alert("Monto inválido. Por favor, ingrese un monto válido."); // ! isNaN: Significa 'is Not a Number'.
        // ! El operador lógicos '||': Significa OR.
        return;
    }

    // * El siguiente bloque de código verifica que el monto solicitado es menor o igual a saldo disponible del ejercicio ($1000 pesos).

    if(monto <= saldo){ // ! Esta condición establece que toda cantidad o monto a retirar que no exceda el saldo inicial de $1000 pesos, sea posible de realizarse.
        saldo -= monto; //! Está acción permite actualizar el saldo del cajero. Es decir: [Saldo inicial] 1000 = 1000 [Saldo inicial] - 500 [monto a retirar]. Otra forma de expresar está acción sería: (saldo  = saldo - monto;).
        historial.push(`Ha hecho un retiro de ${monto}`); // Se agrega el retiro al historial de cajero.
        console.log(`Transacción exitosa. Se ha retirado ${monto}, el nuevo saldo disponible es de ${saldo}`); // Mensaje al programador.
        alert(`Transacción exitosa. Ha retirado ${monto}. Su saldo disponible ahora es de ${saldo}`); // Mensaje al usuario.
        intentosFallidos = 0; //! Se reinician los intentos fallidos del usuario al concluir el proceso anterior para evitar alguna falla en su procedimiento de retiro de efectivo al cumplir con las condiciones correctas y haber realizado su retiro de efectivo.
    } else {
        console.log("Operación inválida, saldo insuficiente"); // Condición que determina que el monto solicitado a retirar es mayor que el saldo disponible.
        alert("Operación inválida debido a saldo insuficiente. ❌");
        intentosFallidos++; // ! Por lo cual, se incrementan los intentos fallidos para poder ejecutar está condición.
    }
};

// * 4TO PUNTO | Implementación de la función para depositar saldo.



