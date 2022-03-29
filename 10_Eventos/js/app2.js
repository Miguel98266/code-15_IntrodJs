// Instrucciones:
// Agregue una etiqueta <script> en la parte inferior de la página para su código
// Crear una funcion que resuelva cada una de las operaciones
// Al dar clic a cada uno de los botones calcular la operacion correspondiente y pintar el resultado en el #solution
// BONUS! Hacer que el calculo de la operación se haga cuando se presione la tecla que viene en el comentario
// Recuerden que para detectar teclas el evento es onkeypress para inline y atributo... y keypress para addEventListener


divSolucion=document.getElementById('solution');

function cuadrado() {
    inputCuadrado=document.getElementById('square').value;
    let solucionCuadrado=document.createElement("p");
    solucionCuadrado.textContent=`El cuadrado de ${inputCuadrado} es : ${inputCuadrado*inputCuadrado}`;
    divSolucion.appendChild(solucionCuadrado);
}

function mitad(){
    inputHalf=document.getElementById('half').value;
    let solucionHalf=document.createElement("p");
    solucionHalf.textContent=`La mitad de ${inputHalf} es : ${inputHalf/2}`;
    divSolucion.appendChild(solucionHalf);
}

btnporcentaje=document.getElementById('percent-button');
function porcentaje() {
    inputPorcentaje=document.getElementById('percentage').value;
    inputCantidad=document.getElementById('entireValue').value;
    let solucionPorcentaje= document.createElement("p");
    
    solucionPorcentaje.textContent=`El ${inputPorcentaje}% de ${inputCantidad} es : ${inputCantidad*inputPorcentaje/100}`
    divSolucion.appendChild(solucionPorcentaje);
}

btnporcentaje.addEventListener("click",porcentaje);

btnarea=document.getElementById('area-button');
function areaCirculo() {
    inputRadio=document.getElementById('radius').value;

    let solucionArea=document.createElement('p');
    solucionArea.textContent=`El area de un Circulo con radio de ${inputRadio} es : ${3.1416*(inputRadio*inputRadio)}`
    divSolucion.appendChild(solucionArea    );
}
btnarea.addEventListener("click",areaCirculo);

document.addEventListener("keypress",function (e) {
    // console.log(e)
    if (e.key=="a") {
        cuadrado()
    } else if (e.key=="b") {
        mitad()
    } else if(e.key=="c"){
        porcentaje()
    } else if(e.key=="d"){
        areaCirculo()
    }
})