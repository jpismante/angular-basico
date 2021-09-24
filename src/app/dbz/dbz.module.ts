import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';



//Se debe exportar los modulos para que estos puedan ser usados fuera de nestra app. 
@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ], 
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  providers: [
    DbzService
  ]
})
export class DbzModule { }



