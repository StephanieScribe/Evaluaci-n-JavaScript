var nombre = prompt ("¿Cuál es tu nombre?");
var edad = prompt ("¿Cuál es tu edad?");
var estudiaste = true;

console.log(nombre);
console.log(edad);
console.log(estudiaste);

let mensaje = `¡Hola, soy $(nombre) y tengo $(edad) años!`;
console.log(mensaje);

/* if (estudiaste = true) {
    console.log("Stephanie ¡sí estudiaste! Pasarás la materia 😊")
    }else if(estudiaste = false) {
    console.log("Stephanie ¡no estudiaste! Reprobarás la materia 🎃")
    } */

if (estudiaste >= true) {alert (nombre + "¡Sí estudiaste! Aprobarás la materia")}
else {alert (nombre + "¡No estudiaste! Reprobarás la materia")}