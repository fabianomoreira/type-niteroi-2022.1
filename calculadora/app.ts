import { Calculadora } from "./calculadora-base";
import { Cientifica } from "./calculadora-cientifica"

let calculadora = new Calculadora();

console.log(`O resultado da soma dos números é ${calculadora.somar(4, 5)}`);
console.log(`O resultado da subtração dos números é ${calculadora.subtrair(8, 5)}`);
console.log(`O resultado da multiplicação dos números é ${calculadora.multiplicar(2, 8)}`);
console.log(`O resultado da divisão dos números é ${calculadora.dividir(6, 0)}`);

let cientifica = new Cientifica();

console.log(`O resultado da potenciação é ${cientifica.elevarPotencia(2, 2)}`);