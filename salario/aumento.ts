let aumentarSalario = (salario: number, aumento: number = 5): number => {
    let valor: number = 0;

    valor = salario + ((salario * aumento)/100);

    return valor;
}

console.log(`O seu novo salário é ${aumentarSalario(1000, 40)}`);