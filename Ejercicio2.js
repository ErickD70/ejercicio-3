// 1
console.log("¡Hola Mundo!");

// 2
let mensaje = "¡Hola Mundo!";

console.log(mensaje);

// 3
let nombre = prompt("Ingrese su nombre:");

console.log("¡Hola " + nombre + "!");

// 4
let horas = parseFloat(prompt("Ingrese las horas trabajadas:"));
let costoHora = parseFloat(prompt("Ingrese el costo por hora:"));

let paga = horas * costoHora;

console.log("La paga que le corresponde es: $" + paga);

// 5
let peso = parseFloat(prompt("Ingrese su peso en kg:"));
let estatura = parseFloat(prompt("Ingrese su estatura en metros:"));

let imc = peso / (estatura * estatura);

console.log("Tu índice de masa corporal es " + imc.toFixed(2));

// 6
let n = parseInt(prompt("Ingrese el primer número entero:"));
let m = parseInt(prompt("Ingrese el segundo número entero:"));

let cociente = Math.floor(n / m);
let resto = n % m;

console.log(
    "La división resultante de dividir " +
    n + " entre " +
    m + " da un cociente " +
    cociente + " y un resto " +
    resto
);