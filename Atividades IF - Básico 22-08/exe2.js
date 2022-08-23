/*2. Faça um programa que receba um número do usuário e verifique se 
este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”*/

let number = prompt("Digite um número: ")

if(number%2===0){
    alert("O número "+number+ " é PAR!")
}else{
    alert("O número "+number+ " é ÍMPAR!")
}