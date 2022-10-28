function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        if (sexo[0].checked){
        genero = 'homem'
        if(idade >=0 && idade < 13){
            //criança
            img.setAttribute('src', 'mas e fem/masc1.png')

        }else if(idade < 18){
            //adolescente
            img.setAttribute('src', 'mas e fem/masc2.png')

        }else if(idade < 30){
            //jovem
            img.setAttribute('src', 'mas e fem/masc3.png')

        }else if(idade < 10000000000000000000000000000000000000000){
            //adulto
            img.setAttribute('src', 'mas e fem/masc4.png')
        }
    }

    else if(sexo[1].checked){
        genero = 'mulher'
        if(idade >=0 && idade < 13){
            //criança
            img.setAttribute('src', 'mas e fem/fem1.png') 
        }else if(idade < 18){
            //adolescente
            img.setAttribute('src', 'mas e fem/fem2.png') 
        }else if(idade < 30){
            //jovem
            img.setAttribute('src', 'mas e fem/fem3.png') 
        }else if(idade < 1000000000){
            //adulto
            img.setAttribute('src', 'mas e fem/fem4.png') 
        }
        res.style.textAlign= 'center'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos`
    res.appendChild(img)

}
}
