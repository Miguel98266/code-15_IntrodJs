// Con ayuda de alerts y promts haremos un cajero automático
// Nos permitirá abrir una cuenta con mínimo $100
// De no ingresar el monto mínimo, no se podrá crear
// Una vez creado, se podrá ingresar o retirar dinero

let nombre = prompt("Escriba su nombre para abrir una cuenta");
let monto = parseInt(prompt(`Hola ${nombre}, escribe el monto con que quieres abrir tu cuenta`));

if (monto >= 100) {
  alert("Tu cuenta fue creada");
  var continuar = true;
  while (continuar) {
    opcion = prompt(
      "Que accion quieres realizar? \n 1) Retirar dinero \n 2) Ingresar dinero \n 3) Salir"
    );

    switch (opcion) {
      case "1":
        retirar = parseInt(prompt("Cuanto dinero deseas retirar?"));
        if (retirar > monto) {
          alert("El monto a retirar es mayor a lo que tienes");
        } else {
          monto = monto - retirar;
          alert(
            `El monto que retiraste fue : ${retirar} el total que te queda en tu cuenta es ${monto} `
          );
        }
        break;
      case "2":
        ingresar = parseInt(prompt("Cuanto dinero deseas ingresar?"));
        monto = monto + ingresar;
        alert(
          `Tu cuenta ha sido actualizada ahora cuentas con un saldo de ${monto}`
        );
        break;
      case "3":
        alert("Hasta luego Ha sido un placer ayudarte");
        continuar = false;
        break;
      default:
        alert("Opcion no valida");
        break;
    }
  }
} else {
  alert("Lo siento el monto minimo es de $100");
}
