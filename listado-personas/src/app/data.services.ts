import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){
    }

    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos.json');
    }

    //guardar Personas
    guardarPersonas(personas:Persona[]){
      this.httpClient.put('https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos.json',personas)
      .subscribe(
        response=>console.log("resultado de guardar las personas: "+response),
        error=>console.log("Error al guardar Personas: "+error)  
      );
    }

    modificarPersona(index:number,persona:Persona){
        let url: string;
        url='https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos/'+ index + '.json';
        this.httpClient.put(url,persona)
            .subscribe(
                response=>console.log("Resultado de modificar el objeto persona: "+ response),error=>console.log("Error en modificar Persona: "+error)
            )
            
    } 

    eliminarPersona(index:number){
        let url: string;
        url='https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos/'+ index + '.json';
        this.httpClient.delete(url)
            .subscribe(
                response=>console.log("Resultado de r+eliminar persona: "+ response),error=>console.log("Error en eliminar Persona: "+error)
            )
    }
}