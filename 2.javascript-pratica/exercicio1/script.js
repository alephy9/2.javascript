function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'peixe-generico.png'
        document.body.style.background = '#555'
    }
    
    else if (hora >=12 && hora <= 18) {
        img.src = 'rei-de-espada-dicaprio.jpg'
        document.body.style.background = '#111'
    } 
    
    else {
        img.src = 'gravando-rindo.jpg'
        document.body.style.background = '#000'
    }

}
