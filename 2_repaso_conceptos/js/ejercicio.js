// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

var m1 = "Pedrito";
var m2 = "Rufo";
var m3 = "Chancla";

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Las quiero mucho"

// console.log('Mis mascotas son ' + m1 + ', ' + m2 + ' y ' + m3 + '. Las quiero mucho');
console.log(`Mis mascotas son ${m1}, ${m2} y ${m3}. Y las quiero mucho`);
// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

// var mascota1 = prompt('Nombre de la primera mascota');
// var mascota2 = prompt('Nombre de la segunda mascota');
// "Quiero mucho a mis mascotas mascota1 y mascota2"

// console.log(`Quiero mucho a mis mascotas: ${mascota1} y ${mascota2}`);

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable

var dato = "100";

// Muestra el contenido de esta variable en consola

console.log(dato);

// Muestra el TIPO DE DATO de esta variable en consola

console.log(typeof dato);

// Transforma la variable de string a number

// Coerción explicita
// var datoTransformado = parseInt(dato);
// var datoTransformado = Number(dato);
// Coerción implícita
var datoTransformado = dato * 1;

// Muestra nuevamente el contenido de esta variable en consola
console.log(datoTransformado);
console.log(typeof datoTransformado);
// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?

// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

var numero = 10;

if (numero % 5 === 0) {
  console.log("Es un numero cool");
} else {
  console.log("No es un numero cool");
}

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores
var codigo = "happy";

if (codigo === "happy") {
  console.log("cool,bro the life is short");
} else if (codigo === "sad") {
  console.log("go for tacos bro, tacos=smile");
} else {
  console.log("codigo invalido");
}
// Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

var nivel = 10;

if (nivel <= 10 && nivel >= 0) {
  console.log("paladin");
} else if (nivel <= 30 && nivel >= 11) {
  console.log("caballero dorado");
} else if (nivel <= 50 && nivel >= 31) {
  console.log("dios destructor");
} else {
  console.log("nivel invalido");
}

// && necesitamos que todas las condiciones se cumplan para entregan
// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||

// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.
