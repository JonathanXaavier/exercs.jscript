function verificar() {
   var data = new Date() /* Comando para pegar a data atual */
   var ano = data.getFullYear() /* Comando para pegar o ano atual */
   var fano = document.getElementById("txtano") /* Ano que veio do formulário no HTML(ano de nascimento) */
   var res = document.querySelector("div#res")

   if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') /* Esse comando cria uma tag pra mim */
        img.setAttribute('id','foto') /* Neste comando atribui um ID foto na tag img acima */
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src','2bb-menino.jpg')
            }
            else if (idade < 21 ){
                //jovem
                
            }
            else if (idade < 50){
                //adulto
            }
            else {
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
            }
            else if (idade < 21 ){
                //jovem
            }
            else if (idade < 50){
                //adulto
            }
            else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
        res.appendChild(img)
   } 
}
