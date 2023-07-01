export class Veiculo{
    cor: string; 
    fabricante: string; 
    modelo: string;

    constructor(cor: string, fabricante: string, modelo: string){
        this.cor = cor;
        this.fabricante = fabricante;
        this.modelo = modelo;
    }

    acelerar(veiculo: string): void {
        console.log(`O(A) ${veiculo} acelerou!`);
    }

    parar(veiculo: string): void {
        console.log(`O ${veiculo} parou!`);
    }
}