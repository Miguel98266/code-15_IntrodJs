//1.- Crear una funcione que nos muestre en consola los dias de la semana 
function diasSemana() {
    console.log("Lunes, Martes,Miercoes,Jueves,Viernes,Sabado,Domingo");
}

//2.- Crear una funcion que nos muestre el resultado de una suma
function suma(a,b) {
    return console.log(`La suma de ${a} + ${b} = ${a+b}`);
}
suma(2,3);
// 3.- Crear una funcion que nos muestre la longitud de un arreglo que tu creaaras

function longitud(num){
    arr=[];
    for (let i = 0; i < num; i++) {
        arr.push(prompt("Escribe algo para tu arreglo"));   
    }
    console.log(arr.length)
}
longitud(3);