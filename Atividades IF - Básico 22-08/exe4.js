// 4. As maçãs custam R$0,30 cada se forem compradas menos do que 12, e R$0,25 
// se forem compradas 12 ou mais. Escreva um programa 
// que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra.

let qtd_maça = prompt("Digite quantas maças você quer comprar: ")

if(qtd_maça<12){
    let preco_maça = 0.30
    let total = preco_maça * qtd_maça
    alert("O valor total é: "+ "R$"+total)
}else{
    let preco_maça = 0.25
    let total = preco_maça * qtd_maça
    alert("O valor total é: "+ "R$"+total)
}




