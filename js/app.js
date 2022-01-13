// var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);
// titulo.textContent = "Buena vida Nutrición";
// Para clase el ., para id #

//var peso = tdPeso.textContent;
//console.log(paciente);
//console.log(tdPeso);
//console.log(peso);



var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdGordura = paciente.querySelector(".info-gordura");
    var gordura = tdGordura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if (!pesoEsValido) {
        console.log('Peso incorrecto');
        tdImc.textContent = "Peso incorrecto"
        pesoEsValido = false;

        paciente.classList.add("paciente-incorrecto");
    }

    if (!alturaEsValida) {
        console.log('Altura incorrecta');
        tdImc.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if (pesoEsValido && alturaEsValida) {

        tdImc.textContent = calcularIMC(peso, altura);
    }
}
function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function validarPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
}
function validarAltura(altura) {
    if (altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false; 
    }
}



