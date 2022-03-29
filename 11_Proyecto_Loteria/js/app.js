let tarjetas = [
    {
      nombre: "El Gallo",
      img: "Cartas lotería/1.jpg",
    },  
    {
      nombre: "El Diablito",
      img: "Cartas lotería/2.jpg",
    },
    {
      nombre: "La Dama",
      img: "Cartas lotería/3.jpg",
    },
    {
      nombre: "El Catrin",
      img: "Cartas lotería/4.jpg",
    },
    {
      nombre: "El Paraguas",
      img: "Cartas lotería/5.jpg",
    },
    {
      nombre: "La Sirena",
      img: "Cartas lotería/6.jpg",
    },
    {
      nombre: "La Escalera",
      img: "Cartas lotería/7.jpg",
    },
    {
      nombre: "La Botella",
      img: "Cartas lotería/8.jpg",
    },
    {
      nombre: "El Barril",
      img: "Cartas lotería/9.jpg",
    },
    {
      nombre: "El Arbol",
      img: "Cartas lotería/10.jpg",
    },
    {
      nombre: "El Melon",
      img: "Cartas lotería/11.jpg",
    },
    {
      nombre: "El Valiente",
      img: "Cartas lotería/12.jpg",
    },
    {
      nombre: "El Gorrito",
      img: "Cartas lotería/13.jpg",
    },
    {
      nombre: "La Muerte",
      img: "Cartas lotería/14.jpg",
    },
    {
      nombre: "La Pera",
      img: "Cartas lotería/15.jpg",
    },
    {
      nombre: "La Bandera",
      img: "Cartas lotería/16.jpg",
    },
    {
      nombre: "El Bandolon",
      img: "Cartas lotería/17.jpg",
    },
    {
      nombre: "El Violoncello",
      img: "Cartas lotería/18.jpg",
    },
    {
      nombre: "La Garza",
      img: "Cartas lotería/19.jpg",
    },
    {
      nombre: "El Pajaro",
      img: "Cartas lotería/20.jpg",
    },
    {
      nombre: "La Mano",
      img: "Cartas lotería/21.jpg",
    },
    {
      nombre: "La Bota",
      img: "Cartas lotería/22.jpg",
    },
    {
      nombre: "La Luna",
      img: "Cartas lotería/23.jpg",
    },
    {
      nombre: "El Cotorro",
      img: "Cartas lotería/24.jpg",
    },
    {
      nombre: "El Borracho",
      img: "Cartas lotería/25.jpg",
    },
    {
      nombre: "El Negrito",
      img: "Cartas lotería/26.jpg",
    },
    {
      nombre: "El Corazon",
      img: "Cartas lotería/27.jpg",
    },
    {
      nombre: "El Sandia",
      img: "Cartas lotería/28.jpg",
    },
    {
      nombre: "El Tambor",
      img: "Cartas lotería/29.jpg",
    },
    {
      nombre: "El Camaron",
      img: "Cartas lotería/30.jpg",
    },
    {
      nombre: "Las Jaras",
      img: "Cartas lotería/31.jpg",
    },
    {
      nombre: "El Musico",
      img: "Cartas lotería/32.jpg",
    },
    {
      nombre: "La Araña",
      img: "Cartas lotería/33.jpg",
    },
    {
      nombre: "El Soldado",
      img: "Cartas lotería/34.jpg",
    },
    {
      nombre: "La Estrella",
      img: "Cartas lotería/35.jpg",
    },
    {
      nombre: "El Cazo",
      img: "Cartas lotería/36.jpg",
    },
    {
      nombre: "El Mundo",
      img: "Cartas lotería/37.jpg",
    },
    {
      nombre: "El Apache",
      img: "Cartas lotería/38.jpg",
    },
    {
      nombre: "El Nopal",
      img: "Cartas lotería/39.jpg",
    },
    {
      nombre: "El Alacran",
      img: "Cartas lotería/40.jpg",
    },
    {
      nombre: "La Rosa",
      img: "Cartas lotería/41.jpg",
    },
    {
      nombre: "La Calavera",
      img: "Cartas lotería/42.jpg",
    },
    {
      nombre: "La Campana",
      img: "Cartas lotería/43.jpg",
    },
    {
      nombre: "El Cantarito",
      img: "Cartas lotería/44.jpg",
    },
    {
      nombre: "El Venado",
      img: "Cartas lotería/45.jpg",
    },
    {
      nombre: "El Sol",
      img: "Cartas lotería/46.jpg",
    },
    {
      nombre: "La Corona",
      img: "Cartas lotería/47.jpg",
    },
    {
      nombre: "La Chalupa",
      img: "Cartas lotería/48.jpg",
    },
    {
      nombre: "El Pino",
      img: "Cartas lotería/49.jpg",
    },
    {
      nombre: "El Pescado",
      img: "Cartas lotería/50.jpg",
    },
    {
      nombre: "La Palma",
      img: "Cartas lotería/51.jpg",
    },
    {
      nombre: "La Maceta",
      img: "Cartas lotería/52.jpg",
    },
    {
      nombre: "La Arpa",
      img: "Cartas lotería/53.jpg",
    },
    {
      nombre: "La Rana",
      img: "Cartas lotería/54.jpg",
    },
    
  ];
function baraja(array) {
  array.sort(() => Math.random() - 0.5);
}
// arr= [1,2,3,4,5,6,7,8,9,10,11,12]
 
// for (const key in tarjetas) {
//     console.log(tarjetas[key].nombre)
// }
// baraja(tarjetas);
// console.log(tarjetas);
let boton = document.getElementById("carta");
let cardImage = document.querySelector(".card-img-top");
let cardTitle = document.querySelector(".card-title");
let contador=0;
boton.addEventListener("click", function () {
  cardImage.setAttribute("src", tarjetas[contador].img);
  cardTitle.textContent = tarjetas[contador].nombre;
  contador++
});
