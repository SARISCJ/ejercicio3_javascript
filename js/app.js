var horas = prompt("¿Cúantas horas trabajar al día?");
var pago = prompt("¿Cuánto te pagan por hora?");
var total = (parseInt(horas) * parseInt(pago))*7;
window.alert ("Tu sueldo semanal es: " + total + ".00 Nuevos Soles");