function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    img.src = 'images/morning-image1.png'
    document.body.style.background ='#fad663'
} else if (hora >= 12 && hora < 18) {
    img.src = 'images/afternoon-image1.png'
    document.body.style.background = '#86b0d4'
} else {
    img.src = 'images/night-image1.png'
    document.body.style.background = '#421718'
}
}