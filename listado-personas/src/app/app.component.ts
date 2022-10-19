import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'listado de Personas';
  personas:Persona[]=[];

  constructor(private LogginService:LogginService, private personasService:PersonasService){}
  ngOnInit(): void {
    this.personas= this.personasService.personas;
  }
/*
 personaAgregada(persona:Persona){
 //this.LogginService.enviaMensajeAConsola("Enviamos persona:"+ persona.nombre + "Apellido:"+persona.apellido);
  //this.personas.push(persona);
  this.personasService.agregarPersona(persona);
 }*/
}
