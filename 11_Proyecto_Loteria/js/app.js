import { tarjetas } from "./tarjetas.js";
import { tablero1, tablero2, tablero3 } from "./barajear.js";

console.log(tablero1);
// Variables a utilizar
let boton = document.getElementById("carta");
let cardImage = document.querySelector(".card-img-top");
// let cardTitle = document.querySelector(".card-title");
let btninicio = document.querySelector("#inicio");
let card = document.querySelector(".card");
let tarjetaspasadas = [];
let tableroj1 = document.querySelectorAll(".tableroj1");
let tableroj2 = document.querySelectorAll(".tableroj2");
let jugado1 = document.getElementsByName("jugador1");
let jugado2 = document.getElementsByName("jugador2");
let ganador=document.getElementById('ganador');
let tarjetaspasda=document.getElementById('tarjetaspasda');

// Esconde la Card donde se muestran las cartas
card.setAttribute("class", "visually-hidden");

// Carga los tableros seleccionados por los jugadores y valida si mandaron algo vacio 
window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  const numparams= Array.from(params).length;
  console.log(numparams);
  const jugador1 = params.get("jugador1");
  const jugador2 = params.get("jugador2");
  console.log(jugador1, jugador2);
  if (jugador1 == null || jugador2 == null) {
    alert("Falto seleccionar un tablero , seleccionalo");
    window.location.replace("http://127.0.0.1:5500/index.html");
  }
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
      jugado1[i].setAttribute("value", tablero3[i].nombre);
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

// Ejecucion de Validacion de la Carta 1
jugado1.forEach(function (jugador) {
  jugador.addEventListener("change", validarCartaJugador1);
  // console.log("Funciona?");
});
// Ejecucion de Validacion de la Carta 2
jugado2.forEach(function (jugador) {
  jugador.addEventListener("change", validarCartaJugador2);
  // console.log("Funciona?");
});

console.log(jugado1)

function validarCartaJugador1() {
  for (let e = 0; e < jugado1.length; e++) {
    
    if (jugado1[e].checked == true && !jugado1[e].disabled) {
      console.log(jugado1[e]);
      console.log("Si esta check");
      if (
        jugado1[e].value == tarjetaspasadas[tarjetaspasadas.length - 1]
      ) {
        console.log("Hizo Match");
        let div_ju = document.querySelectorAll(".div-ju");
        let frijol = document.createElement("img");
        frijol.className = "frijol";
        frijol.src = "img/frijol_oscuro.png";
        frijol.style =
          "position: absolute;top: 50%; left: 50%;transform: translate(-50%, -50%); ";
        div_ju[e].appendChild(frijol);
        jugado1[e].setAttribute("disabled", "");
      }
      else if(tarjetaspasadas.find(elemento=>elemento.nombre==jugado1[e].value)){
        console.log("Hizo Match con una tarjeta pasada");
        let div_ju = document.querySelectorAll(".div-ju");
        let frijol = document.createElement("img");
        frijol.className = "frijol";
        frijol.src = "img/frijol_oscuro.png";
        frijol.style =
          "position: absolute;top: 50%; left: 50%;transform: translate(-50%, -50%); ";
        div_ju[e].appendChild(frijol);
        jugado1[e].setAttribute("disabled", "");
      } 
      else {
        jugado1[e].checked = 0;
        alert("La tarjeta marcada no hace match con la baraja");
      }
    }
  }
}
// Valida la carta para poner el frijolito del jugador 2
function validarCartaJugador2() {
  for (let e = 0; e < jugado2.length; e++) {
    // console.log(jugado2[0]);
    if (jugado2[e].checked == true) {
      // console.log("Si esta check");
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
        jugado2[e].setAttribute("disabled", "");
      }
      else{
        alert("La tarjeta marcada no hace match con la baraja")
      }


    }
  }
}

boton.addEventListener("click", sigTarjeta);
function sigTarjeta() {
  if (tarjetas.length == 0) {
    alert("El juego ha terminado");
    window.location.replace("http://127.0.0.1:5500/index.html");

  } else {
    var obj = tarjetas.shift();
    console.log(obj.nombre);
    cardImage.setAttribute("src", obj.img);
    speechSynthesis.speak(new SpeechSynthesisUtterance(obj.nombre));
    // cardTitle.textContent = obj.nombre;
    tarjetaspasadas.push(obj);
    console.log(tarjetaspasadas);
    let obj2=document.createElement('img');
    obj2.src=obj.img;
    obj2.alt=obj.nombre;
    obj2.className="height";
    tarjetaspasda.appendChild(obj2);
  }
}
// Inicio al Juego
btninicio.addEventListener("click", function () {
  card.setAttribute("style", "width: 15rem; ");
  card.setAttribute(
    "class",
    "card mx-auto text-center my-4 visible prueba"
  );
  // cardImage.setAttribute("src", tarjetas[0].img);
  // cardTitle.textContent = tarjetas[0].nombre;
  // tarjetaspasadas.push(tarjetas.shift());
  // console.log(tarjetaspasadas);
  btninicio.remove();
  setInterval(() => {
    sigTarjeta();
  }, 3000);
});

// Boton de Loteria evalua quien gana

ganador.addEventListener("click", function () {
  let jugado1 = document.querySelectorAll('[name="jugador1"]:checked').length;
  console.log(jugado1);
  let jugado2 = document.querySelectorAll('[name="jugador2"]:checked').length;
  if (jugado1 == "16") {
    $("#ganojugador1").modal("show");
  } else if (jugado2 == "16") {
    $("#ganojugador2").modal("show");
  } else{
    $("#faltacartas").modal("show");
  }
});



