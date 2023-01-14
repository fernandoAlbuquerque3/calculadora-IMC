/*
Abaixo de 17 Muito abaixo do peso
Entre 17 18,49 Abaixo do peso
Entre 18,5 e 24,99 Peso normal
Entre 25 e 29,99 Acima do peso
peso/(altura * altura);
*/
let peso;
let altura;
let imc;
let resultado;

function calcular() {

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);
    
    if(imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3>Cuidado, voce está muito abaixo do peso!</h3> <br/>';

        document.getElementById("peso").value = ''
        document.getElementById("altura").value = ''
        return false;
    }else if(imc > 17 && imc < 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3>Cuidado, voce está abaixo do peso!</h3> <br/>';

        document.getElementById("peso").value = ''
        document.getElementById("altura").value = ''
        return false;
    }else if(imc > 18.5 && imc < 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3>Otimo! voce está com peso normal!</h3> <br/>';

        document.getElementById("peso").value = ''
        document.getElementById("altura").value = ''
        return false;
    }else if(imc > 25 && imc < 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<h3>Atençao, voce está acima do peso!</h3> <br/>';

        document.getElementById("peso").value = ''
        document.getElementById("altura").value = ''
        return false;
    }else {
        return false;
    }
}