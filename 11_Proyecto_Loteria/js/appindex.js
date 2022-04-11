import { tablero1, tablero2, tablero3 } from "./barajear.js";
// ------------Generacion de Tableros-------------------------

document.addEventListener("DOMContentLoaded", loadTableros);
// Carga las imagenes de los 3 tableros a escojer
function loadTableros() {
  $("#exampleModal").modal("show");
  
  let ptablero = document.querySelector("#primer_tablero");
  cargarTablero(tablero1,ptablero);

  let stablero = document.querySelector("#segundo_tablero");
  cargarTablero(tablero2,stablero);
  
  let ttablero = document.querySelector("#tercer_tablero");
  cargarTablero(tablero3,ttablero);
  
}

export function cargarTablero(tablero, iddiv) {
  for (const obj of tablero) {
    // console.log(tablero);
    let div = document.createElement("div");
    div.className = "col-3 text-center";
    let img = document.createElement("img");
    img.className = "img-thumbnail";
    img.src = obj.img;
    img.alt = obj.nombre;
    div.appendChild(img);
    iddiv.appendChild(div);
  }
}
export const jugador1 = document.getElementsByName("jugador1");
export const jugador2 = document.getElementsByName("jugador2");

export const tabj1 = document.getElementById("tablero1j1");
export const tab2j1 = document.getElementById("tablero2j1");
export const tab3j1 = document.getElementById("tablero3j1");

export const tabj2 = document.getElementById("tablero1j2");
export const tab2j2 = document.getElementById("tablero2j2");
export const tab3j2 = document.getElementById("tablero3j2");
// Revision de Tableros
tabj1.addEventListener("click", revisarj1);
tab2j1.addEventListener("click", revisarj1);
tab3j1.addEventListener("click", revisarj1);

tabj2.addEventListener("click", revisarj2);
tab2j2.addEventListener("click", revisarj2);
tab3j2.addEventListener("click", revisarj2);

function revisarj1() {
  for (let i = 0; i < jugador1.length; i++) {
    if (jugador1[i].checked) {
      console.log("Esta check");
      jugador2[i].setAttribute("disabled", "");

      console.log(jugador1[i].value);
      var tab = jugador1[i].value;
    } else if (!jugador1[i].checked) {
      jugador2[i].removeAttribute("disabled");
    }
  }
  return tab;
}

function revisarj2() {
  for (let j = 0; j < jugador2.length; j++) {
    if (jugador2[j].checked) {
      console.log("Esta check");
      jugador1[j].setAttribute("disabled", "");

      console.log(jugador2[j].value);
      var tab2 = jugador2[j].value;
    } else if (!jugador2[j].checked) {
      jugador1[j].removeAttribute("disabled");
    }
  }
  return tab2;
}
// let continuar =document.getElementById('continuar');
// continuar.addEventListener("submit",function(){
//   e.preventDefault();
//   if (jugador1=='' || jugador2=='') {
//     alert('Falta seleccionar un tablero')
//   }
// });
