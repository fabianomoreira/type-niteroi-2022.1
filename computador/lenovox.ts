import { Laptop } from "./computador-base";
import { Gamer } from "./gamer";

export class LenovoX extends Laptop implements Gamer{
    memoriaDeVideo: number = 512;
    
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`O brilho subiu ${valor} pontos`);
    }
}