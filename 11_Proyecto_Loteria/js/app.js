import { tarjetas } from "./tarjetas.js";
import { tablero1, tablero2, tablero3 } from "./barajear.js";
// import { jugador1 } from './appindex.js';

console.log(tablero1);
let boton = document.getElementById("carta");
let cardImage = document.querySelector(".card-img-top");
let cardTitle = document.querySelector(".card-title");
let btninicio = document.querySelector("#inicio");
let card = document.querySelector(".card");
let tab1 = document.querySelector("#tabl-1");
let tarjetaspasadas = [];
card.setAttribute("class", "visually-hidden");

let tableroj1 = document.querySelectorAll(".tableroj1");
let tableroj2 = document.querySelectorAll(".tableroj2");
// card.style="display:none";
let jugado1 = document.getElementsByName("jugador1");
let jugado2 = document.getElementsByName("jugador2");

// console.log(document.querySelectorAll('[name="jugador1"]'));

// let ju1=document.querySelectorAll('[name="jugador1"]')
window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  const jugador1 = params.get("jugador1");
  const jugador2 = params.get("jugador2");
  console.log(jugador1, jugador2);

  if (jugador1 == "tablero1") {
    for (let i = 0; i < 16; i++) {
      tableroj1[i].setAttribute("src", tablero1[i].img);
      tableroj1[i].setAttribute("alt", tablero1[i].nombre);
      jugado1[i].setAttribute("value", tablero1[i].nombre);
    }
  } else if (jugador1 == "tablero2") {
    for (let i = 0; i < 16; i++) {
      tableroj1[i].setAttribute("src", tablero2[i].img);
      tableroj1[i].setAttribute("alt", tablero2[i].nombre);
      jugado1[i].setAttribute("value", tablero1[i].nombre);
    }
  } else if (jugador1 == "tablero3") {
    for (let i = 0; i < 16; i++) {
      tableroj1[i].setAttribute("src", tablero3[i].img);
      tableroj1[i].setAttribute("alt", tablero3[i].nombre);
      jugado1[i].setAttribute("value", tablero1[i].nombre);
    }
  }

  if (jugador2 == "tablero1") {
    for (let i = 0; i < 16; i++) {
      tableroj2[i].setAttribute("src", tablero1[i].img);
      tableroj2[i].setAttribute("alt", tablero1[i].nombre);
      jugado2[i].setAttribute("value", tablero1[i].nombre);
    }
  } else if (jugador2 == "tablero2") {
    for (let i = 0; i < 16; i++) {
      tableroj2[i].setAttribute("src", tablero2[i].img);
      tableroj2[i].setAttribute("alt", tablero2[i].nombre);
      jugado2[i].setAttribute("value", tablero2[i].nombre);
    }
  } else if (jugador2 == "tablero3") {
    for (let i = 0; i < 16; i++) {
      tableroj2[i].setAttribute("src", tablero3[i].img);
      tableroj2[i].setAttribute("alt", tablero3[i].nombre);
      jugado2[i].setAttribute("value", tablero3[i].nombre);
    }
  }
});
console.log(document.getElementsByName("jugador1").checked);

// console.log(jugado1)
jugado1.forEach(function (jugador) {
  jugador.addEventListener("change", validarCartaJugador1);
  console.log("Funciona?");
});
jugado2.forEach(function (jugador) {
  jugador.addEventListener("change", validarCartaJugador2);
  console.log("Funciona?");
});

function validarCartaJugador1() {
  // const result = jugado1.filter(jugado1 => jugado1.disabled);
  // console.log(result);
  // jugador1 = document.getElementsByName("jugador1");
  // console.log(jugador1);
  for (let e = 0; e < jugado1.length; e++) {
    // let prueba1 = document.querySelectorAll('[name="jugador1"]:checked')
    
    if (jugado1[e].checked == true) {
      console.log("Si esta check");
      // console.log(tarjetaspasadas[tarjetaspasadas.length-1].nombre)
      // console.log(jugador1[e].value)
      if (
        jugado1[e].value == tarjetaspasadas[tarjetaspasadas.length - 1].nombre
      ) {
        console.log("Hizo Match");
        let div_ju = document.querySelectorAll(".div-ju");
        let frijol = document.createElement("img");
        frijol.className = "frijol";
        frijol.src = "img/frijol_oscuro.png";
        frijol.style =
          "position: absolute;top: 50%; left: 50%;transform: translate(-50%, -50%); ";
        div_ju[e].appendChild(frijol);
        // alert("Felicidades llevas otra carta mas");
        jugado1[e].setAttribute("disabled", "");
      } else {
        // jugado1[e].checked = 0;
        // alert("La tarjeta marcada no hace match con la baraja");
      }
    }
  }
}
function validarCartaJugador2() {
  // jugador1 = document.getElementsByName("jugador1");
  // console.log(jugador1);
  for (let e = 0; e < jugado2.length; e++) {
    console.log(jugado2[0]);
    if (jugado2[e].checked == true) {
      console.log("Si esta check");
      // console.log(tarjetaspasadas[tarjetaspasadas.length-1].nombre)
      // console.log(jugador1[e].value)
      if (
        jugado2[e].value == tarjetaspasadas[tarjetaspasadas.length - 1].nombre
      ) {
        console.log("Hizo Match");
        let div_ju = document.querySelectorAll(".div-ju2");
        let frijol = document.createElement("img");
        frijol.className = "frijol";
        frijol.src = "img/frijol_oscuro.png";
        frijol.style =
          "position: absolute;top: 50%; left: 50%;transform: translate(-50%, -50%); ";
        div_ju[e].appendChild(frijol);
        // alert("Felicidades llevas otra carta mas");
        jugado2[e].setAttribute("disabled", "");
      }
      // else{
      //   alert("La tarjeta marcada no hace match con la baraja")
      // }
    }
  }
}

boton.addEventListener("click", function () {
  if (tarjetas.length == 0) {
    alert("El juego ha terminado");
  } else {
    var obj = tarjetas.shift();
    console.log(obj.nombre);
    cardImage.setAttribute("src", obj.img);
    cardTitle.textContent = obj.nombre;
    tarjetaspasadas.push(obj);
    console.log(tarjetaspasadas);
  }
});

btninicio.addEventListener("click", function () {
  card.setAttribute("style", "width: 15rem; ");
  card.setAttribute(
    "class",
    "card mx-auto text-center my-4 visible prueba border-0 background"
  );
  cardImage.setAttribute("src", tarjetas[0].img);
  cardTitle.textContent = tarjetas[0].nombre;
  tarjetaspasadas.push(tarjetas.shift());
  btninicio.remove();
});

ganador.addEventListener("click", function () {
  let jugado1 = document.querySelectorAll('[name="jugador1"]:checked').length;
  console.log(jugado1);
  let jugado2 = document.querySelectorAll('[name="jugador2"]:checked').length;
  if (jugado1 == "16") {
    $('#ganojugador1').modal('show');
    
  } else if (jugado2 == "16") {
    $('#ganojugador2').modal('show');
  }
});
