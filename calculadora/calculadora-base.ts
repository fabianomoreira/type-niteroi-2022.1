export class Calculadora{
    somar(numero1: number, numero2: number): number{
        return (numero1 + numero2);
    }

    subtrair(numero1: number, numero2: number): number{
        return (numero1 - numero2);
    }

    multiplicar(numero1: number, numero2: number): number{
        return (numero1 * numero2);
    }

    dividir(numero1: number, numero2: number): number{
        let resultado;

        if(numero2 == 0){
            resultado = -1;
        } else {
            resultado = (numero1 / numero2);
        }

        return resultado;
    }
}