//El saldo inicial de la cuenta es de $1000.
//● El usuario puede ingresar un monto a retirar.
//● Se verifica si el monto solicitado es menor o igual al saldo disponible.
//● Si el monto es válido, se realiza la transacción y se actualiza el saldo.
//● Se informa al usuario del nuevo saldo disponible.
//● Si el monto es mayor al saldo disponible, se informa al usuario que la operación no
//puede realizarse por falta de fondos.


//* 1) Declarar variables
let saldo = 1000; // Saldo inicial de la cuenta
let historial = [];  // Historial de transacciones de la cuenta y lo guardo en una lista
let intentosFallidos = 0; // Intentos fallidos de retiros


//* 2) Función para consultar saldo
function getSaldo(){
    console.log(`Tu saldo actual es de: ${saldo}`); // Mensaje al programador
    alert(`Tu saldo actual es de: ${saldo}`); // Mensaje al usuario
};

//* 3) Función para realizar retiro
function retirarSaldo(){
    if(intentosFallidos >= 3){
        alert (`Has excedido el número máximo de intentos fallidos. Tu cuenta ha sido bloqueada.`);
        return; // Devuelve false por que excedió el número intentos establecidos.
    }

    //Más código
    //Solicitar monto a retirar
    let monto = parseFloat(prompt("Ingrese el monto a retirar:"));   //parseFloat acepta montos enteros y decimales.
    // Verificar que el tipo de monto sea válido
    if (isNaN(monto) || monto <= 0){
        alert("Monto inválido. Por favor, ingrese un monto válido.");
        return;
    }
}