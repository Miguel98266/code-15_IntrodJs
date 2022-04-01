import {tarjetas} from './tarjetas.js';
export function baraja(array) {
  array.sort(() => Math.random() - 0.5);
}

baraja(tarjetas);
console.log(tarjetas);

// 
export let tablero1=[ {nombre: 'El Nopal', img: 'Cartas lotería/39.jpg'},
 {nombre: 'El Venado', img: 'Cartas lotería/45.jpg'},
 {nombre: 'El Cotorro', img: 'Cartas lotería/24.jpg'},
 {nombre: 'La Araña', img: 'Cartas lotería/33.jpg'},
 {nombre: 'La Muerte', img: 'Cartas lotería/14.jpg'},
 {nombre: 'El Negrito', img: 'Cartas lotería/26.jpg'},
 {nombre: 'La Palma', img: 'Cartas lotería/51.jpg'},
 {nombre: 'La Mano', img: 'Cartas lotería/21.jpg'},
 {nombre: 'El Tambor', img: 'Cartas lotería/29.jpg'},
 {nombre: 'El Apache', img: 'Cartas lotería/38.jpg'},
 {nombre: 'La Chalupa', img: 'Cartas lotería/48.jpg'},
 {nombre: 'La Escalera', img: 'Cartas lotería/7.jpg'},
 {nombre: 'El Pajaro', img: 'Cartas lotería/20.jpg'},
 {nombre: 'El Diablito', img: 'Cartas lotería/2.jpg'},
 {nombre: 'El Bandolon', img: 'Cartas lotería/17.jpg'},
 {nombre: 'La Rana', img: 'Cartas lotería/54.jpg'}];
export var tablero2=[{nombre: 'La Rosa', img: 'Cartas lotería/41.jpg'},
 {nombre: 'El Pajaro', img: 'Cartas lotería/20.jpg'},
 {nombre: 'La Luna', img: 'Cartas lotería/23.jpg'},
 {nombre: 'El Alacran', img: 'Cartas lotería/40.jpg'},
 {nombre: 'El Venado', img: 'Cartas lotería/45.jpg'},
 {nombre: 'La Rana', img: 'Cartas lotería/54.jpg'},
 {nombre: 'El Nopal', img: 'Cartas lotería/39.jpg'},
 {nombre: 'La Bota', img: 'Cartas lotería/22.jpg'},
 {nombre: 'El Sol', img: 'Cartas lotería/46.jpg'},
 {nombre: 'El Sandia', img: 'Cartas lotería/28.jpg'},
 {nombre: 'El Melon', img: 'Cartas lotería/11.jpg'},
 {nombre: 'El Diablito', img: 'Cartas lotería/2.jpg'},
 {nombre: 'La Palma', img: 'Cartas lotería/51.jpg'},
 {nombre: 'La Maceta', img: 'Cartas lotería/52.jpg'},
 {nombre: 'La Estrella', img: 'Cartas lotería/35.jpg'},
 {nombre: 'El Violoncello', img: 'Cartas lotería/18.jpg'}];
export var tablero3=[{nombre: 'La Luna', img: 'Cartas lotería/23.jpg'},
 {nombre: 'El Bandolon', img: 'Cartas lotería/17.jpg'},
 {nombre: 'El Gorrito', img: 'Cartas lotería/13.jpg'},
 {nombre: 'Las Jaras', img: 'Cartas lotería/31.jpg'},
 {nombre: 'El Apache', img: 'Cartas lotería/38.jpg'},
 {nombre: 'La Palma', img: 'Cartas lotería/51.jpg'},
 {nombre: 'El Sol', img: 'Cartas lotería/46.jpg'},
 {nombre: 'El Catrin', img: 'Cartas lotería/4.jpg'},
 {nombre: 'La Bota', img: 'Cartas lotería/22.jpg'},
 {nombre: 'El Pescado', img: 'Cartas lotería/50.jpg'},
 {nombre: 'La Campana', img: 'Cartas lotería/43.jpg'},
 {nombre: 'El Pajaro', img: 'Cartas lotería/20.jpg'},
 {nombre: 'El Musico', img: 'Cartas lotería/32.jpg'},
 {nombre: 'La Dama', img: 'Cartas lotería/3.jpg'},
 {nombre: 'El Borracho', img: 'Cartas lotería/25.jpg'},
 {nombre: 'El Valiente', img: 'Cartas lotería/12.jpg'}];

 let tableross = [[], [], []];

// export function tableros() {
//   for (let i = 0; i < 3; i++) {
//     baraja(tarjetas);
//     tableross[i] = tarjetas.slice(0, 16);
//     console.log(tableross[i]);
//   }
//   // for (let i = 0; i < 16; i++) {
//   //   tablero1_copy.push(tableross[0][i]);
//   // }
//   tablero1_copy=JSON.parse(JSON.stringify(tableross[0]));
//   console.log(tablero1_copy);
//   tablero2=JSON.parse(JSON.stringify(tableross[1])); 
//   loadTableros();
//   return tablero1_copy;
// }
// console.log("tablero1_copy fuera");
// console.log(tablero1_copy);
// export function loadTableros() {
//   let table1 = document.querySelectorAll(".tablero1");
//   for (let i = 0; i < 16; i++) {
//     table1[i].setAttribute("src", tablero1_copy[i].img);
//     table1[i].setAttribute("alt", tablero1_copy[i].nombre);
//   }
//   let table2 = document.querySelectorAll(".tablero2");
//   console.log(table2.length);
//   for (let i = 0; i < 16; i++) {
//     table2[i].setAttribute("src", tablero2[i].img);
//     table2[i].setAttribute("alt", tablero2[i].nombre);
//   }
//   let table3 = document.querySelectorAll(".tablero3");
//   console.log(table3.length);
//   for (let i = 0; i < 16; i++) {
//     table3[i].setAttribute("src", tablero3[i].img);
//     table3[i].setAttribute("alt", tablero3[i].nombre);
//   }
// }

// let arrays = prueba();
// export let tablero1 = arrays[0];
// export const tablero1_copy=JSON.parse(JSON.stringify(tablero1));
// console.log(tablero1_copy);
// export let tablero2 = arrays[1];
// export  let tablero3 = arrays[2];