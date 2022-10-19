import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas:Persona[]=[
        new Persona("Victor","Lopez"),
        new Persona("Liam","Vasquez"),
        new Persona("Valeria", "Morales")
    ];

    saludar=new EventEmitter<number>();

    constructor(private LogginService: LogginService){}

    agregarPersona(persona:Persona){
       this.LogginService.enviaMensajeAConsola("Agregamos persona:"+persona.nombre);
        this.personas.push(persona);
    }
}