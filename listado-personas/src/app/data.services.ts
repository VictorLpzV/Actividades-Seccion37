import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient,
       private loginService:LoginService
        ){
    }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    //guardar Personas
    guardarPersonas(personas:Persona[]){
      const token = this.loginService.getIdToken();
      this.httpClient.put('https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
      .subscribe(
        response=>console.log("resultado de guardar las personas: "+response),
        error=>console.log("Error al guardar Personas: "+error)  
      );
    }

    modificarPersona(index:number,persona:Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url='https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth='+token;
        this.httpClient.put(url,persona)
            .subscribe(
                response=>console.log("Resultado de modificar el objeto persona: "+ response),error=>console.log("Error en modificar Persona: "+error)
            )
            
    } 

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url: string;
        url='https://listado-personas-f90c5-default-rtdb.firebaseio.com/datos/'+ index + '.json?auth='+token;
        this.httpClient.delete(url)
            .subscribe(
                response=>console.log("Resultado de r+eliminar persona: "+ response),error=>console.log("Error en eliminar Persona: "+error)
            )
    }
}