import { Moto } from "./moto";
import { Caminhao } from "./caminhao";

let moto01 = new Moto("verde", "kawasaki", "zx6R");
let caminhao01 = new Caminhao("Azul", "Volvo", "ZX01", 200);

moto01.acelerar("moto");
moto01.empinar();
caminhao01.acelerar("caminhão");