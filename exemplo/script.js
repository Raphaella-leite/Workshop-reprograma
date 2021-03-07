//aqui peguei o input

var inputAno = document.querySelector("#ano")

//Aqui peguei o campo resposta pra colocar o valor do ano ( inputAno)

var paragrafoResposta = document.querySelector("#respostaAno")

//Aqui criei uma função com o nome "cliquei" que eu escolhi
//Dentro do pragrafoResposta eu queria que ele fizesse a inserção do ano

function cliquei() {
    paragrafoResposta.innerHTML = inputAno.valueAsNumber
}

//ValueAsNunber transforma uma string (texto) em um número no javascript 

var titulo = document.querySelector("h1")

