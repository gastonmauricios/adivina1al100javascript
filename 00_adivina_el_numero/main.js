var min = 1;
var max = 20;
var aleatorio = Math.floor(Math.random() * max - min + 1) + min //objeto MATH numero entre 0 y el 1 multiplicar max - min + 1 (+ min) genera un numero aleatorio
var intentos = 0;
var nombre = prompt('Ingrese su nombre');
var numero;

// bucle for con los intentos y luego while . 5 son los intentos ++(+1) aumenta en uno!
// parseInt por que se usan numeros enteros

for (intentos; intentos < 5; intentos++){
    numero = parseInt (prompt (nombre+' ,ingrese un numero entre ' +min+' y el ' +max))

    if (numero >= min && numero <= max){
        if(numero > aleatorio){
            alert('el numero es mas bajo');
        } else if( numero < aleatorio){
            alert('el numero es mas alto')
        } else if (numero == aleatorio) {
            break;
        }
    } else {
        alert('ingresar numero entre '+min+' y ' +max)
    }

    
}
if (numero == aleatorio){
    alert('felicidades adivinaste en numero en ' +intentos+ 'intentos. ' );

}  else {
        alert('se agotaron los intentos, intenta nuevamente')
    
}