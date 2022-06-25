function calcular(){
    var txtv = window.document.querySelector(' input#txtn1 ')
    var res = window.document.querySelector(' div#res ') 
    var vel = Number(txtv.value)
    res.innerHTML += `A velocidade do veículo é de ${vel} km/h.`
   
    if(vel > 60){
        res.innerHTML += ` <p> Situação: <strong> MULTADO. </strong>  </p> `
    }
    
    else(vel < 60)
        res.innerHTML += ` <p> Dirija com segurança. </p>`
    
    }
    function clean(){
        res.innerHTML = " "
    }

