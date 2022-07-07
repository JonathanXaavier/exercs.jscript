let num = [5,8,2,9,3]

console.log(`Nosso vetor é ${num}`)
num.push(7)
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} posicoes.`)
/*
Qual o Valor na Posição 3 do vetor?
*/
console.log(`Valor na posição 3 é o ${num[3]}.`)
num.sort()
console.log(`Nosso vetor após comando de ordem crescente será ${num}`)
/*
Como mandar escrever na tela cada posição?
*/
let nums = [2,7,4,9,1]

for(let cont=0;cont < nums.length;cont++){
    console.log(`Posição ${cont} -  Valor ${nums[cont]}`)
}
/*
Comando que mostra a posição de um valor:
*/

let posic= nums.indexOf(9)

if(posic == -1){
    console.log(`Valor não encontrado`)
} else {
    console.log(`O valor está na posição ${posic}`)
}
