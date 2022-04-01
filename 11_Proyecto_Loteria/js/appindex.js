
import {tablero1,tablero2,tablero3} from './barajear.js'
// ------------Generacion de Tableros-------------------------
console.log(tablero1);
// let btn=document.getElementById('btnbarajear');

// btn.addEventListener('click',tableros);
// let abre=document.getElementById("");

document.addEventListener('DOMContentLoaded',loadTableros);

function loadTableros() {
  $('#exampleModal').modal('show');
  // abre.setAttribute("data")
  let table1 = document.querySelectorAll(".tablero1");
  for (let i = 0; i < 16; i++) {
    table1[i].setAttribute("src", tablero1[i].img);
    table1[i].setAttribute("alt", tablero1[i].nombre);
  }
  let table2 = document.querySelectorAll(".tablero2");
  console.log(table2.length);
  for (let i = 0; i < 16; i++) {
    table2[i].setAttribute("src", tablero2[i].img);
    table2[i].setAttribute("alt", tablero2[i].nombre);
  }
  let table3 = document.querySelectorAll(".tablero3");
  console.log(table3.length);
  for (let i = 0; i < 16; i++) {
    table3[i].setAttribute("src", tablero3[i].img);
    table3[i].setAttribute("alt", tablero3[i].nombre);
  }
}



export const jugador1 = document.getElementsByName("jugador1");
export const jugador2 = document.getElementsByName("jugador2");

export const tabj1=document.getElementById("tablero1j1");
export const tab2j1=document.getElementById("tablero2j1");
export const tab3j1=document.getElementById("tablero3j1");

export const tabj2=document.getElementById("tablero1j2");
export const tab2j2=document.getElementById("tablero2j2");
export const tab3j2=document.getElementById("tablero3j2");

tabj1.addEventListener("click",revisarj1);
tab2j1.addEventListener("click",revisarj1);
tab3j1.addEventListener("click",revisarj1);

tabj2.addEventListener("click",revisarj2);
tab2j2.addEventListener("click",revisarj2);
tab3j2.addEventListener("click",revisarj2);

function revisarj1() {
  for (let i = 0; i < jugador1.length; i++) {
    if (jugador1[i].checked == true) {
      console.log("Esta check");
      jugador2[i].setAttribute("disabled", "");

      console.log(jugador1[i].value);
      var tab=jugador1[i].value}
      else if(jugador1[i].checked == false) {
      jugador2[i].removeAttribute("disabled");
    }
  }
  return tab;
};

function revisarj2() {
  for (let j = 0; j < jugador2.length; j++) {
    if (jugador2[j].checked == true) {
      console.log("Esta check");
      jugador1[j].setAttribute("disabled", "");
      console.log(jugador2[j].value);
      var tab2=jugador2[j].value}
     else {
      jugador1[j].removeAttribute("disabled");
    }
  }
  return tab2;
};


// j1=revisarj1();
// console.log("Ejecuto")
// console.log(revisarj2())
// let jtablero1 = document.getElementsByName("Jugador1");
// console.log(jtablero1);
// let j2tablero1 = document.getElementsByName("Jugador2");

// console.log(j2tablero1);
// function jugadores() {
//   let jugadores = [];
//   let jugador1 = [];
//   let jugador2 = [];
//   for (let i = 0; i < jtablero1.length; i++) {
//     if (jtablero1[i].checked == true) {
//       console.log("Si esta check");
//       // console.log(tarjetaspasadas[tarjetaspasadas.length-1].nombre)
//       // console.log(jugador1[e].value)
//       j2tablero1[0].setAttribute("disabled", "");
//       jtablero1[i].setAttribute("disabled", "");
//       jugador1.push(tablero1);
//       jugadores.push(jugador1);
//       console.log(jugadores);
//     } else if (j2tablero1[i].checked == true) {
//       jtablero1[i].setAttribute("disabled", "");
//       jugador2.push(tablero1);
//       jugadores.push(jugador2);
//     }
//   }

//   return;
// }
