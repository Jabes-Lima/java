function verificar(){
   var cm = document.querySelector('input#media')
   //var cm = 5
    var res = document.querySelector('div#res')
    if(cm.value <= 0){
        window.alert('Não existe pal com 0 ou menor cm. verifique os dados e tente novamente!')
    }else if(cm.value > 0 && cm.value < 10 ){
        res.innerHTML = `Seu pal e extremamente pequeno🤢 Se mate!🤬`
    }else if(cm.value > 9 && cm.value < 16){
        res.innerHTML = `Seu pal e Pequeno, porem dar pra sobreviver😴`
    }else if(cm.value > 15 && cm.value < 21){
        res.innerHTML = `Seu Pal e grande Parabens👏🏻`
    }else if(cm.value > 20 && cm.value < 33){
        res.innerHTML = 'Esta na medida de um Ator Porno🍷🗿'
    }else{
        res.innerHTML = 'Voçe e um Roludo 🍷🗿'
    }

}


