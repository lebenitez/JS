// Neste consegui chegar ao resultado esperado, ainda assim, estou com um problema na hora de rodar mais de uma vez a função. 
// Ele não está limpando a tela e termina concatenando as contagens, se eu rodo duas vezes, ele apresenta o resultado anterior + o atual sem limpar a tela. 

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
var resultado = inicio

// Validando o preenchimento dos campos.
if (inputInicio.value.length == 0) {
    res.innerHTML = 'Impossível contar! Verifique o número de início.'
} else if (inputFim.value.length == 0) {
    res.innerHTML = 'Impossível contar! Verifique o número de fim.'

// Caso o passo não seja preenchido, considero o passo 1 faço a conta. 
} else if (inputPasso.value.length == 0 || inputPasso.value == 0) {
    window.alert('Atenção! Passo vazio, considerando passo 1')
    // Validando se o número preenchido no início é menor que o preenchido no campo fim para fazer a conta crescente
    if (inicio < fim) {
        while (resultado <= fim) {
            res.innerHTML += `${resultado} \u{1F449}`
            resultado += 1
        }
        res.innerHTML += `\u{1F3C1}`
// Caso o número preenchido no campo início for menor que o do campo fim, faço a conta decrescente.
    } else {
        while (resultado >= fim) {
            res.innerHTML += `${resultado} \u{1F449}`
            resultado -= 1
        }
    res.innerHTML += `\u{1F3C1}`
    }

// Caso todos os campos (início, fim e passo) tenham sido preenchidos, venho para este trecho
} else {
// Validando neste trecho se o campo início é menor que o campo fim para fazer a conta crescente    
    if (inicio < fim) {
        while (resultado <= fim) {
            res.innerHTML += `${resultado} \u{1F449}`
            resultado += passo
        }
    res.innerHTML += `\u{1F3C1}`
// Caso o campo início seja maior que o fim, faço a contagem descrescente
    } else {
        while (resultado >= fim) {
            res.innerHTML += `${resultado} \u{1F449}`
            resultado -= passo
        }
    res.innerHTML += `\u{1F3C1}`
    }
}
}