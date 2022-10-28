
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var mn = data.getMinutes()
var sg = data.getSeconds()
msg.innerHTML = `Agora são ${hora} horas  ${mn} minutos e ${sg} segundos`

if (hora >= 0 && hora < 12){
    img.src= 'pastajabes/jabes1.png' 
    document.body.style.background = '#e2cd9f'
}

else if (hora >= 12 && hora <18){
    img.src= 'pastajabes/jabes2.png'
    document.body.style.background = '#b9846f'
}

else {
    img.src = 'pastajabes/jabes3.png'
    document.body.style.background = '#515154' 
}
}