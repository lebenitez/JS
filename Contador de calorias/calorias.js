var tipo1 = 'barrinha'
var porcao_gramas1 = 22
var calorias_porcao1 = 88

var tipo2 = 'bolacha'
var porcao_gramas2 = 30
var calorias_porcao2 = 118

var result1 = calorias_porcao1 / porcao_gramas1
var result2 = calorias_porcao2 / porcao_gramas2




if (result1 > result2) {
    var result_geral = result1 - result2
    console.log(`${tipo2} tem ${result1} calorias por grama!`)
    console.log(`São ${result_geral} calorias a menos que ${tipo1}`)
} else {
    var result_geral = result2 - result1
    console.log(`${tipo1} tem ${result_geral} menos calorias.`)
    console.log(`São ${result_geral} calorias a menos que ${tipo2}! `)
}
