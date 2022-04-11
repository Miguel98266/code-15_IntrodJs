import { tarjetas } from "./tarjetas.js";
export function baraja(array) {
  array.sort(() => Math.random() - 0.5);
}

baraja(tarjetas);
console.log(tarjetas);

export let tablero1 = [
  { nombre: "El Nopal", img: "Cartas lotería/39.jpg" },
  { nombre: "El Venado", img: "Cartas lotería/45.jpg" },
  { nombre: "El Cotorro", img: "Cartas lotería/24.jpg" },
  { nombre: "La Araña", img: "Cartas lotería/33.jpg" },
  { nombre: "La Muerte", img: "Cartas lotería/14.jpg" },
  { nombre: "El Negrito", img: "Cartas lotería/26.jpg" },
  { nombre: "La Palma", img: "Cartas lotería/51.jpg" },
  { nombre: "La Mano", img: "Cartas lotería/21.jpg" },
  { nombre: "El Tambor", img: "Cartas lotería/29.jpg" },
  { nombre: "El Apache", img: "Cartas lotería/38.jpg" },
  { nombre: "La Chalupa", img: "Cartas lotería/48.jpg" },
  { nombre: "La Escalera", img: "Cartas lotería/7.jpg" },
  { nombre: "El Pajaro", img: "Cartas lotería/20.jpg" },
  { nombre: "El Diablito", img: "Cartas lotería/2.jpg" },
  { nombre: "El Bandolon", img: "Cartas lotería/17.jpg" },
  { nombre: "La Rana", img: "Cartas lotería/54.jpg" },
];
export var tablero2 = [
  { nombre: "La Rosa", img: "Cartas lotería/41.jpg" },
  { nombre: "El Pajaro", img: "Cartas lotería/20.jpg" },
  { nombre: "La Luna", img: "Cartas lotería/23.jpg" },
  { nombre: "El Alacran", img: "Cartas lotería/40.jpg" },
  { nombre: "El Venado", img: "Cartas lotería/45.jpg" },
  { nombre: "La Rana", img: "Cartas lotería/54.jpg" },
  { nombre: "El Nopal", img: "Cartas lotería/39.jpg" },
  { nombre: "La Bota", img: "Cartas lotería/22.jpg" },
  { nombre: "El Sol", img: "Cartas lotería/46.jpg" },
  { nombre: "El Sandia", img: "Cartas lotería/28.jpg" },
  { nombre: "El Melon", img: "Cartas lotería/11.jpg" },
  { nombre: "El Diablito", img: "Cartas lotería/2.jpg" },
  { nombre: "La Palma", img: "Cartas lotería/51.jpg" },
  { nombre: "La Maceta", img: "Cartas lotería/52.jpg" },
  { nombre: "La Estrella", img: "Cartas lotería/35.jpg" },
  { nombre: "El Violoncello", img: "Cartas lotería/18.jpg" },
];
export var tablero3 = [
  { nombre: "La Luna", img: "Cartas lotería/23.jpg" },
  { nombre: "El Bandolon", img: "Cartas lotería/17.jpg" },
  { nombre: "El Gorrito", img: "Cartas lotería/13.jpg" },
  { nombre: "Las Jaras", img: "Cartas lotería/31.jpg" },
  { nombre: "El Apache", img: "Cartas lotería/38.jpg" },
  { nombre: "La Palma", img: "Cartas lotería/51.jpg" },
  { nombre: "El Sol", img: "Cartas lotería/46.jpg" },
  { nombre: "El Catrin", img: "Cartas lotería/4.jpg" },
  { nombre: "La Bota", img: "Cartas lotería/22.jpg" },
  { nombre: "El Pescado", img: "Cartas lotería/50.jpg" },
  { nombre: "La Campana", img: "Cartas lotería/43.jpg" },
  { nombre: "El Pajaro", img: "Cartas lotería/20.jpg" },
  { nombre: "El Musico", img: "Cartas lotería/32.jpg" },
  { nombre: "La Dama", img: "Cartas lotería/3.jpg" },
  { nombre: "El Borracho", img: "Cartas lotería/25.jpg" },
  { nombre: "El Valiente", img: "Cartas lotería/12.jpg" },
];
