var inputGanhoPorMes = document.querySelector("#ganho-mes")

console.log(inputGanhoPorMes)

var inputHorasporDia = document.querySelector("#horas-dia")

console.log(inputHorasporDia)

var spanHora = document.querySelector("#resposta")

console.log(spanHora)

function calcularValorHora() {
    //22 são os dias uteis mês
var qtdDeHorasMes = inputHorasporDia.valueAsNumber * 22

   // tofixed determina a qtd de numeros depois da virgula
var ValorDaHora = (inputGanhoPorMes.valueAsNumber / qtdDeHorasMes) .toFixed(2)

spanHora.textContent = "R$" + ValorDaHora

spanHora.innerHTML = "R$" + valorDaHora

console.log(calcularValorHora)

}





