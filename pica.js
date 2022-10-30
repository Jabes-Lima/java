function verificar(){
   var cm = document.querySelector('input#media')
   //var cm = 5
    var res = document.querySelector('div#res')
    if(cm.value <= 0){
        window.alert('Não existe pal com 0 ou menor cm. verifique os dados e tente novamente!')
    }else if(cm.value > 0 && cm.value < 7 ){
        res.innerHTML = `Seu pal e De ${cm.value} cm. ta muito pequeno se mate!`
    }else if(cm.value > 6 && cm.value < 15){
        res.innerHTML = `seu pal e de ${cm.value} cm. ta pequeno porem da pra sobreviver!`
    }else if(cm.value > 14 && cm.value < 21){
        res.innerHTML = `Seu pal e De ${cm.value} cm. Seu pal e grande mais voçe e broxa e precoçe!`
    }else if(cm.value > 20 && cm.value < 33){
        res.innerHTML = 'Parabens vc e um kid bengala da vida!'
    }else{
        res.innerHTML = 'voçe e um Deus!'
    }

}


