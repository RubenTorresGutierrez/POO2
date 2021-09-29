//Rubén Torres
//'use strict' //No es necesario cuando se usan módulos

//Importar
import {Persona} from './persona.js';
import {Trabuco} from './trabuco.js';
import {M16} from './m16.js';
import {Arma} from './arma.js';

class App {
  constructor() {
    window.onload = this.iniciar.bind(this); //Cuando hayan cargado todos los archivos (html, css, js, ...) llamas al método iniciar
  }
  iniciar(){
    let p1 = new Persona('Ana');
    let p2 = new Persona('Blas');
    p1.arma1 = new Trabuco();
    p1.arma1.disparar();
    p2.arma1 = new M16();
    p2.arma1.disparar();
    Arma.getNumArmas();
  }
}

new App();


// Hay 2 relaciones entre clases
//  -De Herencia: hereda, deriva o extiende de la clase padre
//  -De uso: un objeto de una clase llama a un método de otra clase

// ----------------------------------------------------

//EXAMEN
//Ejercicios
//Teoría: herencia, reglas, callback...
//Modificación peli
