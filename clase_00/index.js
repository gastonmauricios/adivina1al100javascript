
let buttons = document.querySelectorAll(".btn")

function createMesagge() {
    let paragraph = document.createElement ("p")
    let texto = prompt ("como te llamas")
    paragraph.innerText = `hola como estas ${texto}`
    paragraph.classList.add("paragraph")

    
    document.body.appendChild(paragraph)
}

// document.addEventListener("DOMContentLoaded", () => {

// }
// ) //  carga el html primero  // 
for ( let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", createMesagge) // linea de codigo es una sentencia.
}

// variables

let name = "Gaston"; // operador de asigncion = // declarar variables comillas dobles o simple
let age = 45;    // numerico     // si no tiene comillas interpreta una var.
let email;
let esCasado = false;
console.log(typeof esCasado);

console.log(typeof name);
console.log(age);
console.log(email); // console.log imprime una variable o mensaje


email = "gastonmauricios58@gmail.com"
console.log(email);
name = "Chicha";
console.log(name);

const direccion = "calle falsa 3";
console.log(direccion);

// direccion="calle" // no se puede cambiar el valor inicial a dif de la variable
// funciones son bloques de codigos que se pueden llamar desde otras partes del programa la palabra clave FUNCTION SUMAR (A+B)