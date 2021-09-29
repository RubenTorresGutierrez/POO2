//Rubén Torres

//Importar
import {Arma} from './arma.js';

export class Trabuco extends Arma{
  constructor(){
    super(); //Lama al constructor de la clase padre OBLIGATORIO antes de hacer nada
    this.cargador = 1;
  }
  disparar(){
    console.log('¡¡¡PATA PUUUUM!!!');
  }
}
