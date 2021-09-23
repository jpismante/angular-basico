import { Component } from '@angular/core';

// Se genera componente manual para poder ir generando la aplicación. 
@Component({
    //Se genera el selector, que es donde se va cargar la aplicación. 
    selector: 'app-contador',
    //Se carga el código del template (plantilla que se usará para mostrar en el front).
    template: `
    
    <h1>{{title}}</h1>
    <h3>La base es <strong> {{base}} </strong></h3>

    <button (click) = "acumular(base)"> + 1</button>
    <span>{{numero}}</span>
    <button (click) = "acumular(-base)"> - 1</button>
    <br><br>
    `
})
//Se genera la clase de contador para poder generar las propiedades.
export class ContadorComponent{
    title : string = 'Contador App';
    numero: number = 10;
    base  : number = 10;
//Se generan funciones que se usarán en el template.
  acumular( valor: number ){
    this.numero += valor;
  }
}