// Instrucciones:
// Agregue una etiqueta <script> en la parte inferior de la página para su código.
// Agregue un evento al botón para que llame a una función hacerFrase cuando se haga clic.
// En la función hacerFrase, recupere los valores actuales de los elementos del formulario, crea una frase a partir de ellos y envíela al elemento #story
// Ej: "Anita lava la tina"

let boton = document.getElementById("lib-button");
let div = document.getElementById("story");

function hacerFrase() {
  let complemento = document.getElementById("complement").value;
  let verbo = document.getElementById("verb").value;
  let person = document.getElementById("person").value;

  let parrafo = document.createElement("p");
  parrafo.textContent = `${person} ${verbo} ${complemento} `;
  div.appendChild(parrafo);
}

boton.addEventListener("click", hacerFrase,{once:true});
