

document.getElementById("boton").addEventListener("click", iniciar); //revisa el evento. ej el click
function iniciar(){
    let vidas = 10;
    let numerosU=[];
    let num = Math.floor((Math.random()*100)+1);
    console.log(num)

    while(vidas>0){
        let numU = prompt("inicio de juego con " + vidas + " vidas, ingresa el numero 1 al 100 : ");
        numerosU.push(numU);
        if(numU==num){
            alert("Ganaste campeon :D usaste estos numeros: " +numerosU);
            
            break;
        } // cierre if
        if (numU>num){
            alert("el numero es menor");
        }
        if (numU<num){
            alert("el numero es mayor");
        }// cierre if
        vidas--;

    } // cierre while
    if(vidas==0){
        alert("game over :(")
    }


} // cierre funcion

