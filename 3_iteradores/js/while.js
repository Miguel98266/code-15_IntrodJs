// let iteracion = 0;
// while (iteracion < 5) {
//   console.log(`Valor de iteracion: ${iteracion}`);
//   iteracion = iteracion + 1;
// }
// ------------------------------------------------
let preguntaComida = "no";
while (preguntaComida === "no") {
  preguntaComida = prompt("Quieres comer?");
}
console.log("Provecho");
// ------------------------------------------------
// -- Programa que va a evaluar un saludo, si el saludo es hola, imprime en la consola 'Hola' y pide con un prompt el nuevo saludo
// En el momento en que deje de ser hola termina el bucle e imprime 'Te voy a acusar'
// let saludo = "hola";
// while (saludo = "hola") {
//   saludo = prompt("Nuevo saludo");
// }
// console.log("Te voy a acusar");
// ------------------------------------------------
// Practica 2: Contador de cervezas
// Son administradores de un bar y por seguridad de sus clientes cuidan la cantidad de tragos que toman, por lo que solo tienen permitido vender un maximo de 7 por cliente.
// Hagan un programa en el que le pregunten al cliente si quiere otro trago, si si quiere otro trago incrementen la su contador de tragos, pero si quiere otro y ya tomo 7 esta noche, mandenlo a casa
let tragos=1;
while(tragos<=7){
    otro=prompt("Quiere otro trago")
    if(otro=="si"){
        tragos= tragos+1;
    }
}
console.log("Porfavor vaya a su casa")

