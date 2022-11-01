function contar(){
     var ini = document.getElementById('txti')
     var fim = document.getElementById('txtf')
     var passo = document.getElementById('txtp')
     var res = document.getElementById('res')

     if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('Preencha os dados sua p****')
     }else{
        res.innerHTML = `contando...<br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('passo invalido! conseiderando passo 1!')
            p = 1
        }
        if(1 < f){
            
            for(var c = i; c <= f; c += p){
            res.innerHTML += `${c}`}
        
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c}`}
        }

    }   
         
}