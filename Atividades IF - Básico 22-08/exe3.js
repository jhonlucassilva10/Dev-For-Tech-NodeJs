/*3. Escreva um programa que verifique a validade de uma senha fornecida pelo 
usuário. A senha válida é o número 1234. 
Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha seja inválida*/

let senha = prompt("Digite a senha: ")
let senhaValida = "1234"

if(senha.match(senhaValida)){
    alert("ACESSO PERMITIDO.")
}else{
    alert("ACESSO NEGADO.")
}




