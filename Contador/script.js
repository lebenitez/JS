// Primeiro que montei 100% sozinho. 
// Consegui chegar a um resultado próximo, porém usando array e copiando e colando emoji. 
// O problema que tive aqui foi que o resultado é apresentado com uma vírgula no meio dos números.

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
// Criando o array que utilizarei para armazenar a contagem
var resultado = []

// Validando o preenchimento dos campos.
if (inputInicio.value.length == 0) {
    res.innerHTML = 'Impossível contar! Verifique o número de início.'
} else if (inputFim.value.length == 0) {
    res.innerHTML = 'Impossível contar! Verifique o número de fim.'

// Caso o passo não seja preenchido, considero o passo 1 faço a conta. 
} else if (inputPasso.value.length == 0 || inputPasso.value == 0) {
    window.alert('Atenção! Passo vazio, considerando passo 1')
// Validando se o número preenchido no início é maior que o preenchido no campo fim para fazer a conta crescente
    if (inicio < fim) {
        while (inicio <= fim) {
            resultado.push(inicio + "👉🏻")        
            inicio += 1
        }
    resultado.push("🏁")
    res.innerHTML = resultado
// Caso o número preenchido no campo início for menor que o do campo fim, faço a conta decrescente.
    } else {
        while (inicio >= fim) {
            resultado.push(inicio + "👉🏻")        
            inicio -= 1
        }
    resultado.push("🏁")
    res.innerHTML = resultado
    }
// Caso todos os campos (início, fim e passo) tenham sido preenchidos, venho para este trecho
} else {
// Validando neste trecho se o campo início é menor que o campo fim para fazer a conta crescente    
    if (inicio < fim) {
        while (inicio <= fim) {
            resultado.push(inicio + "👉🏻")        
            inicio +=passo
        }
    resultado.push("🏁")
    res.innerHTML = resultado
// Caso o campo início seja maior que o fim, faço a contagem descrescente
    } else {
        while (inicio >= fim) {
            resultado.push(inicio + "👉🏻")        
            inicio -= passo
        }
    resultado.push("🏁")
    res.innerHTML = resultado
    }
}
}