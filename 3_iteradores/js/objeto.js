const modulo={
    titulo:"Intro a Js",
    duracionSemanas:4,
    yaTermino:false
}

modulo.titulo

modulo.yaTermino

console.log(`Este es mi modal actual ${modulo.titulo}`);
console.log(modulo["yaTermino"])
// No se recomienda usar guion medio
const moduloMalasPracticas={
    "duracion-semanas":4
}

moduloMalasPracticas["duracion-semanas"];

const mascota={
    nombre:"Firulais",
    jugueteFavorito:"Pelota",
    raza:{
        color:"cafe",
        tamano:"mediano"
    }
}
console.log(mascota)

console.log(mascota.raza.color)
console.log(mascota["raza"]["color"])


// mascota["raza"]["nombre"]=prompt("Cual es el nombre de la raza");

console.log(mascota)

delete mascota.jugueteFavorito

// ------------------------------------------------------------

const miguel={
    nombre:"Miguel",
    apellido:"Calixto",
    edad:23,
    hobbies:{
        deporte:"futbol",
        videojuegos:"WZ"
    }
}
console.log(miguel)
