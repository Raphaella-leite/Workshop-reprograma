var inputValordaHora = document.querySelector("#valor-hora")

console.log(inputValordaHora)

var inputHorasdoProjeto = document.querySelector("#horas-projeto")

console.log(inputHorasdoProjeto)


var spanHora = document.querySelector("#resposta")

console.log(spanHora)


function calcular() {


var HorasdoProjeto = inputValordaHora.valueAsNumber * 22

var HorasdoProjeto = (inputValordaHora.valueAsNumber * inputHorasdoProjeto.valueAsNumber) .toFixed(2)

spanHora.textContent = "R$:"+ HorasdoProjeto

spanHora.innerHTML = "R$:"+ HorasdoProjeto

console.log(calcular)


}


