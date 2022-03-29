// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero" y nos regrese un arreglo con sólo los elementos tipo number

// 1.- Declarar un Arreglo vacio por que nos pide que regresemos un arreglo
// 2.- Recorrer un array con un for
// 3.- Saber con que funcion puedo saber el tipo de dato de una variable
// 4.- Saber como acceder a un arreglo por posicion
// 5.- Hacer mi condicion si es "number"
// 6.- Agregar el numero si es que cumple con la condicion (el numero que se agrega es que actualmente se esta evaluando)
// 7.- Regresar (con return) el arreglo declarado al principio (paso 1) 
// 8.- Probar mi funcion
// variable=nombrefuncion([4,"dos",8,"tres",5,9,1,"cero"]);
// console.log(variable);  -> Debe imprimir solo los que hayan sido de tipo number 

function number(arr) {
    arr2=[];
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i])=="number") {
            arr2.push(arr[i])
        }
    }
    return arr2;
}
arreglo=number([4,"dos",8,"tres",5,9,1,"cero"]);
console.log(arreglo);
// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro
function pares(num) {
    arr=[];
    for (let i = 0; i <= num; i++) {
        if (i%2==0) {
            arr.push(i)
        }
    }
    return arr;
}
numero=pares(10);
console.log(numero);
// 3. Crear una función que me entregue un número entero random entre 1 y 100
function random(){
   return parseInt(Math.random()*100) ;
}
numrandom=random();
console.log(numrandom);
// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4, las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2

function reemplazar(string) {
    string=string.toLowerCase();
    arr=string.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=="a") {
            arr[i]=arr[i].replace("a",4)
        }else if (arr[i]=="e") {
            arr[i]=arr[i].replace("e",3)
        }else if(arr[i]=="i") {
            arr[i]=arr[i].replace("i",7)
        }else if(arr[i]=="o") {
            arr[i]=arr[i].replace("o",6)
        }else if(arr[i]=="u") {
            arr[i]=arr[i].replace("u",2)
        }
    }
    return arr.join('')
}
console.log(reemplazar("aeiou"));