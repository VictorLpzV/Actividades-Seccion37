import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de Personas';
  
/*
 personaAgregada(persona:Persona){
 //this.LogginService.enviaMensajeAConsola("Enviamos persona:"+ persona.nombre + "Apellido:"+persona.apellido);
  //this.personas.push(persona);
  this.personasService.agregarPersona(persona);
 }*/
}
