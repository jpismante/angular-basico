//Importación de módulos.
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Importanción de componentes.
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
    //Se declaran los componentes que se usarán (los que se encuentran dentro de esta carpeta.)
    declarations: [
        ListadoComponent,
        HeroeComponent
    ],
    //Se exportan solo los componentes que se mostrarán a público.
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]

})

export class HeroesModule{}   
