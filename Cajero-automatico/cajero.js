var cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "123t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];
var exit = 4;
let nombre, password, opcion;

function seleccionarCuenta() {
  nombre = document.getElementById("nombre");
  var cuenta = cuentas.find(function (cuenta) {
    return cuenta.nombre.toLowerCase() === nombre.value.toLowerCase();
  });

  if (cuenta) {
    var password = document.getElementById("password");
    if (password.value === cuenta.password) {
      alert("Bienvenido " + cuenta.nombre);
      mostrarOpciones(cuenta);
    } else {
      alert("Contraseña incorrecto. Intente nuevamente.");
    }
  } else {
    alert("Cuenta no encontrada. Intente nuevamente.");
  }
}

function mostrarOpciones(cuenta) {
  do {
      (opcion = prompt("Seleccione una opción:\n \n1. Consultar saldo \n2. Ingresar monto \n3. Retirar monto \n4. Salir"));

    switch (opcion) {
      case "1":
        console.log(cuenta);
        consultarSaldo(cuenta);
        break;
      case "2":
        ingresarMonto(cuenta);
        break;
      case "3":
        retirarMonto(cuenta);
        break;
      case "4":
        exit = 0;
        break;
      default:
        alert("Opción inválida. Intente nuevamente.");
        break;
    }
  } while (exit == 4);
}

function consultarSaldo(cuenta) {
  alert("El saldo actual de la cuenta es: $" + cuenta.saldo.toFixed(2));
}

function ingresarMonto(cuenta) {
  var monto = parseFloat(prompt("Ingrese el monto a ingresar:"));

  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Intente nuevamente.");
    ingresarMonto(cuenta);
    return;
  }

  if (cuenta.saldo + monto > 990) {
    alert(
      "No se puede realizar el deposito. El saldo excede los 990 aceptados."
    );
    return;
  }

  cuenta.saldo += monto;

  alert(
    "Monto ingresado: $" +
      monto.toFixed(2) +
      "\nNuevo saldo: $" +
      cuenta.saldo.toFixed(2)
  );
}

function retirarMonto(cuenta) {
  var monto = parseFloat(prompt("Ingrese el monto a retirar:"));

  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Intente nuevamente.");
    retirarMonto(cuenta);
    return;
  }

  if (cuenta.saldo - monto < 10) {
    alert(
      "No se puede realizar el retiro. La cuenta carece de los 10 requeridos."
    );
    return;
  }

  cuenta.saldo -= monto;

  alert(
    "Monto retirado: $" +
      monto.toFixed(2) +
      "\nNuevo saldo: $" +
      cuenta.saldo.toFixed(2)
  );
}
