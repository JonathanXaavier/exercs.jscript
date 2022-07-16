function verificar(){
   var data = new Date() /* Comando para pegar a data atual */
   var ano = data.getFullYear() /* Comando para pegar o ano atual */
   var form_ano = document.getElementById("ano") /* Ano que veio do formulário no HTML(ano de nascimento) */
   var res = document.getElementById("resultado")

   if(Number(form_ano.value) == 0 || Number(form_ano) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
   } else {
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''

        if (fsex[0].checked){
            genero = "Homem"
        } else if (fsex[1].checked){
            genero = "Mulher"
        }
        res.innerHTML = `Detectado ${genero} com ${idade} anos `
    }
}
