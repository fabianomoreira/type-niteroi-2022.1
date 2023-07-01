import { Veiculo } from "./veiculo"

export class Moto extends Veiculo{
    empinar(): void{
        console.log(`A moto empinou!`);
    }
}