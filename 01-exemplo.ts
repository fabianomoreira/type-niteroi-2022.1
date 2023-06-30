/*
    Primeiro Exemplo TypeScript
*/
let nome: string;
let sobrenome: string;
nome = "Antonio";
sobrenome = "Lima"
console.log(nome + " " + sobrenome);

// Função mais básica (escrita parecida com a do Javascript)
function exibirIdade(idade: number): void{
    console.log("A idade é " + idade);
}

exibirIdade(18);