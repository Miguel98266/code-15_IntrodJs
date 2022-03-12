// Arnoldo le gustan mucho los números y quiere saber más de ellos, él denomina
// números cool a los que son divisibles entre 5, el quiere crear un programa en el
// cual el ingrese un número y le diga si es cool o no, ¿puedes ayudarlo?

numero = prompt("Elige un numero para saber si es cool");
if (numero % 5 == 0) {
  console.log("Ingresaste un numero cool");
} else {
  console.log("Ingresaste un numero no cool");
}

// Humberto está repartiendo códigos por toda la ciudad. El quiere crear un programa
// que cuando un usuario ingrese un código este despliegue un mensaje. Para el
// código "happy" el quiere desplegar el mensaje "cool bro, the life is short" y para el
// código "sad" él quiere, desplegar el mensaje "go for tacos bro, tacos = smile"
// ** Desplegar el mensaje "código inválido" si el código no cumple con las condiciones anteriores

codigo = prompt("Elige happy o sad");
if (codigo === "happy") {
  console.log("cool bro, the life is short");
} else if (codigo === "sad") {
  console.log("go for tacos bro, tacos = smile");
} else {
  console.log("código inválido");
}

// Paco está haciendo un videojuego y necesita hacer un programa que determine la
// jerarquía de usuario de acuerdo a su nivel, las jerarquías son "paladin" : nivel 0 -10,
// "caballero dorado" : nivel 11 - 30, "dios destructor": 31 - 50.

jerarquia = 10;
if ((jerarquia) => 0 && jerarquia <= 10) {
  console.log("paladin");
} else if ((jerarquia) => 11 && jerarquia <= 30) {
  console.log("caballero dorado");
} else if ((jerarquia) => 31 && jerarquia <= 50) {
  console.log("dios destructor");
} else {
  console.log("Nivel invalido");
}

// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

iswinner = true;

while (iswinner) {
    jugador1 = prompt ("Jugador1: Piedra , Papel o Tijeras") ;
    jugador2 = prompt ("Jugador2: Piedra , Papel o Tijeras") ;
  if (jugador1 == "piedra" && jugador2 == "piedra") {
    alert("Empate");
    iswinner = true;
  } else if (jugador1 == "piedra" && jugador2 == "papel") {
    alert("Jugador 2 Gana");
    iswinner = false;
  } else if (jugador1 == "piedra" && jugador2 == "tijeras") {
    alert("Jugador 1 Gana");
    iswinner = false;
  } else if (jugador1 == "papel" && jugador2 == "piedra") {
    alert("Jugador 1 Gana");
    iswinner = false;
  } else if (jugador1 == "papel" && jugador2 == "papel") {
    alert("Empate");
    iswinner = true;
  } else if (jugador1 == "papel" && jugador2 == "tijeras") {
    alert("Jugador 2 Gana");
    iswinner = false;
  } else if (jugador1 == "tijeras" && jugador2 == "piedra") {
    alert("Jugador 2 Gana");
    iswinner = false;
  } else if (jugador1 == "tijeras" && jugador2 == "papel") {
    alert("Jugador 1 Gana");
    iswinner = false;
  } else if (jugador1 == "tijeras" && jugador2 == "tijeras") {
    alert("Empate");
    iswinner = true;
  } else {
    alert("Intenta de Nuevo");
    iswinner = true;
  }
}
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador. && ||
jugador1=parseInt(prompt("Jugador 1: Escoje un numero")); 
jugador2=parseInt(prompt("Jugador 2: Escoje un numero"));

if (jugador1>jugador2) {
    alert(`El jugador 1 gano por que ${jugador1} es mayor a ${jugador2}`)
} else if(jugador1<jugador2){
    alert(`El jugador 2 gano por que ${jugador2} es mayor a ${jugador1}`)
} else{
    alert(`Empate,el numero del jugador 1 = ${jugador1} y el numero del jugador 2 = ${jugador2}`)
}
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

numeros=[];

for (let i = 3; i > 0; i--) {
    numeros.push(parseInt(prompt(`Digita 3 numeros faltan ${i} `)));
}
console.log(numeros)

if (numeros[0]>numeros[1]&&numeros[0]>numeros[2]) {
    alert(`El numero ${numeros[0]} es el mayor`)
} else if(numeros[1]>numeros[0]&&numeros[1]>numeros[2]){
    alert(`El numero ${numeros[1]} es el mayor`)
} else if(numeros[2]>numeros[0]&&numeros[2]>numeros[1]){
    alert(`El numero ${numeros[2]} es el mayor`)
} else{
    alert(`Los numeros son iguales`)
}


