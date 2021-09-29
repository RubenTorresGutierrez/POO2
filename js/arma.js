//Rubén Torres

export class Arma{
  constructor(){
    this.cargador = 6;
    this.balas = 0;
    Arma.contador++;
  }
  cargar(balas){
    this.balas += balas;
    if (this.balas > this.cargador)
      this.balas = this.cargador;
  }
  disparar(){
    console.log('¡PUM!');
  }
  static getNumArmas(){ //Se declara como método static, porque no es un método de un objeto, es un método de la clase, no le voy a preguntar a un Trabuco (por ejemplo) cuantas armas hay
    document.write(`Hay ${Arma.contador} armas ahora.`);
  }
}
Arma.contador = 0; //Atributo estático
//La herencia se utiliza para crear una clase que es un TIPO de la clase padre
