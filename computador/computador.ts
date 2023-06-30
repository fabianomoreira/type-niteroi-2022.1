class Laptop{
    tela: number;

    constructor(tela: number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log('O monitor do laptop foi ligado');
    }
}

let computador = new Laptop(14);
computador.ligarMonitor();

class Lenovo extends Laptop{
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`O brilho subiu ${valor} pontos`);
    }
}

let computador2 = new Lenovo();

computador2.ligarMonitor();
computador2.aumentarBrilho(5);

interface Gamer{
    memoriaDeVideo: number;
}

class LapTopGamer extends Laptop implements Gamer{
    memoriaDeVideo: number = 512;
    
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`O brilho subiu ${valor} pontos`);
    }
}