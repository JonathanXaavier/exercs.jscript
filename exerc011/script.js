function tabuada(){

    var num = document.getElementById("txtn1")
    var tab = document.getElementById("seltab")

    if(num.value == 0){
        window.alert("Insira dados com numeração acima de 0!")
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            var item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

}