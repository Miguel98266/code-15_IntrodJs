let iterador = 0;
while (iterador < 5) {
  console.log(iterador);
  iterador = iterador + 1;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0, j = 5; i < 5; i++, j--) {
  console.log(`Valor de i = ${i} y valor de j =${j}`);
}

let modulo2 = [];

modulo2.push(
  (Christopher = {
    nombre: "Christopher",
    apellido: "Sauza",
  })
);
modulo2.push(
  (Mario = {
    nombre: "Mario",
    apellido: "Hdz",
  })
);
modulo2.push(
  (Guillermo = {
    nombre: "Guillermo",
    apellido: "Leija",
  })
);
modulo2.push(
  (cesar = {
    nombre: "Cesar",
    apellido: "Castillo",
  })
);

console.log(modulo2);
for (let i = 0; i < modulo2.length; i++) {
  console.log(`El apelido es ${modulo2[i]["nombre"]}`);
}

modulo2.push({
  nombre: prompt("nombre"),
  apellido: prompt("apellido"),
});

console.log(modulo2[4]);

agregar = "si";
modulo3 = [];
while (agregar === "si") {
  
  modulo3.push({
    nombre: prompt("nombre"),
    apellido: prompt("apellido"),
  });
  agregar=prompt("Deseas agregar a un alumno");
}

for (let i = 0; i < modulo3.length; i++) {
  console.log(`El nombre del alumno es ${modulo3[i].nombre} y su apellido ${modulo3[i].apellido}`);
}
