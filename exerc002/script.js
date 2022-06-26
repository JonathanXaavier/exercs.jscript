function analise(){
    var pais = window.document.querySelector('input#txt')
    var nac = String(txt.value)
    resposta.innerHTML = `Seu País é <strong> ${nac} </srong>`
    
    if(nac == "Brasil"){
        resposta.innerHTML += "<p>Vive no Brasil e é brasileiro.</p>"
    }
    else{
        resposta.innerHTML += "<p>Vive no Brasil e é estrangeiro.</p>"
    }
}
