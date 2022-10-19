import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LogginService } from './LogginService.service';
import { PersonasService } from './personas.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogginService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }