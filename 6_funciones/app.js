// Funciones
nombreFuncion();
{
    // SCOPE
}

console.log('mensaje fuera de una funcion');
// Estructura y creacion de una funcion
function nombreFuncion() {
    console.log('mensaje dentro de una funcion');
    // Instrucciones
    // Las instrucciones declaradas dentro del cuerpo de una funcion
    // solo se ejecutaran cuando yo invoque a la funcion

}

// Ejecutar una funcion
nombreFuncion();

function saludar() {
    // Instrucciones 
    let nombre="Miguel"
    console.log(`Hola ${nombre}`);
}

saludar();
// Funcion sin parametros
function sumarDosNumeros() {
    let n1=10;
    let n2=60;
    console.log(n1+n2)
}
sumarDosNumeros();
// Funcion con parametros
function sumarDosNumerosConParametros(numeroA,numeroB) {
    let suma=numeroA+numeroB;
    console.log(suma);
}
sumarDosNumerosConParametros(2,5);
sumarDosNumerosConParametros(1,10);

function registarUsuario(nombreUsuario) {
    console.log(`Bienvenido, ${nombreUsuario}`);
}

registarUsuario('Miguel');

function mostrarNumeros(limite) {
    for (let i = 0; i <= limite; i++) {
        console.log(i);
    }
}
mostrarNumeros(3);