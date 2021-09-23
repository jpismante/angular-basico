import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'IronMan';
    edad  : number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre(): void{
        this.nombre = 'SpiderMan';
    }
    cambiarEdad(): void{
        this.edad = 30;
    }

}
/*VOID -> tipo de "dato" que se pone en las funciones cuando
 no va haber RETURN o cuando la función no retorna nada.*/