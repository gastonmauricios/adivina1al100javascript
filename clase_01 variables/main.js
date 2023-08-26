// javascript  comentario en una linea //

/* comentario multilinea */

// Interaccion

// alert("hola. Como estan?"); // sentencia
// console.log("imprimir un mensaje en la consola");
// prompt("ingrese su nombre"); // prompt ingresa datos de usuario

// Variables //tipos de datos string number boolean undefined null

let first_name = "Gaston"; // string entre comillas ""   // = operador de asignacion == de comparacion
first_name = "Chicha" //   js es debilmente tipado. una var  puede tener distintos tipos de datos
first_name = 2 // number

let last_name

console.log(last_name);
last_name = "Mauricios"
console.log(last_name)
console.log(first_name)


first_name = prompt ("ingrese nombre")
console.log("Hola, buen dia " + first_name)
console.log("Hola, buen dia" + " " + first_name)
console.log(`Hola, buen dia ${first_name}`)


const fecha_naciemiento = 1900
console.log(fecha_naciemiento)


// operadores

// let a = '10'
// let b = '20'

let a = 10
let b = 20

console.log(typeof a);
console.log(typeof b);

let resultado = a + b
console.log(`el resultado de ${a} + ${b} es: ${resultado}`); // concatena 1020 no los suma.

// calculadora de edad
// pregunta al usuario su año de nacimiento y muestra su edad actual utilizando la funcion prompt

let anio_naciemiento = prompt ("ingrese fecha nacimeinto: ");
let resta = 2023 - anio_naciemiento
console.log(typeof anio_naciemiento)
console.log(`su edad es: ${resta}`)


// pasar dolar a euro con factor de conversion prompt y alert mostrar el resultado

let dolares = parseInt (prompt(`Cconvertidor dolar a pesos ingrse dolares: `)); // parseInt valores numericos
let pesos = 610
total = dolares * pesos
console.log(`el valor de U$s ${dolares}  es: ARS ${total}`);
alert(total)

// metodos datos los primitivos

let str = `Hola`;
console.log(str.length);

// el primer caracter 
alert(str[0]); // H posicion 0
alert( str.at(0)); // H

let texto = "que lindo es javascript";
alert(texto.indexOf ("javaScript")); // 0, ya que JavaScript es encontrado al comienzo distingue en mayus y min

alert(texto.indexOf("javascript")); //-1, no es encontrado, la busqueda toma en cuenta minusculas y mayuscula

alert(texto.indexOf("id")); //1, "id" es encontrado en la posicion 1 (..idget con id)

alert(texto.includes("Widget")); // false

alert(texto.includes ("es")); // true