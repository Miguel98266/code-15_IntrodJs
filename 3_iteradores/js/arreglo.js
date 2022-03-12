const arra1= new Array(3)
const arra2= new Array(1,2,3,4)
const arra3=[1,2,3,4]

const arrMix=["Miguel",23,true,()=>console.log("Hola"),"Europa"]

console.log(arrMix);
console.log(arrMix.length);

console.log(arrMix[2]);

let alumnos=["Miguel","Hiromi","Luis","Rosa"];
// Agregar datos a un array
alumnos.push("Angel","Chirstopher")
console.log(alumnos)
// Elimina el ultimo agregado y lo imprime
alumnos.pop();
console.log(alumnos);

let ultimoConcursanteEliminado=alumnos.pop()
console.log(ultimoConcursanteEliminado)

// Agrega al principio
alumnos.unshift("Karen","Estiven");

console.log(alumnos);

// Elimina al primero del array
let alumnoEliminado=alumnos.shift()
console.log(alumnoEliminado);

alumnos2=alumnos.concat("Ignacio","Ander","Irais");
console.log(alumnos2)

let alumnos3=alumnos.concat(['Ignacio','Ander','Iris'])
console.log(alumnos3)

// Join

let alumnosString=alumnos.join(',');
console.log(alumnosString);

// Slice
// slice(posicionInicio,posicionFinal se excluye)
let alumnosSlice= alumnos.slice(3,5);
console.log(alumnosSlice);

// alumnos.unshift(prompt("Ingresa un alumno"));

// Split
let alumnosSplit=alumnosString.split(",");
console.log(alumnosSplit);

// Include
// Dentro de un arreglo existe el nombre
console.log(alumnos.includes("Miguel"));

// Indexof 
// El primer resultado que encuentre o desde la posicion que lo desees buscar
let calificaciones=[7,5,6,9,9,6,8,7,9,0];
console.log(calificaciones.indexOf(9,0));

// Ordernar arreglos
let numeros=[6,3,5,6,3,7];
numeros.sort();
console.log(numeros.sort())
console.log(numeros.reverse());