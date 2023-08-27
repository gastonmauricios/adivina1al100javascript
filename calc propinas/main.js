

    const totalPagar = parseInt(prompt("ingrese monto a pagar: "));
    const porcPro = parseInt(prompt("ingrese % de porpina: "));

    let propina = porcPro * totalPagar / 100;
    let total = totalPagar + propina;

    alert ("Datos del Pago total \n"  +total+ "\nla propina es de: " +propina+ "\nporcentaje de propina: " +porcPro)
    



