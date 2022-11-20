function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','images/menino.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','images/adolescentehomem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','images/homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src','images/idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','images/menina.jpeg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','images/adolescentemulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','images/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src','images/idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

/*
Link para a aula relacionada a este exercício aqui: https://www.youtube.com/watch?v=f5es-PpaUI8&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=27
*/