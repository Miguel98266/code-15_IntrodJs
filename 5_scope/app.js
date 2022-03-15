/* Scope ->Espacio-> Alcance ->Contexto ->Memoria*/

/* SCOPE puede estar definido por llaves{} */

//  Variables globales ->Se pueden utilizar en el contexto general de la aplicacion
var nombre = "Miguel";

console.log(nombre);
{
    console.log(nombre);
    var nombre2='Angel'
    console.log(nombre2);
}
console.log(nombre);

//  Variables locales ->Se utilizan solo en el contexto que fueron creadas
let nombre3="Diana";
console.log(nombre3);
{
    console.log(nombre3);
    let nombre4="Arturo";
    console.log(nombre4);
}
console.log(nombre4);

//  Constantes ->Se utilizan solo en el contexto que fueron creadas y no pueden cambiar su valor
const nombre5="Lupita";
console.log(nombre5);
nombre5="Roberto"

