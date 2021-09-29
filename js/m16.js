//Rubén Torres

//Importar
import {Arma} from './arma.js';

export class M16 extends Arma{
  constructor(){
    super();
    this.cargador = Number.POSITIVE_INFINITY;
  }
  disparar(){
    console.log('¡Ta-ta-ta-ta-ta-ta-ta!');
  }
}
