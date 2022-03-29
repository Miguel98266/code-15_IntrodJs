// Funciones con parametros
// Crear una función que reciba un número y nos muestre en la consola si es positivo o negativo
function evaluarNumero(num) {
    if (num>0) {
        console.log(`El numero ${num} es positivo`)
    }if(num==0){
        console.log(`El numero ${num} es neutral`)
    }
    else{
        console.log(`El numero ${num} es negativo`)
    }
}
evaluarNumero(-1);

// Crear una función que reciba el nombre de un cliente y un numero que hace referencia a un ahorro y nos muestre en la consola un mensaje con el nombre del cliente y el monto ahorrado

function clienteNombreAhorro(nombre,ahorro) {
    console.log(`El cliente ${nombre} a ahorrado la cantidad de ${ahorro}`)
}

clienteNombreAhorro("Miguel",1800)

// 3. Crear una función que reciba un arreglo de calificaciones y nos muestre el promedio
function promedioCalificaciones(calificaciones) {
    let promedio=0;
    for (let i = 0; i < calificaciones.length; i++) {
         promedio=promedio+calificaciones[i];
    }
    promedio=promedio/calificaciones.length;
    console.log(`El promedio es: ${promedio}`)
}
promedioCalificaciones([1,3,4,5]);

// 4. Crear una función que reciba un número y nos diga si es par o impar
function parOImpar(numero) {
    if (numero%2==0) {
        console.log(`El numero ${numero} es par`);
    }else{
        console.log(`El numero ${numero} es impar`);
    }
}
parOImpar(5)

// 5. Crear una función que reciba un código (elige tres códigos diferentes) y por cada código nos entregue un cupón de descuento (tú defines el valor del cupón)
function cupon(codigo) {
    if(codigo==="Novedad"){
        console.log(`Con el codigo ${codigo} has recibido el 15% de descuento en tu siguiente compra`);
    }else if(codigo==="Precio"){
        console.log(`Con el codigo ${codigo} has recibido el 20% de descuento en tu siguiente compra`);
    } else if(codigo==="Dinamicas"){
        console.log(`Con el codigo ${codigo} has recibido el 25% de descuento en tu siguiente compra`);
    } 
}
cupon("Novedad");

// 6. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su perímetro
function perimetroTriangulo(base,altura) {
    return (2*altura)+base
    // console.log(`El perimetro del tringulo de una base ${base} y altura ${altura} es ${(2*altura)+base}`);
}
perimetringulo=perimetroTriangulo(3,8);
console.log(`El perimetro del tringulo es ${perimetringulo}`)

// 7. Crear una función que reciba base y altura de un triángulo y nos muestre cuál es su área
function areaTriangulo(base,altura) {
    return (base*altura)/2;
    // console.log(`El area del tringulo de una base ${base} y altura ${altura} es ${(base*altura)/2}`);
}
areatrin=areaTriangulo(3,8);
console.log(`El area del tringulo es ${areatrin}`);
// 8. Crear una función que reciba 2 números y me entregue el número más alto
function numeroMayor(num1,num2) {
    if (num1>num2) {
        return num1;
    }else{
        return num2;
    }
}
mayor=numeroMayor(2,4);
console.log(`El numero ${mayor} es el mayor`)
// 9. Crear una función que reciba 2 números y me entregue el número más pequeño
function numeroMenor(num1,num2) {
    if (num1<num2) {
        return num1;
        console.log(`El numero ${num1} es menor a ${num2}`)
    }else{
        return num2;
        console.log(`El numero ${num2} es menor a ${num1}`)
    }
}
menor=numeroMenor(2,4);
console.log(`El numero ${menor} es menor`)
// 10. Crear una función que reciba 3 strings y nos muestre cuál tiene más caracteres
function stringMasLargo(string1,string2,string3) {
    if (string1.length > string2.length && string1.length > string3.length) {
        return string1;
    } else if(string2.length > string1.length && string2.length > string3.length){
        return string2;
    } else{
        return string3;
    }
}
string=stringMasLargo("Hola","H","Ho");
console.log(`La cadena ${string} es la mas larga`)
// 11. Crear una función que reciba 1 número y me lo muestre al cubo
function numeroAlCubo(numero) {
    return(numero*numero*numero)
} 
num=2;
cubo=numeroAlCubo(num);
console.log(`El numero al cubo de ${num} es :${cubo} `)
// 12. Crear una función que reciba una palabra y me muestre cuántas "a" contiene
function numeroDeA(string) {
    contador=0;
    stringminuscula=string.toLowerCase();
    const myArray = stringminuscula.split("");
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i]==="a") {
            contador++;
        }
    }
    console.log(`El numero de A que contiene la palabra ${string} es ${contador}`)
}
numeroDeA("AAAA");
// 13. Crear una función que reciba una palabra y la transforme a minúsculas
function cadenaMinuscula(string){
    console.log(`La cadena en minuscula es ${string.toLowerCase()}`);
}
cadenaMinuscula("HOLA")
// 14. Crear una función que reciba una palabra y la transforme a mayúsculas
function cadenaMayuscula(string){
    console.log(`La cadena en minuscula es ${string.toUpperCase()}`);
}
cadenaMayuscula("hola")
// 15. Crear una función que reciba un número del 0 al 5 y me muestre en la consola el valor del arreglo que tiene ese índice let array = ['a', 'b', 'c',' d', 'e', 'f']
function numeroArray(numero) {
let array = ['a', 'b', 'c',' d', 'e', 'f']
    if (numero>=0 && numero<=5) {
        console.log(`La letra dentro del array es: ${array[numero]} `)
    }else{
        console.log('Prueba con un numero entre 0 al 5');
    }
}
numeroArray(5);

// Funcion con return

function calcularAreaCuadrado(lado){
    let area=lado*lado;
    // return ->Nos indica el final de la función y el return nos entrega el valor por la funcion existe
    return area;
}

area=calcularAreaCuadrado(5);
console.log(area);