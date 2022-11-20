// Nesta tentativa, assisti a aula e substitui o while por um for e fiz alguns ajustes como a parte de trazer os emojis via unicode. 
// Ainda assim, por algum motivo não consegui chegar ao resultado. 

function contar() {
// Mapeando os campos que foram preenchidos no formulário html
var inputInicio = document.getElementById('txtinicio')
var inputFim = document.getElementById('txtfim')
var inputPasso = document.getElementById('txtpasso')
var res = document.querySelector('div#res')

// Fazendo a conversão para variáveis numéricas que utilizarei dentro do script
var inicio = Number(inputInicio.value)
var fim = Number(inputFim.value)
var passo = Number(inputPasso.value)

// Validando o preenchimento dos campos.
if (inputInicio.value.length == 0) {
    res.innerHTML = 'Impossível contar! Verifique o número de início.'
} else if (inputFim.value.length == 0) {
    res.innerHTML = 'Impossível contar! Verifique o número de fim.'

// Caso o passo não seja preenchido ou seja preenchido com zero, considero o passo 1 faço a conta. 
} else if (inputPasso.value.length == 0 || inputPasso.value == 0) {
    window.alert('Atenção! Passo vazio, considerando passo 1')

// Validando se o número preenchido no início é menor que o preenchido no campo fim para fazer a conta crescente
    if (inicio < fim) {
        for(let resultado = inicio; inicio <= fim; resultado += passo) {
            //res.innerHTML = `${resultado} \u{1F449}`
            res.innerHTML = resultado
        }
        //res.innerHTML = `\u{1F3C1}`
// Caso o número preenchido no campo início não for menor, então faço a conta decrescente.
    } else {
        for(let resultado = inicio; inicio >= fim; resultado -= passo) {
            //res.innerHTML += `${resultado} \u{1F449}`
            res.innerHTML = resultado
        }
        //res.innerHTML += `\u{1F3C1}`
        }
// Caso todos os campos (início, fim e passo) tenham sido preenchidos, venho para este trecho
} else {
// Validando neste trecho se o campo início é menor que o campo fim para fazer a conta crescente    
    if (inicio < fim) {
        for(let resultado = inicio; inicio <= fim; resultado += passo) {
            //res.innerHTML += `${resultado} \u{1F449}`
            res.innerHTML = resultado
        }
    //res.innerHTML += `\u{1F3C1}`
// Caso o campo início não seja menor que o fim, faço a contagem descrescente
    } else {
        for(var resultado = inicio; inicio >= fim; resultado -= passo) {
            //res.innerHTML += `${resultado} \u{1F449}`
            res.innerHTML = resultado
            }
        //res.innerHTML += `\u{1F3C1}`
        }
    }
}