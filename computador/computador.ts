import {Laptop} from "./computador-base"
import {Lenovo} from "./lenovo"
import {LenovoX} from "./lenovox"

let computador = new Laptop(14);
computador.ligarMonitor();

let computador2 = new Lenovo();

computador2.ligarMonitor();
computador2.aumentarBrilho(5);

let lenovoGamer = new LenovoX();

lenovoGamer.aumentarBrilho(20);
lenovoGamer.ligarMonitor();