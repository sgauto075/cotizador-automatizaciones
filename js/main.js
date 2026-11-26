
const nombreCliente = prompt("Ingrese su nombre:");

const horasTrabajo = parseInt(prompt("Ingrese la cantidad de horas de trabajo:"));

const precioHora = parseFloat(prompt("Ingrese el precio por hora:"));

const presupuestoTotal = horasTrabajo * precioHora;

const mensaje = "Hola " + nombreCliente + ", el presupuesto total es: $" + presupuestoTotal;

alert(mensaje);

console.log(mensaje);
