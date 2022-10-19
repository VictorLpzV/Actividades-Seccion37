import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],

})
export class FormularioComponent implements OnInit {

  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string="";
  apellidoInput:string="";
 // @ViewChild("nombreInput") nombreInput:ElementRef;
  //@ViewChild("apellidoInput") apellidoInput:ElementRef;

  constructor(private LogginService:LogginService, private personasService:PersonasService){
    this.personasService.saludar.subscribe(
      (indice:number)=>alert("El indice es: "+ indice)
    );
  }

  ngOnInit(){

  }


  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
   // this.personas.push(persona1);
   //this.LogginService.enviaMensajeAConsola("Enviamos persona:"+ persona1.nombre + "Apellido:"+persona1.apellido);
   //this.personaCreada.emit(persona1);
   this.personasService.agregarPersona(persona1);
  }

}
