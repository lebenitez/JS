function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22  // Testando manualmente a funcionalidade
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'images/morning.png'
        document.body.style.background = '#BFBFBF'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#BF5E26'
    } else {
        // BOA NOITE!
        img.src = 'images/night.jpg'
        document.body.style.background = '#26403B'
    }

}
