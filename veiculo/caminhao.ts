import { Veiculo } from "./veiculo";

export class Caminhao extends Veiculo{
    tamanhoCacamba: number;

    constructor(cor: string, fabricante: string, modelo: string, cacamba: number){
        super(cor, fabricante, modelo);
        this.tamanhoCacamba = cacamba;
    }

    descarregar(): void {
        console.log(`O caminhão descarregou sua carga`);
    }
}