// Ejercicio Functions

// Haz un Semáforo.
let verde = document.querySelector("#verde");
let amarillo = document.querySelector("#amarillo");
let rojo = document.querySelector("#rojo");
console.log(rojo.className);
console.log(rojo.className.split(" ")[1] == "rojo-encendido");

count = 0;

setInterval(() => {
  count++;
  console.log(count);
  if (rojo.className.split(" ")[1] == "rojo-encendido") {
    rojo.className = "circulo rojo-apagado";
    verde.className = "circulo verde-encendido";
  } else if (verde.className.split(" ")[1] == "verde-encendido") {
    verde.className = "circulo verde-apagado";
    amarillo.className = "circulo amarillo-encendido";
  } else if (amarillo.className.split(" ")[1] == "amarillo-encendido") {
    amarillo.className = "circulo amarillo-apagado";
    rojo.className = "circulo rojo-encendido";
  }
}, 3000);

// De rojo pasa a Verde.
// De amarillo puede pasar a Rojo.
// De Verde pasa a Amarillo.

// document.write("<img src='http://imagenes.com/luz_verde.png' >");
// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.

// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.

// Se debe respetar el orden de los colores:

// Extra Challenge 1: Hacerlo con imágenes:

// 	document.write(“<img src=’http://imagenes.com/luz_verde.png’ >”)

// Extra Challenge 2: Usar setInterval y/o setTimeOut para que cambie automáticamente

// function imprimeHola() {
// 	console.log("Hola")
// }

// function detente(intervalo) {
// 	clearInterval(intervalo)
// 	console.log("Listo!")
// }

// var intervalo = setInterval(imprimeHola(),1000)

// setTimeout(detener(intervalo),5000)
