// Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
// *Nota: sólo con for, no se vale usar funciones que ya existan
let lista=[1,2,3,9,10];
let calificacionesOrdenaras=lista.sort(function(a, b) {
    return a - b;
  });
console.log(calificacionesOrdenaras);  
let menor=calificacionesOrdenaras[0];
console.log(menor);
let mayor=calificacionesOrdenaras[calificacionesOrdenaras.length-1];
console.log(mayor)
let promedio=0;
for (let i = 0; i < lista.length; i++) {
    promedio=promedio+lista[i];
}
promedio=promedio/lista.length;
console.log(promedio)


// Con ayuda de los ciclos, imprimir la serie Fibonacci 0,1,1,2,3,5,8,13,21,...
// *puedes poner un tope de cuántos elementos de la serie quieres 
let primero=0;
let segundo=1;
numero=10;
let fibo=[]
for (let i = 0; i < numero; i++) {
    console.log(primero , segundo)
    fibo.push(primero,segundo)
    primero=primero+segundo;
    segundo=primero+segundo;
    
}
console.log(fibo)

// Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos como la siguiente:

//     *
//    ***
//   *****
//  *******
// *********
num=0;
while (num<5) {
    symbolo='*';
    symbolo
    console.log(symbolo)
    num++;
}