/* 1. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano 
(não é necessário considerar o mês em que ela nasceu). */

let ano_nasc = prompt("Digite o ano de nascimento: ")
let idade = 2022 - ano_nasc

if(idade>=16){
    alert("Está autorizado(a) votar.")
}else{
    alert("Você não tem a idade mínima para votar.")
}